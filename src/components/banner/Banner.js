import axios from '../../axios'
import { useEffect, useState } from 'react'
import { api_key , imageUrL} from '../../constant/constant'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response) => {
            console.log(response.data.results[0]);
            setMovie(response.data.results[1])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrL + movie.backdrop_path: " "})`}}>
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : " "}</h1>
                <div className='banner_buttons'>
                    <button className='button'>play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>{movie ? movie.overview : " "}</h1>
            </div>
            <div className="fade"></div>
        </div>
        </div>
    )
}

export default Banner