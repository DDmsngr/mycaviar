import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <video
          autoPlay muted loop playsInline
          poster="/mycaviar/img/hero.jpg"
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
      </div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/catalog"  element={<CatalogPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <FAQ />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/mycaviar">
      <Layout />
    </BrowserRouter>
  )
}
