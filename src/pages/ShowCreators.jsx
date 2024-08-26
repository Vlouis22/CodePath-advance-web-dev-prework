import React, { useEffect } from 'react'
import Card from '../components/Card.jsx'
import Homepage from './homepage.jsx'
import { useState } from 'react';
import { supabase } from '../client';

export default function ShowCreators() {

  const [inputs, setInputs] = useState([{}]);

  useEffect(() => {
    const getInputs = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select();

      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setInputs(data);
      }
    }

    getInputs();
  }, []);

  const getCreators = () => {
    return inputs.map((input, index) => (
      <Card
        key={index}
        name={input.name}
        instagram={input.instagram}
        twitter={input.twitter}
        youtube={input.youtube}
        picture={input.imageURL}
        bio={input.description}
        userId={input.id}
      />
    ));
  }

  return (
    <main>
      <div className='showcreators'>
        <Homepage />
        <div className='creators-wrapper'>
          {getCreators()}
        </div>
      </div>
    </main>
  )
}

