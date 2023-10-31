import React from "react";
import "./ListWorker.css";

export default class ListWorkers extends React.Component{

    render() {
        const workersData = [// workersData isminde bir dizi olusturduk. JSON verisi
            {
                name: "Gani ",
                surname: "Kutay",
                age: "30",
                avatar: "./images/avatar.jpg"
            },
            {
                name: "Aysegul ",
                surname: "Halamoglu",
                age: "29",
                avatar: "./images/avatar.jpg"
            },
            {
                name: "deneme ",
                surname: "Kutay",
                age: "35",
                avatar: "./images/avatar.jpg"
            },
            {
                name: "deneme5 ",
                surname: "Kutay",
                age: "22",
                avatar: "./images/avatar.jpg"
            }
        ];

        const element_worker = (workers) => { // element_worker adinda  bir fonksiyon olusturduk
            return ( // ilk olarak return() metodu kullanilip, bir seyleri yine JSX olarak dondurebiliyoruz.
                <ul>
                    {//               (    burasi ilk function   )    ( burasida ikinci function)
                        workers.filter(worker => worker.age >= 30).map(worker => {
                            return (
                                <li className="worker-box">
                                    <img className="worker-avatar" src={worker.avatar} alt={worker.name} />
                                    <div className="worker-text">
                                        <p>Ad Soyad: {worker.name}{worker.surname}</p>
                                        <p>Yas: {worker.age}</p>
                                        
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        return(
            <div>
                <p>Calisanlar</p>
                {
                    element_worker(workersData) //bu fonksiyonu cagir diyoruz.Parametre olarakta workersData dedik
                }
            </div>
        );
    }

}