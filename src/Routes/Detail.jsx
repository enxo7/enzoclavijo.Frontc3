import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams()
  const [dentista, setDentista] = useState()

  useEffect(() => {
    const getDentista = async () => {
      const dentista = await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json()
      setDentista(dentista)
    }
    getDentista()
  }, [])

  return (
    <div>
    {dentista && (
      <div>
        <h2>{dentista.name}</h2>
        <p>{dentista.email}</p>
        <p>{dentista.phone}</p>
        <p>{dentista.website}</p>
      </div>
    )}
  </div>
)
}

export default Detail