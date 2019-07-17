import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NasaPics() {
    const[nasaPic, setNasaPic] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=VmLoOwh4LVgARFqM4vZoIJWGVjgQ1IJ6yya25eW7')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('error', error)
        })
    })   
}
export default NasaPics;