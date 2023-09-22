import { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card'
import { DarkModeContext } from '../Components/utils/globalContext';
import "/src/App.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export default function Home(){
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [vetor, setVetor] = useState([]);
  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
  
    const convert = await data.json();
    setVetor(convert)
  }
  useEffect(() => {
    getData();
    });
  
    const [favs, setFavs] = useState(
      JSON.parse(localStorage.getItem('Favs') || '[]')
    )
  
    const addToFavs = (dentista) => {
      
      let newFavs
      if (favs.some((fav) => fav.id === dentista.id)) {
        newFavs = favs.filter((fav) => fav.id !== dentista.id)
      } else {
        newFavs = [...favs, dentista]
      }
      setFavs(newFavs)
      localStorage.setItem('Favs', JSON.stringify(newFavs))
    }

  return (
    <main style={{ backgroundColor: darkMode ? "#000" : "#fff"}}>
      <h1>Home</h1>
      <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'}}
          className='card-grid'>
            {vetor.map(object => (<Card object={object} key={object.id} onClick={addToFavs}></Card>))}
        </div>
      
    </main>
  )
}

