import Lottie from 'lottie-react';
import { useContext, useEffect, useRef } from 'react';
import { DelayedLinkContext } from '../contexts/DelayedLinkContext';

const Animation = ({ animationData }) => {
  const lottieRef = useRef();
  const { play, setPlay } = useContext(DelayedLinkContext);

  const runAnimation = () => {
    lottieRef.current.stop();
    lottieRef.current.play();
  };

  const styles = {
    cursor: 'auto'
  };

  useEffect(() => {
    if (play) {
      runAnimation();
      setPlay(false);
    }
  }, [play]);

  return (
    <Lottie
      animationData={animationData}
      lottieRef={lottieRef}
      style={styles}
      autoplay={false}
      loop={false}
    />
  );
};

export default Animation;
