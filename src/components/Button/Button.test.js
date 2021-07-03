import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

const propsData = {
  title: 'Submit',
}

describe('The Button Component', () => {
  it('snapshot renders correctly', () => {
    const { asFragment } = render(
      <Button
        title={propsData.title}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should renders with correct title', () => {
    const { queryByText } = render(
      <Button
        title={propsData.title}
      />,
    )
    expect(queryByText('Submit')).toBeTruthy()
  })
})
