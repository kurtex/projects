import { Link } from 'react-router-dom'
import { useDrop } from 'react-dnd'
import ItemsType from './ItemsType.d'
import { useContext, useEffect } from 'react'
import { DelayedLinkContext } from '../contexts/DelayedLinkContext'

const HASH_NAVIGATION = '/projects/#/'

interface DelayedLinkProps extends React.ComponentPropsWithoutRef<'link'> {
  to: string
  target?: string
  delay?: number
  dropItemAccepted?: ItemsType
}

const DelayedLink: React.FC<DelayedLinkProps > = ({ to, target = '_self', delay = 0, children, dropItemAccepted = ItemsType.NONE }) => {
  const { play, setPlay } = useContext(DelayedLinkContext)

  const styles = {
    cursor: (dropItemAccepted === ItemsType.NONE) ? 'pointer' : 'auto'
  }

  const clickHandler = (e: React.MouseEvent): void => {
    e.preventDefault()

    // If there isn´t any dropable item for the link, then it becomes a common link with click handler
    if (dropItemAccepted === ItemsType.NONE) {
      return doDelayedNavigation()
    }
  }

  // Wait the passed seconds before visiting the URL
  const doDelayedNavigation = (): void => {
    setTimeout(() => {
      window.open(HASH_NAVIGATION + to, target)
    }, delay)
  }

  const [, drop] = useDrop(() => ({
    accept: dropItemAccepted,
    drop: () => {
      setPlay(true)
    }
  }))

  useEffect(() => {
    if (play && delay > 0) {
      doDelayedNavigation()
    }
  }, [delay])

  return (<Link to={to} style={styles} onClick={clickHandler} ref={drop}> {children} </Link>)
}

export default DelayedLink
