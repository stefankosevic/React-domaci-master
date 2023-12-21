import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CombinedData from '../../components/CombinedData/CombinedData'
import Summary from '../../components/Summary/Summary'
import classes from './Forecast.module.css'
import Card from '../../components/Card/Card'
import { Link, Redirect } from 'react-router-dom'
import Error404 from '../../components/Error404/Error404'
import axios from 'axios'

const Forecast = (props) => {
  const [actualTime, setActualTime] = useState(null)
  const [location, setLocation] = useState(null)
  const [currentTemperature, setCurrentTemperature] = useState(null)
  const [currentSummary, setCurrentSummary] = useState(null)
  const [maxTemp, setMaxTemp] = useState(null)
  const [minTemp, setMinTemp] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [precipProb, setPrecipProb] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [aqi, setAqi] = useState(null)
  const [cardData, setCardData] = useState(null)

  useEffect(async () => {
    const { data } = await axios.get(
      `http://worldtimeapi.org/api/timezone/${props.data.data.forecast.location.tz_id}`,
    )
    setActualTime(
      new Date(data.datetime)
        .toLocaleDateString('en-US', {
          timeZone: props.data.data.forecast.location.tz_id,
          month: 'long',
          weekday: 'long',
          year: undefined,
          day: 'numeric',
        })
        .toUpperCase(),
    )

    setCurrentTemperature(Math.round(props.data.data.forecast.current?.temp_c))
    setCurrentSummary(props.data.data.forecast.current.condition.text)
    setMaxTemp(
      Math.round(
        props.data.data.forecast.forecast.forecastday[0].day.maxtemp_c,
      ),
    )
    setMinTemp(
      Math.round(
        props.data.data.forecast.forecast.forecastday[0].day.mintemp_c,
      ),
    )
    setWindSpeed(props.data.data.forecast.current.wind_kph)
    setPrecipProb(
      props.data.data.forecast.forecast.forecastday[0].day.daily_chance_of_rain,
    )
    setHumidity(props.data.data.forecast.current.humidity)
    setAqi(props.data.data.forecast.current.air_quality[`us-epa-index`])
    setLocation(props.data.data.location)

    setCardData(
      props.data.data.forecast.forecast.forecastday.map((day) => (
        <Card
          day={`${new Date(day.date).toLocaleDateString('en-GB', {
            month: undefined,
            year: undefined,
            hour: undefined,
            timeZone: props.data.data.forecast.location.tz_id,
            minute: undefined,
            second: undefined,
            weekday: 'short',
          })}, ${new Date(day.date).toLocaleDateString('en-GB', {
            month: undefined,
            year: undefined,
            hour: undefined,
            timeZone: props.data.data.forecast.location.tz_id,
            minute: undefined,
            second: undefined,
          })}`}
          key={day.date_epoch}
          icon={day.day.condition.icon}
          maxTemp={Math.round(day.day.maxtemp_c)}
          minTemp={Math.round(day.day.mintemp_c)}
        />
      )),
    )
  }, [])

  if (props.data === null) {
    return <Redirect to="/" />
  }

  if (props.data.data.forecast === undefined) {
    return <Error404 />
  }

  return (
    <React.Fragment>
      <div className={classes.NazadDugme}>
        <Link to="/">
          <i
            className="fas fa-arrow-left"
            style={{ fontSize: '30px', color: 'white' }}
          ></i>
        </Link>
      </div>
      <div className={classes.Wrapper}>
        <h2 style={{ fontSize: '30px' }}>{location}</h2>
        <p style={{ fontSize: '25px' }}>{actualTime}</p>
        <div className={classes.TopDiv}>
          <Summary
            icon={props.data.data.forecast.current.condition.icon}
            curTemp={currentTemperature}
            curSumm={currentSummary}
          />
          <CombinedData
            maxTemperature={maxTemp}
            minTemperature={minTemp}
            wind={windSpeed}
            rain={precipProb}
            humidity={humidity}
            aqi={aqi}
          />
        </div>
        <div className={classes.Cards}>{cardData}</div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps, null)(Forecast)
