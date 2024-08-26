import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';


export default function ViewCreator() {
  let { userId } = useParams();
  const [inputs, setInputs] = useState();
  const navigate = useNavigate();



  useEffect(() => {
    console.log("userId: ", userId)
    if (userId) {
      const getInputs = async () => {
        const { data, error } = await supabase
          .from('creators')
          .select()
          .eq('id', userId)

        if (error) {
          console.error("Error fetching creators:", error);
        } else {
          setInputs(data[0]);
        }
      }
      getInputs();
    }
  }, [userId]);

  const deleteCreator = async () => {
    const response = await supabase
      .from('creators')
      .delete()
      .eq('id', userId)
    navigate('/showcreator')
  }

  if (!inputs) {
    console.log("no inputs yet")
    return <div>Loading...</div>;
  }

  return (
    <div className='creator-viewCreator'>
      {
        inputs ?
          <div>
            <img src={inputs.imageURL}></img>
            <div>
              <h1>{inputs.name}</h1>
              <h1>{inputs.description}</h1>
              <div className='viewCreator-socials'>
                {inputs.youtube ? <div><img src='https://static.vecteezy.com/system/resources/thumbnails/011/998/173/small_2x/youtube-icon-free-vector.jpg'></img>{inputs.youtube}</div> : null}
                {inputs.twitter ? <div><img src='https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg'></img>{inputs.twitter}</div> : null}
                {inputs.instagram ? <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVq_tpwlRpaUTtfmSrCVrCdAUTn6f5qDQcUw&s'></img>{inputs.instagram}</div> : null}
              </div>
            </div>
            <button className='blueBackground'> <Link to='/showcreator' style={{ color: 'white', textDecoration: 'none' }}>BACK TO CREATORS</Link></button>
            <button onClick={deleteCreator} className='redBackground'><Link to='/addcreator' style={{ color: 'white', textDecoration: 'none' }}>DELETE CREATOR</Link></button>
          </div>
          : null
      }

    </div>
  )
}


