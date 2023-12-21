import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />)
  })

  it('displays the day', () => {
    const { getByText } = render(<Card day="Monday" />)
    expect(getByText('Monday')).toBeInTheDocument()
  })

  it('displays the max temp', () => {
    const { getByText } = render(<Card maxTemp="20" />)
    expect(getByText('20°')).toBeInTheDocument()
  })

  it('displays the min temp', () => {
    const { getByText } = render(<Card minTemp="10" />)
    expect(getByText('10°')).toBeInTheDocument()
  })
})
