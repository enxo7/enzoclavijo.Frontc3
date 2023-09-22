import {Link} from 'react-router-dom';

const Card = ({object, onClick, isDarkMode}) => {
  
  return (
      <div className="card">
        <Link to={`/dentist/${object.id}`}>
        <img style={{
          width: "200px"
        }}
        src='./images/doctor.jpg'/>
        <h2 style={{
          color: '#349A6C'
        }}>{object.name}</h2>
        <span style={{
          color: '#14402C'
        }}>{object.username}</span>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage onClick={addFav()}*/}
        </Link>
        <button style={{
          color: '#349A6C'
        }}onClick={() => onClick(object)} className="favButton">addFav</button>
        
    </div>
    
  );
};

export default Card;