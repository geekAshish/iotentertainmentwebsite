import { AngledMarquee } from "@/components/AngledMarquee"
import TextMarquee from "@/components/TextMarquee"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { navbar } from "@/modules/constant/constant"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Container className="relative flex">
      {/* <div>
        <ul className="flex flex-col gap-3">
          {
            navbar.map((d, i) => {
              return <Link to={d.route} key={i} className="text-white">{d.text}</Link>
            })
          }
        </ul>
      </div> */}

      {/* <div className="absolute w-full bg-transparent flex flex-col justify-center overflow-hidden">
            <AngledMarquee 
              angle={-10} 
              speed="normal"
              pauseOnHover
            >
              <p className="m-8 text-6xl font-black text-white/20 whitespace-nowrap">
                MARKETING • BRANDING • MOTION • UI/UX •
              </p>
            </AngledMarquee>
          </div> */}


      <div>
        <Typography variant="h1" className="text-white font-thin">Brand.<span className="text-gray-600">Design</span>.<span className="text-gray-600">Product</span>.</Typography>
        <Typography variant="h1" className="text-white font-thin">In-House Development.</Typography>
        <Typography variant="h1" className="text-white font-thin">&More</Typography>
      </div>

    </Container>

    <TextMarquee />


    </>
  )
}

export default Home
