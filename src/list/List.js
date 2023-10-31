import React from "react";
import ListItem from "./ListItem";
import { uuid } from './../utils/utils';
// ../ ile bir ust dosyaya cikiyosun


export default class List extends React.Component {
    render() {
        const cars = ["BMW", "Ford", "Mercedes"]; //dizi, array
        return(
            <div>
                <p>Arabalar (List Component)</p>
                <ul>
                    {
                        cars.map( (car) => { //sirasiyla yazdirmak icin .map metotu kullandik
                            return( <ListItem key={uuid()} car={car} />);
                        })
                    }
                </ul>
            </div>
        );
    }
}