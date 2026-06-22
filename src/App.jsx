import { useState } from 'react'
import Box from '@mui/material/Box'
import Header from './components/Header'
import Hero from './components/Hero'
import LogosMarquee from './components/LogosMarquee'
import ScenariosShowcase from './components/ScenariosShowcase'
import ProgramsCarousel from './components/ProgramsCarousel'
import VideoShowcase from './components/VideoShowcase'
import ConversationsCovered from './components/ConversationsCovered'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import PricingSection from './components/PricingSection'
import TeamsPricingSection from './components/TeamsPricingSection'
import CaseStudiesCarousel from './components/CaseStudiesCarousel'
import SplitCtaSection from './components/SplitCtaSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContactModal = () => setIsContactOpen(true)
  const closeContactModal = () => setIsContactOpen(false)

  return (
    <Box component="main" sx={{ minHeight: '100svh', bgcolor: 'primary.dark' }}>
      <Header onContactClick={openContactModal} />
      <Hero onBookDemoClick={openContactModal} />
      <LogosMarquee />
      <ScenariosShowcase />
      <ProgramsCarousel />
      <VideoShowcase />
      <ConversationsCovered />
      <TestimonialsCarousel />
      <PricingSection />
      <TeamsPricingSection onDemoClick={openContactModal} />
      <CaseStudiesCarousel />
      <SplitCtaSection onDemoClick={openContactModal} />
      <FaqSection onDemoClick={openContactModal} />
      <Footer onContactClick={openContactModal} />
      <ContactModal open={isContactOpen} onClose={closeContactModal} />
    </Box>
  )
}

export default App
