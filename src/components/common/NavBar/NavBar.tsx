import { Button } from "@/components/ui/Button"
import { navbar } from "@/modules/constant/constant"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import logo_img from "@/assets/logo.png"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-10 rounded-full bg-neutral-950 px-4 py-3 shadow-lg mx-auto mt-6">
        <div className="flex justify-between items-center gap-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                {/* <img src={logo_img} alt="logo image" className="w-30" /> */}
                IOT<span className="text-blue-400">E</span>
            </div>

            <div>
                <ul className="flex items-center gap-3">
                    {
                        navbar.map((d, i) => {
                            return <Link to={d.route} key={i} className="text-sm font-medium text-white hover:text-black hover:bg-white hover:rounded-full py-2 px-3">{d.text}</Link>
                        })
                    }
                </ul>
            </div>
        </div>
        
        <div className="flex justify-center items-center gap-1">
            <Button rightIcon={<ArrowRight size={16}/>} className="cursor-pointer border rounded-full">Contact Us</Button>
        </div>
    </div>
  )
}

export default NavBar
