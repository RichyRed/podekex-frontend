import React, {useState, useEffect}from 'react'; 
import API from './../config/api'

export const MyComponent = (props) => {}

const getTrainers = async () => {
    const { name, setName } = props;
    const [trainers, setTrainers] = useState({}); 
    //const trainers = await API.get("/trainers");
    //console.log('Testing', trainers);

    useEffect(() => {
        getTrainers();
}, []);

setName('Cami');
const getTrainers = async () => {
    const trainerResponse = await API.get("/trainers");

console.log(getTrainers());
};

    return (
        <div>
        <h1>Hello World</h1>
        </div>
    );
};
