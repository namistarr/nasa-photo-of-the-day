import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaPicCards from './NasaPicCards';


function NasaPics() {
    const[nasaPic, setNasaPic] = useState({});
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VmLoOwh4LVgARFqM4vZoIJWGVjgQ1IJ6yya25eW7')
        //possibly add to end of url above: &date=2019-07-17
        .then(response => {
            const nasaObject = response.data;            
            setNasaPic(nasaObject);
            console.log(nasaObject);
        })
        .catch(error => {
            console.log('error', error)
        })
    },[]);   


    return (
        <div className='nasa-container'>        
            <NasaPicCards title={nasaPic.title} date={nasaPic.date} explanation={nasaPic.explanation} url={nasaPic.url}/>           
        </div>
    )
}

export default NasaPics;