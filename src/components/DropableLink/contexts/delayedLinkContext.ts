import { createContext } from 'react'

/**
 * Interface for the values allowed in the {@link DelayedLinkContext}.
 */
export interface DelayedLinkContextProps {
  play: boolean
  setPlay: (p: boolean) => void
  animationDuration: number
  setAnimationDuration: (d: number) => void
}

/**
 * Context for {@link DelayedLink} to pass props between its child components.
 */
export const DelayedLinkContext = createContext<DelayedLinkContextProps>({
  play: false,
  setPlay: () => {},
  animationDuration: 0,
  setAnimationDuration: () => {}
})
