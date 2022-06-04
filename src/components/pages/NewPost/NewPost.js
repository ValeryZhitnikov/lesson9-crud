import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewPost.css';

const initialForm = {content: ''};

export default function NewPost() {
  const [form, setForm] = useState(initialForm);

  const handlerSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      content: form.content
    }

    postData(newPost);
    setForm(initialForm);
  };

  const postData = (data) => {
    fetch(process.env.REACT_APP_HOST_URL+'/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setForm( prevForm =>{
      return {...prevForm, [name]: value}
    });
  };

  return (
    <div className="newPost">
      <h1>New post</h1>
      <Link to="/">x</Link>
      <form onSubmit={handlerSubmit}>
        <textarea onChange={handleChange} value={form.content} name="content" id="content" cols="30" rows="10"></textarea>
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  )
}