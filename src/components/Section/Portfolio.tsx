import { Container } from '../ui/Container';
import { Typography } from '../ui/Typography';
import { YouTubeCarousel } from '../YoutubeCarousel'

import p from '@/assets/p.png'

const Portfolio = () => {
    const myVideos = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
        'https://youtu.be/LXb3EKWsInQ',
    ];

  return (
    <Container className='mt-50'>
        <div>
            <Typography className='text-white uppercase' variant='h2'>Portfolio</Typography>
        </div>

        <div className='flex justify-center items-center gap-5 mt-5'>
            <div>
                <img src={p} alt="p" />
                {/* <GlitchTextComponent /> */}
            </div>
            
            <YouTubeCarousel videoLinks={myVideos} />
        </div>
    </Container>
  )
}

export default Portfolio