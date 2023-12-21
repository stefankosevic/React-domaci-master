import React from 'react'
import { render, screen } from '@testing-library/react'
import CombinedData from './CombinedData'

describe('CombinedData component', () => {
  it('renders without crashing', () => {
    render(<CombinedData />)

    expect(screen.getByText('High')).toBeInTheDocument()
    expect(screen.getByText('Low')).toBeInTheDocument()
    expect(screen.getByText('Wind')).toBeInTheDocument()
  })
})
