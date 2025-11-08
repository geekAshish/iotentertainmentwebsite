
import { Typography } from '../ui/Typography'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const ScrollStackComponent = () => {
  return (
    <div>
        <ScrollStack>
        <ScrollStackItem>
            <Typography variant='h1' className='text-white'>Influencer Marketing</Typography>
            <Typography variant='h1' className='text-white'>This is the first card in the stack</Typography>
        </ScrollStackItem>
        <ScrollStackItem>
            <Typography variant='h1' className='text-white'>Card 2</Typography>
            <Typography variant='h1' className='text-white'>This is the second card in the stack</Typography>
        </ScrollStackItem>
        <ScrollStackItem>
            <Typography variant='h1' className='text-white'>Card 3</Typography>
            <Typography variant='h1' className='text-white'>This is the third card in the stack</Typography>
        </ScrollStackItem>
        </ScrollStack>
</div>
  )
}

export default ScrollStackComponent

