import { useState, useEffect } from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import styles from '../styles/beer.module.css'

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const goBack = useNavigate()
    const  {id}  = useParams()

    
    const getBeer = async()=>{
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        const data = await res.json()
        setBeer(data[0])  
    };

    useEffect(()=>{
        getBeer()
    },[])

    const handleGoBack = () => {
        goBack( - 1 )
    }
    
  
  
  return (
    <div className={styles.div}>
        <h2 >Cerveza numero...{id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" className={styles.img}/>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={handleGoBack}>Go back</button>
    </div>

  )
}

export default Beer