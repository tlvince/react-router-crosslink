import React from 'react'
import PropTypes from 'prop-types'
import { Link as BaseLink } from 'react-router-dom'

class Link extends BaseLink {
  getChildContext () {
    if (!this.props.history) {
      return
    }
    return {
      router: {
        history: this.props.history
      }
    }
  }

  render () {
    const { history, ...rest } = this.props
    return <BaseLink {...rest} />
  }
}

Link.childContextTypes = {
  router: PropTypes.object
}

Link.propTypes = {
  history: PropTypes.object
}

export default Link
