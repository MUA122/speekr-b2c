import { useEffect, useMemo, useState } from 'react'

export const PRICES = {
  EGYPT: {
    currency: 'EGP',
    starterMonthly: 'EGP 430',
    proMonthly: 'EGP 850',
    starterAnnual: 'EGP 4300',
    proAnnual: 'EGP 8500',
    teamMonthly: 'EGP 1999',
    teamAnnual: 'EGP 19000',
  },
  SAUDI: {
    currency: 'SAR',
    starterMonthly: 'SAR 85',
    proMonthly: 'SAR 110',
    starterAnnual: 'SAR 850',
    proAnnual: 'SAR 999',
    teamMonthly: 'SAR 180',
    teamAnnual: 'SAR 1800',
  },
  OTHER: {
    currency: 'USD',
    starterMonthly: '$23',
    proMonthly: '$29',
    starterAnnual: '$240',
    proAnnual: '$299',
    teamMonthly: '$48',
    teamAnnual: '$480',
  },
}

const COUNTRY_PRICE_KEYS = {
  EG: 'EGYPT',
  SA: 'SAUDI',
}

const TIMEZONE_PRICE_KEYS = {
  'Africa/Cairo': 'EGYPT',
  'Asia/Riyadh': 'SAUDI',
}

const COUNTRY_LOOKUP_URLS = [
  'https://api.country.is/',
  'https://ipwho.is/',
  'https://ipapi.co/json/',
]

function normalizeCountry(country) {
  return typeof country === 'string' ? country.trim().toUpperCase() : ''
}

function getRegionFromLocale(locale) {
  try {
    return new Intl.Locale(locale).region
  } catch {
    return ''
  }
}

function getFallbackPriceKey() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  if (TIMEZONE_PRICE_KEYS[timezone]) return TIMEZONE_PRICE_KEYS[timezone]

  const locales = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const locale of locales) {
    const region = normalizeCountry(getRegionFromLocale(locale))
    if (COUNTRY_PRICE_KEYS[region]) return COUNTRY_PRICE_KEYS[region]
  }

  return 'OTHER'
}

function getCountryFromLookup(data) {
  return normalizeCountry(data.country || data.country_code)
}

async function fetchCountryCode(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(3000) })
  if (!response.ok) return ''

  const data = await response.json()
  return getCountryFromLookup(data)
}

async function fetchCountryPriceKey() {
  for (const url of COUNTRY_LOOKUP_URLS) {
    try {
      const country = await fetchCountryCode(url)
      if (country) return COUNTRY_PRICE_KEYS[country] || 'OTHER'
    } catch {
      // Try the next lookup provider.
    }
  }

  return ''
}

export function splitPrice(price) {
  if (price.startsWith('$')) {
    return { prefix: '$', amount: price.slice(1) }
  }

  const [prefix, ...rest] = price.split(' ')
  return { prefix, amount: rest.join(' ') }
}

export function useLocalizedPrices() {
  const [priceKey, setPriceKey] = useState('OTHER')

  useEffect(() => {
    let isMounted = true

    fetchCountryPriceKey()
      .then((detectedPriceKey) => {
        if (!isMounted) return

        setPriceKey(detectedPriceKey || getFallbackPriceKey())
      })
      .catch(() => {
        if (isMounted) {
          setPriceKey(getFallbackPriceKey())
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return useMemo(() => PRICES[priceKey] || PRICES.OTHER, [priceKey])
}
