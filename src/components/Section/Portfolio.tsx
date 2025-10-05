import { YouTubeCarousel } from '../YoutubeCarousel'

const Portfolio = () => {
    const myVideos = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
        'https://youtu.be/LXb3EKWsInQ',
    ];

  return (
    <div>
        <YouTubeCarousel videoLinks={myVideos} />
    </div>
  )
}

export default Portfolio