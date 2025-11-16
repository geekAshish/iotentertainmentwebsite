import pr1 from '@/assets/portfolio/Untitled-1.jpg'
import pr2 from '@/assets/portfolio/ashish profesional boy.jpg'
import pr3 from '@/assets/portfolio/order pizza now.jpg'
import pr4 from '@/assets/portfolio/social media gym girl.jpg'
import pr5 from '@/assets/portfolio/t shirt sate.jpg'
import BounceCards from './BounceCard'
import { Typography } from '../ui/Typography'


const images = [
  pr1,
  pr2,
  pr3,
  pr4,
  pr5
];

const transformStyles = [
  "rotate(5deg) translate(-350px)",
  "rotate(0deg) translate(-140px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(140px)",
  "rotate(-5deg) translate(350px)"
];


export const BounceCardComponent = () => {
return <div>

<div className='flex items-center justify-center mt-[10em]'>

  {/* <Typography >Social Media Post's</Typography> */}

    <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
  />
</div>
</div>


}