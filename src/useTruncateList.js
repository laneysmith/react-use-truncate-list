import { useState, useEffect, useCallback } from 'react'

/**
 * @param {Number} totalCount - total number of items in the full list
 * @param {Number} initialCount - optional number of items to display before truncating the list
 * @return {Object} an object containing the displayed count, remaining count, an action to reveal
 * the full list, and an action to reset displayed and remaining to their initial values
 */
export default function useTruncateList(totalCount, initialCount = 5) {
  const initial = initialCount < 0 ? 0 : initialCount
  const [ displayed, setDisplayCount ] = useState(initial)
  const remaining = totalCount - displayed < 0 ? 0 : totalCount - displayed
  const displayAllAction = useCallback(
    () => setDisplayCount(totalCount),
    [totalCount]
  )
  const truncateAction = useCallback(
    () => setDisplayCount(initial),
    [initial]
  )

  useEffect(() => setDisplayCount(initial), [
    initial,
    totalCount
  ])

  return {
    displayed,
    remaining,
    displayAllAction,
    truncateAction
  }
}
