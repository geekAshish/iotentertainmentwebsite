import NavBar from "@/components/common/NavBar/NavBar"
import { Container } from "@/components/ui/Container"
import Home from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="bg-[#000000]">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default BaseLayout
