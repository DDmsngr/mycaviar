import Hero from '../components/Hero'
import About from '../components/About'
import Advantages from '../components/Advantages'
import CatalogPreview from '../components/CatalogPreview'
import Clients from '../components/Clients'
import PriceRequest from '../components/PriceRequest'
import FAQ from '../components/FAQ'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <CatalogPreview />
      <Clients />
      <PriceRequest />
      <FAQ />
    </>
  )
}
