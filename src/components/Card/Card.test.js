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

  it('displays the correct icon', () => {
    const { getByTestId } = render(<Card icon="clear-day" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-sunny')
  })

  it('displays the correct icon night', () => {
    const { getByTestId } = render(<Card icon="clear-night" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-night-clear')
  })

  it('displays the correct icon rain', () => {
    const { getByTestId } = render(<Card icon="rain" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-rain')
  })

  it('displays the correct icon snow', () => {
    const { getByTestId } = render(<Card icon="snow" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-snow')
  })

  it('displays the correct icon sleet', () => {
    const { getByTestId } = render(<Card icon="sleet" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-sleet')
  })

  it('displays the correct icon wind', () => {
    const { getByTestId } = render(<Card icon="wind" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-wind')
  })

  it('displays the correct icon fog', () => {
    const { getByTestId } = render(<Card icon="fog" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-fog')
  })

  it('displays the correct icon cloudy', () => {
    const { getByTestId } = render(<Card icon="cloudy" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-cloudy')
  })

  it('displays the correct icon partly cloudy day', () => {
    const { getByTestId } = render(<Card icon="partly-cloudy-day" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-day-cloudy')
  })

  it('displays the correct icon partly cloudy night', () => {
    const { getByTestId } = render(<Card icon="partly-cloudy-night" />)
    expect(getByTestId('icon')).toHaveClass('wi wi-night-partly-cloudy')
  })
})
