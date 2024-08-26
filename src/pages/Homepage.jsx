import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='showcreators'>
        <div className='home-creatorverse' style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/a/ab/Earth_at_Night%2C_Europe_%28hd_video%29_%288269689699%29.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h1>Creatorverse</h1>
        <div>
            <button> <Link to='/showcreator' style={{color:'white', textDecoration:'none'}}>VIEW ALL CREATORS</Link></button>
            <button><Link to='/addcreator' style={{color:'white', textDecoration:'none'}}>ADD A CREATOR</Link></button>
        </div>
        </div>
    </div>

  )
}

