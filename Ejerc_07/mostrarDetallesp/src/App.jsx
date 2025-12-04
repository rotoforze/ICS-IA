import { useState } from 'react'
import './App.css'
import PostDetails from './componentes/PostDetails';

function App() {
  const [id, setId] = useState(1);
  return (
    <>
      <label htmlFor="idpost">ID del post</label>
      <input type="number" name="idpost" id="idpost" defaultValue={1} onInput={(e) => setId(e.target.value)}/>
      < PostDetails postid={id} />
    </>
  )
}

export default App
