/* global expect, test */

import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import CrossLink from './CrossLink'

const historyStub = {
  push: () => {},
  replace: () => {},
  createHref: () => {},
  location: {
    pathname: '/'
  },
  listen: () => {}
}

const defaultProps = {
  to: '/',
  history: {...historyStub}
}

test('renders a <CrossLink>', () => {
  const node = (
    <MemoryRouter>
      <CrossLink {...defaultProps} />
    </MemoryRouter>
  )
  const wrapper = shallow(node)
  expect(wrapper.find('CrossLink')).toHaveLength(1)
})

test('pass CrossLink as-is if history is missing', () => {
  const props = { to: '/' }
  const node = (
    <MemoryRouter>
      <CrossLink {...props} />
    </MemoryRouter>
  )
  const wrapper = shallow(node)
  expect(wrapper.find('CrossLink')).toHaveLength(1)
})
