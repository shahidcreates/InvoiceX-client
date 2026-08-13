import React from 'react'
import Menubar from '../components/Menubar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StepsCard from '../components/StepsCard'
import Footer from '../components/Footer'
import { Feather } from 'lucide-react'
import Features from '../components/Features'
import WhyInvoiceX from '../components/WhyInvoiceX'
import CTA from '../components/CTA'

const LandingPage = () => {
  return (
   <>
      <main>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <WhyInvoiceX/>
        <CTA/>
        <Footer/>
      </main>
   </>
  )
}

export default LandingPage
