import ComingSoon from "@/components/common/ComingSoon"
import { Footer } from "@/components/common/Footer/Footer"
import Layout from "@/components/common/Layout"
import Cursor from "@/components/Cursor"
import LeadForm from "@/components/LeadForm"
import Home from "@/pages/Home"
import LinkedInServicePage from "@/pages/LinkedInServicePage"
import { Route, Routes } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="relative">
      <Cursor />
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services/smm/linkedin" element={<LinkedInServicePage />} />
            <Route path="*" element={<ComingSoon />} />
          </Route>

        </Routes>
      </main>

      <LeadForm />

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BaseLayout
