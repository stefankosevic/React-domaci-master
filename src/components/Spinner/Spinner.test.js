import React from 'react'
import { render } from '@testing-library/react'
import Spinner from './Spinner'

describe('Spinner Component', () => {
  it('renders without crashing', () => {
    render(<Spinner />)
  })

  it('displays the loading message', () => {
    const { getByText } = render(<Spinner />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
