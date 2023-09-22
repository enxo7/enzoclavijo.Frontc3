import { useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
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
    <section>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <div>
          {favs.map(object => (<Card object={object} key={object.id} onClick={addToFavs}/>))}
        </div>
      </div>
    </section>
  );
};

export default Favs;