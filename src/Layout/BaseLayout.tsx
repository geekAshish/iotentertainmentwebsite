import { Footer } from "@/components/common/Footer/Footer"
import Cursor from "@/components/Cursor"
import Home from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="relative">
      <Cursor />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BaseLayout
