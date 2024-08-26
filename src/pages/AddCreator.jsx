import React from 'react'
import { useState } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom'



export default function AddCreator() {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await supabase
      .from('creators')
      .insert(inputs)
    setInputs({})
    navigate('/showcreator')
  }



  return (
    <div className="form-wrapper">
      <form className="creator-form" onSubmit={handleSubmit}>
        <label className="form-label">Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">Image
          <p className="form-description">Provide a link to an image of your creator. Be sure to include the http:// </p>
          <input
            className="form-input"
            type="text"
            name="imageURL"
            value={inputs.imageURL || ""}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">Description
          <p className="form-description">Provide a description of the creator. Who are they? What makes them interesting?</p>
          <input
            className="form-input"
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
            required
          />
        </label>

        <h3 className="form-section-title">SOCIAL MEDIA LINKS</h3>

        <h4 className="form-subtitle">
          <span className="creator-youtube">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/998/173/small_2x/youtube-icon-free-vector.jpg" alt="YouTube Icon" />
          </span>YouTube
          <p className="form-description">The creator's YouTube handle (without the @)</p>
        </h4>
        <input
          className="form-input"
          type="text"
          name="youtube"
          value={inputs.youtube || ""}
          onChange={handleChange}
        />

        <h4 className="form-subtitle">
          <span className="creator-X">
            <img src="https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg" alt="Twitter Icon" />
          </span>Twitter
          <p className="form-description">The creator's Twitter handle (without the @)</p>
        </h4>
        <input
          className="form-input"
          type="text"
          name="twitter"
          value={inputs.twitter || ""}
          onChange={handleChange}
        />

        <h4 className="form-subtitle">
          <span className="creator-instagram">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVq_tpwlRpaUTtfmSrCVrCdAUTn6f5qDQcUw&s" alt="Instagram Icon" />
          </span>Instagram
          <p className="form-description">The creator's Instagram handle (without the @)</p>
        </h4>
        <input
          className="form-input"
          type="text"
          name="instagram"
          value={inputs.instagram || ""}
          onChange={handleChange}
        />

        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}


