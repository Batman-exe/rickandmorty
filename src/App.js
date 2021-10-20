import logo from './logo.svg';
import './App.scss';
import {Card} from './Components/Card';
import {getCharacterById} from "./character";

function App() {
    let data = [];
    for(let i = 1; i <= 20; i++){
        data.push(getCharacterById(i));
    }

    return (
        <>
            <h1>Ejercicio 4</h1>
            <div className='container'>
                {data.forEach(element => (
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
}

export default {App};
