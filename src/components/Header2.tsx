import React, { useState, useEffect } from 'react'
import { HeaderProps } from '../types/types'

const Header = ({ title, subTitle }: HeaderProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log("I'm unmounting")
    }
  }, [])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>{title}</h1>
      {subTitle ? <h2>{subTitle}</h2> : <div></div>}
      <div>{count}</div>
    </>
  )
}

export default Header
