import axios from "axios";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Global from "../components/Global";
import Hero from "../components/Hero";
import ENDPOINTS from "../utils/constants/endpoint";

function Home() {
  // membuat state global
  const [ global, setGlobal] = useState([]);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (async() => {
    const response = await axios(ENDPOINTS.GLOBAL);
    const covid = [
      {
        id: nanoid(),
        status: "Confirmed",
        total: response.data.confirmed,
      },
      {
        id: nanoid(),
        status: "Recovered",
        total: response.data.recovered,
      },
      {
        id: nanoid(),
        status: "Deaths",
        total: response.data.deaths,
      },  
    ];
    setGlobal(covid);
  }, []);
  
  return (
    <>
      <Hero />
      <Global global={global} />
    </>
  );
}

export default Home;
