import React, { useEffect, useState } from 'react'

const DateTime = () => {

  const [time, setTime] =
    useState(new Date())

    

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const day =
    days[time.getDay()]

  const date =
    time.getDate()

  const month =
    months[time.getMonth()]

  const year =
    time.getFullYear()

  const clock =
    time.toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }
    )

  return (
    <p>
      {day} {date} {month} {year} {clock}
    </p>
  )
}

export default DateTime