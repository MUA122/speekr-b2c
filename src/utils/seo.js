import { localizedPath } from "./i18n";

const SITE_NAME = "Speekr";
const DEFAULT_IMAGE = "/images/hero.png";

function upsertMeta(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    element.setAttribute(key, value);
  });
  return element;
}

function upsertLink(selector, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    element.setAttribute(key, value);
  });
  return element;
}

export function removeJsonLd(id) {
  document.head.querySelector(`script[data-seo="${id}"]`)?.remove();
}

export function setJsonLd(id, data) {
  removeJsonLd(id);
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seo = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  return () => removeJsonLd(id);
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${window.location.origin}${path}`;
}

export function applySeo({
  title,
  description,
  keywords,
  path = "/",
  locale = "en",
  type = "website",
  image = DEFAULT_IMAGE,
}) {
  const localized = localizedPath(path, locale);
  const canonical = absoluteUrl(localized);
  const imageUrl = absoluteUrl(image);
  const alternateLocale = locale === "ar" ? "en" : "ar";
  const alternatePath = localizedPath(path, alternateLocale);

  document.title = title;
  upsertMeta('meta[name="description"]', { name: "description", content: description });
  if (keywords) {
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords });
  }
  upsertMeta('meta[name="robots"]', {
    name: "robots",
    content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  });
  upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#EEF3CD" });

  upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });
  upsertLink('link[rel="alternate"][hreflang="en"]', {
    rel: "alternate",
    hreflang: "en",
    href: absoluteUrl(localizedPath(path, "en")),
  });
  upsertLink('link[rel="alternate"][hreflang="ar"]', {
    rel: "alternate",
    hreflang: "ar",
    href: absoluteUrl(localizedPath(path, "ar")),
  });
  upsertLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: "alternate",
    hreflang: "x-default",
    href: absoluteUrl(localizedPath(path, "en")),
  });

  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
  upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
  upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
  upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
  upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: title });
  upsertMeta('meta[property="og:locale"]', {
    property: "og:locale",
    content: locale === "ar" ? "ar_AR" : "en_US",
  });
  upsertMeta('meta[property="og:locale:alternate"]', {
    property: "og:locale:alternate",
    content: alternateLocale === "ar" ? "ar_AR" : "en_US",
  });

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
  upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: title });
  upsertMeta('meta[name="twitter:url"]', { name: "twitter:url", content: canonical });

  return { canonical, imageUrl, alternatePath };
}

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Speekr",
  url: window.location.origin,
  logo: absoluteUrl("/images/logo.svg"),
  sameAs: [
    "https://www.instagram.com/speekr.ai_/",
    "https://www.linkedin.com/company/speekr-ai/",
    "https://www.facebook.com/profile.php?id=61582806519272",
  ],
});

export const websiteSchema = (locale = "en") => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Speekr",
  url: absoluteUrl(localizedPath("/", locale)),
  inLanguage: locale === "ar" ? "ar" : "en",
  publisher: organizationSchema(),
});
