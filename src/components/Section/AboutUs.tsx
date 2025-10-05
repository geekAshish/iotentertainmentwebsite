import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'
import { Button } from '../ui/Button'

import iot_about_img from '@/assets/iot_description.png'

const AboutUs = () => {
  return (
    <Container>

        <div className='flex items-center justify-center gap-5'>
            <div className='w-1/2 flex items-end justify-end'>
                <img src={iot_about_img} className='max-w-[40em]' alt="iot image" />
            </div>
            <div className='w-1/2'>
                <Typography className='text-white uppercase' variant='h2'>About Us</Typography>
                
                <div className='mt-10'>
                    <Typography className='text-white uppercase font-thin' variant='h2'>We are a digital production team.</Typography>
                    <Typography className='text-white uppercase' variant='p'>Gleamy is a leading design & software development agency based in berlin. We help startups & Fortune 500 companies delight humans on the other side of the screen.</Typography>
                </div>

                <button className='bg-black underline underline-offset-4 text-white mt-3'>Contact Us</button>
            </div>
        </div>
    </Container>
  )
}

export default AboutUs