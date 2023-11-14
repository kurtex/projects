import DelayedLink from './DelayedLink'
import Animation from './Animation'
import { delayedLinkContext } from './contexts/delayedLinkContext'
import { useState } from 'react'
import itemsType from './itemsType'

interface DropableLinkProps {
  animationData: unknown
  to: string
  linkText: string
  dropItemAccepted: itemsType
}

const DropableLink: React.FC<DropableLinkProps> = ({ animationData, to, linkText, dropItemAccepted }) => {
  const [play, setPlay] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  return (
    <delayedLinkContext.Provider value={{ play, setPlay, animationDuration, setAnimationDuration }}>
      <DelayedLink to={to} delay={animationDuration} dropItemAccepted={dropItemAccepted} target='_blank'>
        <Animation animationData={animationData} />
        <span>{linkText}</span>
      </DelayedLink>
    </delayedLinkContext.Provider>
  )
}

export default DropableLink
