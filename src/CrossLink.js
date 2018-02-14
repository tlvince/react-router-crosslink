import React from 'react'
import {
  Link,
  Router
} from 'react-router-dom'

const CrossLink = ({history, ...props} = {}) => {
  if (!history) {
    return <Link {...props} />
  }
  return <Router history={history}><Link {...props} /></Router>
}

export default CrossLink
