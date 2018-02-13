/* global expect, test, jest */

import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import Link from './Link'

test('renders a React Router Link', () => {
  const createHref = jest.fn()

  const props = {
    to: '/',
    history: {
      push: () => {},
      replace: () => {},
      createHref
    }
  }

  const node = (
    <MemoryRouter>
      <Link {...props} />
    </MemoryRouter>
  )

  shallow(node).render()
  expect(createHref).toHaveBeenCalledWith({pathname: props.to})
})

test('does not blow up if history prop is missing', () => {
  const props = {
    to: '/'
  }

  const node = (
    <MemoryRouter>
      <Link {...props} />
    </MemoryRouter>
  )

  expect(() => shallow(node).render()).not.toThrow()
})
