import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
  it('renders without crashing', () => {
    render(<Button />)
  })

  it('displays the svg', () => {
    const { getByAltText } = render(<Button />)
    expect(getByAltText('loupe')).toBeInTheDocument()
  })
})
