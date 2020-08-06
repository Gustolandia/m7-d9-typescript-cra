import React, { useState, useEffect } from 'react'
import { HeaderProps } from '../types/types'

const Header = (props: HeaderProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log("I'm unmounting")
    }
  }, [])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>{props.title}</h1>
      {props.subTitle ? <h2>{props.subTitle}</h2> : <div></div>}
      <div>{count}</div>
    </>
  )
}

export default Header
