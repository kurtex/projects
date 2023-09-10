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

const DelayedLink: React.FC<DelayedLinkProps > = ({ to, target = '_self', delay = 0, children, dropItemAccepted: dropElementAccepted = ItemsType.NONE }) => {
  const { play, setPlay } = useContext(DelayedLinkContext)

  const styles = {
    cursor: (dropElementAccepted === ItemsType.NONE) ? 'pointer' : 'auto'
  }

  const clickHandler = (e: React.MouseEvent): void => {
    e.preventDefault()

    if (dropElementAccepted === ItemsType.NONE) {
      return doDelayedNavigation()
    }

    doDelayedNavigation()
  }

  const doDelayedNavigation = (): void => {
    setTimeout(() => {
      window.open(HASH_NAVIGATION + to, target)
    }, delay)
  }

  useEffect(() => {
    if (play && delay > 0) {
      doDelayedNavigation()
    }
  }, [delay])

  const [, drop] = useDrop(() => ({
    accept: dropElementAccepted,
    drop: () => {
      setPlay(true)
    }
  }))

  return (<Link to={to} style={styles} onClick={clickHandler} ref={drop}> {children} </Link>)
}

export default DelayedLink
