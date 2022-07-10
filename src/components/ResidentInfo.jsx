import axios from 'axios'
import { useState, useEffect } from 'react';

const ResidentInfo = ({ residents }) => {

    const [ residentItem, setResidentItem ] = useState([])

    useEffect(() => {
      axios.get(residents)
            .then (res => setResidentItem(res.data))
    }, [])
    
    console.log( residentItem )

    return (
        <div className='card'>
            <img src={residentItem.image} alt="" />
            <div className='containerAllCard'>
                <h2 style={{fontWeight:`500`, color:`#9EE201`}}>{residentItem.name}</h2>
                <ul>
                    <li>{residentItem.status} - {residentItem.species}</li>
                    <div className='containerInfoCard'>
                        <li><b style={{fontWeight:`500`, color:`#4d6066`}}>origin </b>{residentItem.origin?.name}</li>
                        <li><b style={{fontWeight:`500`, color:`#4d6066`}}> where appear </b>{residentItem.episode?.length}</li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;