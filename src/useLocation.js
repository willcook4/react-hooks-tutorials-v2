import { useState, useEffect } from 'react'

export default () => {
  const [ lat, setLat ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message))
  }, []) // empty array causes this function to run once for the entire lifecycle of this component

  // return { lat: lat , errorMessage: errorMessage}
  return [lat, errorMessage]
}
