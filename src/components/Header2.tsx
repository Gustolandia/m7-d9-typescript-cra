import React, { useState, useEffect } from 'react'
import { HeaderProps } from '../types/types'

import {Card} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';






const Header = ({ title, subTitle }: HeaderProps) => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()
  const [updated, setUpdated] = useState(false)
  const [search, setSearch] = useState("")

  useEffect( () =>  {
    
      async function fetchTracks(search1:String){
      const reponse1 =await  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+search1, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "4f5d2c7e7fmsh25bac9519881221p1a5a2ajsn734f8cc02d07"
        }

      })
      let result= await reponse1.json() 
      setData(result.data)
      setUpdated(true)
      console.log(data, search1)

      }
      if (updated===false&&search){
        fetchTracks(search)}
    
  });

  return (
    <>
      <h1 style={{cursor:"pointer"}}onClick={() => setCount(count + 1)}>{title}</h1>
      {subTitle ? <h2>{subTitle}</h2> : <div></div>}
      <div>{count}</div>

      <input placeholder="search here" onChange={(e) => {setSearch(e.target.value); setUpdated(false)}} ></input>
      
    </>
  )
}

export default Header
