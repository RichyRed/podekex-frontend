import "./App.css";
import React, { useState, useEffect } from "react";
import { Auth } from "./components/Auth";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  console.log(trainer);
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
    console.log(data.trainer);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><Auth/></>;
}

export default App;
