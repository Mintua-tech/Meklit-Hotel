import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Room from '../components/Room'


function Homescreen() {

    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    const readlist = async () => {

        try {
            setloading(true)
            const data = (await axios.get('/api/rooms/')).data

            setrooms(data)
            setloading(false)

        } catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }

    }

    useEffect(() => {
        readlist();
    }, [])

    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                {loading ? (<h1>loading....</h1>) : error ? (<h1>error</h1>) : (rooms.map(room => {
                    return <div className="col-md-9 mt-2">
                        <Room room={room}/>
                    </div>
                }))}

            </div>
        </div>
    )
}

export default Homescreen;