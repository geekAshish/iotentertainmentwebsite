import { Container } from '../ui/Container'
import { Typography } from '../ui/Typography'

import iot_about_img from '@/assets/iot_description.png'
import CurvedLoopComponent from '../CurvedText/Index'
import ContactButton from '../ui/Button2'

const AboutUs = () => {
  return (
    <Container className='my-20'>
        <div className='relative'>


        <div className='flex items-center justify-between'>
            <div className='w-1/2'>
                <img src={iot_about_img} className='max-w-[40em]' alt="iot image" />
            </div>
            <div className='w-1/2'>
                <Typography className='text-neutral-200 uppercase' variant='h2'>About Us</Typography>
                
                <div className='mt-10'>
                    <Typography className='text-neutral-500 uppercase font-thin' variant='h2'>We are a digital production team.</Typography>
                    <Typography className='text-neutral-500 uppercase' variant='p'>Gleamy is a leading design & software development agency based in berlin. We help startups & Fortune 500 companies delight humans on the other side of the screen.</Typography>
                </div>

                {/* <button className='bg-black underline underline-offset-4 text-white mt-3'>Contact Us</button> */}
                <ContactButton />
            </div>
        </div>

<div className=' top-36 w-full absolute'>

        <CurvedLoopComponent />
</div>
        </div>

    </Container>
  )
}

export default AboutUs