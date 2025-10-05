import AboutUs from "@/components/Section/AboutUs"
import TextMarquee from "@/components/TextMarquee"
import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

const Home = () => {
  return (
    <>
      <Container className="relative flex">
        <div>
          <Typography variant="h1" className="text-white font-thin">Brand.<span className="text-gray-600">Design</span>.<span className="text-gray-600">Product</span>.</Typography>
          <Typography variant="h1" className="text-white font-thin">In-House Development.</Typography>
          <Typography variant="h1" className="text-white font-thin">&More</Typography>
        </div>

      </Container>

      <TextMarquee />

      <AboutUs />

    </>
  )
}

export default Home
