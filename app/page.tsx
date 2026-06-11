import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Ticker from "@/components/ticker"
import Solutions from "@/components/solutions"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Comparison from "@/components/comparison"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Solutions />
      <Services />
      <Stats />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}