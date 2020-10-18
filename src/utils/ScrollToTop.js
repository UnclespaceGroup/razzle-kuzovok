// packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { usePrevious } from 'react-use'

// Component for scrolling up when switching to a new page.
// To cancel scrolling, pass the noScroll parameter equal to true, in to parameter.
const ScrollToTop = ({ children }) => {
  const {
    pathname,
    state
  } = useLocation()

  const prevPathname = usePrevious(pathname)

  useEffect(() => {
    // if the previous location is not equal to the current one
    // and the current one does not have a state noScroll,
    // then scroll up
    //
    if (!state?.noScroll && (prevPathname !== pathname)) {
      window.scrollTo(0, 0)
    }
  }, [pathname, state])

  return children
}
ScrollToTop.propTypes = {
  children: PropTypes.node
}
export default React.memo(ScrollToTop)
