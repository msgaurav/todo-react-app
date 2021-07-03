import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

describe('The Footer Component', () => {
  it('snapshot renders correctly', () => {
    const { asFragment } = render(
      <Footer />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should renders with correct copyrights', () => {
    const { getByText } = render(
      <Footer />,
    )
    expect(
      getByText('2021 © Copyrights | All Right Reserved'),
    ).toBeInTheDocument()
  })
})
