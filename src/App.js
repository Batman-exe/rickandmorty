import logo from './logo.svg';
import './App.scss';
import {Card} from './Components/Card';
const axios = require('axios')
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

const App = async () => {
  try {
    const characters = await axios.get(URL_CHARACTERS);
    console.log("Datos->", characters);
    let data = JSON.parse(characters);
    console.log("Esta es la info-> ", data['info'])
    return (
        <>
          <h1>Ejercicio 4</h1>
          <div className='container'>
            {data.map((element) => (
                <Card
                    name={element.name}
                    img={element.image}
                    gender={element.gender}
                    status={element.status}
                    key={element.id}
                />
            ))}
          </div>
        </>
    );
  } catch (e) {
    console.error(e)
  }
}

export {App};
