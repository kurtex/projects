import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useContext, useEffect, useRef } from 'react'
import { delayedLinkContext } from './contexts/delayedLinkContext'
import { convertSecondToMillis } from '../../utils/conversionUtils'

interface AnimationProps {
  animationData: unknown
}

const Animation: React.FC<AnimationProps> = ({ animationData }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const currentLottie = lottieRef.current
  const { play, setPlay, animationDuration, setAnimationDuration } = useContext(delayedLinkContext)

  // Play the animation
  const playAnimation = (): void => {
    resetAnimation()
    currentLottie?.play()
  }

  // Resets the animation to its first frame
  const resetAnimation = (): void => currentLottie?.goToAndStop(0, true)

  const styles = {
    cursor: 'auto'
  }

  useEffect(() => {
    if (play) {
      // We get the duration of the animation and we set in the status shared by the context
      const lottieAnimationDuration = currentLottie?.getDuration(false)
      setAnimationDuration(lottieAnimationDuration === undefined ? 0 : convertSecondToMillis(lottieAnimationDuration))
    }

    // If the animation has any time, then run the animation and restart the animation options
    if (animationDuration > 0) {
      playAnimation()
      setPlay(false)
      setAnimationDuration(0)
    }
  }, [play, animationDuration])

  return (
    <Lottie
      className='m-auto w-32'
      animationData={animationData}
      lottieRef={lottieRef}
      style={styles}
      autoplay={false}
      loop={false}
    />
  )
}

export default Animation
