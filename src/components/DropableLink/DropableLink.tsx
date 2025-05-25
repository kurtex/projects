import DelayedLink from './DelayedLink'
import Animation from './Animation'
import { DelayedLinkContext } from './contexts/DelayedLinkContext'
import { useState } from 'react'
import itemsType from './itemsType'

interface DropableLinkProps {
  animationData: unknown
  to: string
  linkText: string
  dropItemAccepted: itemsType
  onIsOverChange?: (isOver: boolean) => void // New prop
}

const DropableLink: React.FC<DropableLinkProps> = ({ animationData, to, linkText, dropItemAccepted, onIsOverChange }) => {
  const [play, setPlay] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  return (
    <DelayedLinkContext.Provider value={{ play, setPlay, animationDuration, setAnimationDuration }}>
      <DelayedLink to={to} delay={animationDuration} dropItemAccepted={dropItemAccepted} target='_blank' onIsOverChange={onIsOverChange}> {/* Pass prop */}
        <Animation animationData={animationData} />
        <span>{linkText}</span>
      </DelayedLink>
    </DelayedLinkContext.Provider>
  )
}

export default DropableLink
