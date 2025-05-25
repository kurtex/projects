import { Link } from 'react-router-dom'
import { useDrop } from 'react-dnd'
import itemsType from './itemsType.d'
import { useContext, useEffect } from 'react'
import { DelayedLinkContext } from './contexts/DelayedLinkContext'

const HASH_NAVIGATION = '/projects/#/'

interface DelayedLinkProps extends React.ComponentPropsWithoutRef<'link'> {
  to: string
  target?: string
  delay?: number
  dropItemAccepted?: itemsType
  onIsOverChange?: (isOver: boolean) => void // New prop
}

const DelayedLink: React.FC<DelayedLinkProps > = ({ to, target = '_self', delay = 0, children, dropItemAccepted = itemsType.NONE, onIsOverChange }) => {
  const { play, setPlay } = useContext(DelayedLinkContext)

  const styles = {
    cursor: (dropItemAccepted === itemsType.NONE) ? 'pointer' : 'auto'
  }

  const clickHandler = (e: React.MouseEvent): void => {
    e.preventDefault()

    // If there isn´t any dropable item for the link, then it becomes a common link with click handler
    if (dropItemAccepted === itemsType.NONE) {
      return doDelayedNavigation()
    }
  }

  // Wait the passed seconds before visiting the URL
  const doDelayedNavigation = (): void => {
    setTimeout(() => {
      window.open(HASH_NAVIGATION + to, target)
    }, delay)
  }

  const [{ isOver }, drop] = useDrop(() => ({ // Get isOver state
    accept: dropItemAccepted,
    drop: () => {
      setPlay(true)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver() // Collect isOver
    })
  }))

  useEffect(() => {
    if (onIsOverChange) {
      onIsOverChange(isOver);
    }
  }, [isOver, onIsOverChange]);

  useEffect(() => {
    if (play && delay > 0) {
      doDelayedNavigation()
    }
  }, [delay])

  return (<Link to={to} style={styles} onClick={clickHandler} ref={drop}> {children} </Link>)
}

export default DelayedLink
