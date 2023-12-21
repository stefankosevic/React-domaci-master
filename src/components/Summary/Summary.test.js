import React from 'react'
import { render } from '@testing-library/react'
import Summary from './Summary'

describe('Summary component', () => {
  it('renders without crashing', () => {
    render(<Summary />)
  })

  it('displays the correct icon', () => {
    const icon = 'fa fa-cloud'
    const { getByTestId } = render(<Summary icon={icon} />)
    expect(getByTestId('summary-icon')).toBeInTheDocument()
  })

  it('displays the correct temperature', () => {
    const temp = 75
    const { getByText } = render(<Summary curTemp={temp} />)
    expect(getByText('75°')).toBeInTheDocument()
  })

  it('displays the correct summary', () => {
    const summary = 'Partly Cloudy'
    const { getByText } = render(<Summary curSumm={summary} />)
    expect(getByText('Partly Cloudy')).toBeInTheDocument()
  })
})
