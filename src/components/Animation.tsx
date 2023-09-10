import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useContext, useEffect, useRef } from 'react'
import { DelayedLinkContext } from '../contexts/DelayedLinkContext'
import { convertSecondToMillis } from '../utils/conversionUtils'

interface AnimationProps {
  animationData: unknown
}

const Animation: React.FC<AnimationProps> = ({ animationData }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const { play, setPlay, animationDuration, setAnimationDuration } = useContext(DelayedLinkContext)

  const runAnimation = (): void => {
    lottieRef.current?.stop()
    lottieRef.current?.play()
  }

  const styles = {
    cursor: 'auto'
  }

  useEffect(() => {
    if (play) {
      const lottieAnimationDuration = lottieRef.current?.getDuration(false)
      setAnimationDuration(lottieAnimationDuration === undefined ? 0 : convertSecondToMillis(lottieAnimationDuration))
    }

    if (animationDuration > 0) {
      runAnimation()
      setPlay(false)
      setAnimationDuration(0)
    }
  }, [play, animationDuration])

  return (
    <Lottie
      animationData={animationData}
      lottieRef={lottieRef}
      style={styles}
      autoplay={false}
      loop={false}
    />
  )
}

export default Animation
