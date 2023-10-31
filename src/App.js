import React from 'react';
import './App.css';
import List from './list/List'
import { uuid } from './utils/utils';
import ListWorkers from './list/ListWorker';

export default class App extends React.Component{

fruits = ["Elma", "Armut", "Portakal"]; //ASAGIDA this.fruit.filterda THIS kullanmamizin sebebi, fruits dizisinin render() disinda olmasidir.
//EGER fruits i,  const fruits olarak render() in hemen altina yazsaydik. This kullanmamiza gerek kalmayacakti.
  render() {
    return (
      <div>
          <p>Meyveler</p>
          <ul>
            {  //               (  Elma     Elma           a  ) a iceriyorsa siradaki .map metotuna gececek.
              this.fruits.filter( (name) => name.includes('a')).map( (fruit) => {
                return( <li key={uuid()}>{fruit}</li> );
              })
            }
          </ul>

          <List />
          <ListWorkers />
          
        </div>
    );
  }
}

