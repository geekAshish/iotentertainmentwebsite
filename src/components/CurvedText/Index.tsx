import CurvedLoop from './CurvedText'

const CurvedLoopComponent = () => {
  return (
        <CurvedLoop 
        marqueeText="Be ✦ Creative ✦ With ✦ It's ✦ On ✦ Trends"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
  )
}

export default CurvedLoopComponent