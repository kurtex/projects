import { createContext } from 'react'

/**
 * Interface for the values allowed in the {@link delayedLinkContext}.
 */
export interface delayedLinkContextProps {
  play: boolean
  setPlay: (p: boolean) => void
  animationDuration: number
  setAnimationDuration: (d: number) => void
}

/**
 * Context for {@link DelayedLink} to pass props between its child components.
 */
export const delayedLinkContext = createContext<delayedLinkContextProps>({
  play: false,
  setPlay: () => {},
  animationDuration: 0,
  setAnimationDuration: () => {}
})
