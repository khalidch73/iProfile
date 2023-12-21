import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Facts from './components/Facts'
import Technology from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Facts/>
      <Portfolio/>
      <Technology/>
      <Services/>
      <Testimonials/>
      <Contact/>
      {/* <Footer /> */}
    </div>
  )
}
