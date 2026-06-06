import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

function ScrollToTop() {
  return <ScrollRestoration />
}

export default function App() {
  return (
    <BrowserRouter basename="/mycaviar">
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
    </BrowserRouter>
  )
}
