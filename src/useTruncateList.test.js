import { useTruncateList } from './'
import { cleanup } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

/**
 * This is a temporary workaround to hide console errors because of a
 * known issue in the current version of react-test-renderer:
 * https://github.com/facebook/react/issues/14769
 */
const error = jest.spyOn(console, 'error')
error.mockImplementation(() => {})
afterAll(() => {
  error.mockRestore()
})

describe('useTruncateList', () => {
  afterEach(() => {
    cleanup()
  })

  it('should return the correct values when no initial count is not provided', () => {
    const { result } = renderHook(() => useTruncateList(12))

    expect(result.current.displayed).toEqual(5)
    expect(result.current.remaining).toEqual(7)
  })

  it('should return the correct values when optional initial count is provided', () => {
    const { result } = renderHook(() => useTruncateList(12, 3))

    expect(result.current.displayed).toEqual(3)
    expect(result.current.remaining).toEqual(9)
  })

  it('should return the correct values when an invalid negative initial count is provided', () => {
    const { result } = renderHook(() => useTruncateList(12, -3))

    expect(result.current.displayed).toEqual(0)
    expect(result.current.remaining).toEqual(12)
  })

  it('should update the displayed count and remaining count correctly when displayAllAction is called', () => {
    const { result } = renderHook(() => useTruncateList(12))

    expect(result.current.displayed).toEqual(5)
    expect(result.current.remaining).toEqual(7)

    act(() => {
      result.current.displayAllAction()
    })

    expect(result.current.displayed).toEqual(12)
    expect(result.current.remaining).toEqual(0)
  })

  it('should reset counts correctly when truncateAction is called', () => {
    const { result } = renderHook(() => useTruncateList(12))

    expect(result.current.displayed).toEqual(5)
    expect(result.current.remaining).toEqual(7)

    act(() => {
      result.current.displayAllAction()
    })

    expect(result.current.displayed).toEqual(12)
    expect(result.current.remaining).toEqual(0)

    act(() => {
      result.current.truncateAction()
    })

    expect(result.current.displayed).toEqual(5)
    expect(result.current.remaining).toEqual(7)
  })
})
