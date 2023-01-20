import axios from '../../axios'
import React , {useEffect , useState} from 'react'
import './rowpost.css'
import {  imageUrL , api_key } from '../../constant/constant'
import YouTube from 'react-youtube'

function Rowpost(props) {
    const [movie,setMovie] = useState([])
    const [urlid,seturlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovie(response.data.results)
        }).catch(err=>{
         //   alert('network err')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie = (id) =>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(response=>{
            if (response.data.results.length !== 0) {
                seturlId(response.data.results[0])
            }
        })
      }
    return (
        <div className='row' >
            <h1>{props.title}</h1>
            <div className='posters' >
                {movie.map((obj)=>
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallpost' : 'poster' } alt='poster' src={`${imageUrL + obj.backdrop_path }`} />
                )}
            </div> 
    { urlid &&       <YouTube opts={opts} videoId={urlid.key} /> }
        </div>
    )
}

export default Rowpost

// /movie/${id}/videos?api_key=${api_key}&language=en-US