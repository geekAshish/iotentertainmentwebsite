import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"
import { navbar } from "@/modules/constant/constant"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Container className="flex">
      {/* <div>
        <ul className="flex flex-col gap-3">
          {
            navbar.map((d, i) => {
              return <Link to={d.route} key={i} className="text-white">{d.text}</Link>
            })
          }
        </ul>
      </div> */}


      <div>
        <Typography variant="h1" className="text-white font-thin">Brand.<span className="text-gray-600">Design</span>.<span className="text-gray-600">Product</span>.</Typography>
        <Typography variant="h1" className="text-white font-thin">In-House Development.</Typography>
        <Typography variant="h1" className="text-white font-thin">&More</Typography>
      </div>
    </Container>
  )
}

export default Home
