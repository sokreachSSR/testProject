import React from 'react'
import GoogleMaps from './GoogleMaps'

export default function Map() {
  return (
    <div className ="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-100 flex flex-col items-center justify-center">
	    <GoogleMaps></GoogleMaps>
    </div>
  )
}
