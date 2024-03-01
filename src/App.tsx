import React, { useEffect, useState } from 'react';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import getData from './DataServices/DataServices';
import adviceGen from "./Interfaces/interfaces";


function App() {

  const [nextAdvice, setnextAdvice] = useState<boolean>(true)
  const [adviceText, setadviceText] = useState<adviceGen>();

  const getNextAdvice = () => {
      setnextAdvice(!nextAdvice);
    }

  useEffect( () => {

    const adviceData = async () => {

      const fetchData = await getData();

      setadviceText(fetchData);

    }
    adviceData();

  }, [nextAdvice] )

  return (

    <div className='Manrope'>

      { adviceText && <AdviceComponent onClickNextBtn={getNextAdvice} id={adviceText.slip.id} advice={adviceText.slip.advice}/> }

    </div>

  );
}

export default App;
