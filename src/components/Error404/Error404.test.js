import React from 'react'
import { render } from '@testing-library/react'
import Error404 from './Error404'

describe('Error404 component', () => {
  it('renders without crashing', () => {
    render(<Error404 />)
  })

  it('displays the error message', () => {
    const { getByTestId } = render(<Error404 />)
    expect(getByTestId('error-404')).toBeInTheDocument()
  })
})
