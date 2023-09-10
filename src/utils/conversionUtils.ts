
/**
 * Converts a seconds number type into milliseconds number type
 *
 * @param seconds The seconds to convert
 * @returns The time passed in milliseconds
 */
export function convertSecondToMillis (seconds: number): number {
  return Math.floor(seconds * 1000)
}
