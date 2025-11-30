
import { Typography } from '../ui/Typography';
import BounceCards from './BounceCard'
import { portfolioProjectsImages } from '@/constant';

const transformStyles = [
  "rotate(5deg) translate(-350px)",
  "rotate(0deg) translate(-140px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(140px)",
  "rotate(-5deg) translate(350px)"
];


export const BounceCardComponent = () => {
return <div>

<div className='bg-white py-10'>
  <Typography className='uppercase ml-7' variant='h1'>Social Media Post's</Typography>

  <div className='flex items-center justify-center mt-[1em] h-[30em]'>
  <BounceCards
    className="custom-bounceCards"
    images={portfolioProjectsImages}
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
</div>


}