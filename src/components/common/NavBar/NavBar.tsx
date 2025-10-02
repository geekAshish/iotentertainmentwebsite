import { Button } from "@/components/ui/Button"
import { navbar } from "@/modules/constant/constant"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import logo_img from "@/assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6">
        <div className="flex justify-between items-center gap-10">
            <div>
                <img src={logo_img} alt="logo image" className="w-30" />
            </div>

            <div>
                <ul className="flex gap-3">
                    {
                        navbar.map((d, i) => {
                            return <Link to={d.route} key={i} className="text-white">{d.text}</Link>
                        })
                    }
                </ul>
            </div>
        </div>
        
        <div className="flex justify-center items-center gap-1">
            <Button rightIcon={<ArrowRight size={16}/>}>Contact Us</Button>
        </div>
    </div>
  )
}

export default NavBar
