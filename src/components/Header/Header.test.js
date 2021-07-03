import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

const propsData = {
  heading    : 'ToDo App',
  description: 'Quick to add tasks, organize them into lists',
}

describe('The Header Component', () => {
  it('snapshot renders correctly', () => {
    const { asFragment } = render(
      <Header
        headerData={propsData}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should renders with correct heading', () => {
    const { getByText } = render(
      <Header
        headerData={propsData}
      />,
    )
    expect(getByText('ToDo App')).toBeInTheDocument()
  })

  it('should renders with correct description', () => {
    const { queryByText } = render(
      <Header
        headerData={propsData}
      />,
    )
    expect(
      queryByText('Quick to add tasks, organize them into lists'),
    ).toBeTruthy()
  })
})
