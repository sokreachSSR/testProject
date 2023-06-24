import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkComponent({style,value,target}) {
  return (
    <Link to={target} className={style}>{value}</Link>
  )
}
