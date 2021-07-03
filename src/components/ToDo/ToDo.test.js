import React from 'react'
import { render } from '@testing-library/react'
import { UserContext } from '../../tools/api'
import ToDo from './index'

const TestComponent = () => (
  <UserContext.Provider value>
    <ToDo />
  </UserContext.Provider>
)

describe('The ToDo Component', () => {
  it('snapshot renders correctly', () => {
    const { asFragment } = render(
      <TestComponent />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should renders with correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <TestComponent />,
    )
    expect(getByPlaceholderText('Enter your task here')).toBeInTheDocument()
  })
})
