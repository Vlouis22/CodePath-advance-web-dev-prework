import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className='creator' style={{ backgroundImage: `url(${props.picture})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='creator-contents'>
        <div className='creator-head'>
          <h1>{props.name}</h1>
          <div>
            <button> <Link to={'/viewCreator/' + props.userId}><span>🔎</span></Link></button>
            <button> <Link to={'/editCreator/' + props.userId}><span>✎</span></Link></button>
          </div>
        </div>
        <div className='creator-socials'>
          {props.instagram ? <span className='creator-instagram'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVq_tpwlRpaUTtfmSrCVrCdAUTn6f5qDQcUw&s'></img></span> : null}
          {props.twitter ? <span className='creator-X'><img src='https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg'></img></span> : null}
          {props.youtube ? <span className='creator-youtube'><img src='https://static.vecteezy.com/system/resources/thumbnails/011/998/173/small_2x/youtube-icon-free-vector.jpg'></img></span> : null}
        </div>
        <p className='creator-bio'>{props.bio}</p>
      </div>
    </div>
  )
}
