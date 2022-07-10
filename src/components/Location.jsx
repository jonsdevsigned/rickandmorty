import axios from 'axios'
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {
    const [ location, setLocation ] = useState({})
    const [ searchValue, setSearchValue ] = useState('')

    useEffect (() => {
       const random = Math.floor(Math.random() * 20 ) + 1
       axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then ( res => setLocation (res.data) )
    }, [])

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then ( res => setLocation (res.data))
    }

    console.log( location )

    return (
        <div className='container'>
            <div className='containerBanner'>
                <img className='bannerHead' src='https://i.ibb.co/PWQzgQp/bannerickmorty.png' alt="bannerHead" />
                <img className='titleBanner' src="https://i.ibb.co/cbG3cLG/Rickand-Mortyweb.png" alt="titleBanner" />
                <h1 className='title'>wiki</h1>
            </div>
            < div className='form'>
                <input 
                    className='inputsearch' 
                    type="text" 
                    placeholder='type a location (1-126)'
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button className='buttonsearch' onClick={searchLocation}>search</button>
            </div>
            <div className='containerLocation'>
                <h2 
                    style={{
                        color:`#9EE201`, 
                        fontSize:`20px`, 
                        padding:`15px 0 3px 0`,
                        textTransform: 'uppercase'
                        }}>
                {location.name}
                </h2>
                <p><b>Type:</b> {location.type} </p>
                <p><b>Dimension:</b> {location.dimension} </p>
                <p><b>Population: </b>{location.residents?.length}</p>
            </div>
            <h2 style={{fontWeight:`400`, textTransform: 'uppercase', color:`#9EE201`, padding:`25px`}}>Residents</h2>
            <div className='containerResidents'>
                <ul className='residents'>
                    {location.residents?.map((residents) => (
                        <ResidentInfo residents={residents} key={residents} />
                        ))}    
                </ul>
            </div>
        </div>
    );
};

export default Location;