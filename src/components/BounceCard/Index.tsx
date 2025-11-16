
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

<div className='flex items-center justify-center mt-[10em]'>

  {/* <Typography >Social Media Post's</Typography> */}

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


}