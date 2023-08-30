import { useEffect, useState } from 'react'
import Card from "../components/Card"
import styles from '../styles/home.module.css'

const Home = () => {
  const [beers, setBeers] = useState([])

  const getBeers = async()=>{
    const res = await fetch("https://api.punkapi.com/v2/beers")
    const data = await res.json()
    setBeers(data)
    console.log(data)
  }

  useEffect(()=>{
    getBeers()
  },[])

  return (
    <div className={styles.grid}>
        {beers.length 
           ? beers.map(beer => (<Card data={beer} key={beer.id}/>))
           : null
        }
    </div>
  )
}

export default Home