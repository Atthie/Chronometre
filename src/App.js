import './component/style.css'
import { useState } from 'react';
import Bouton from './component/Bouton';
import './component/style.css'

function App() {
  const [sectime, setSecTime] = useState(0);
  const [mintime, setMinTime] = useState(0);
  const [heuretime, setHeureTime] = useState(0);
  const [bg, setBg] = useState('start');
  const [idsInterval, setIntervalIds] = useState({});

  function start() {
    if (bg === 'start') {
      setBg('pause');
      const ids = {
        intervalSec: setInterval(() => {
          setSecTime(sectime => {
            if (sectime === 59) {
              return 0;
            } else {
              return sectime + 1;
            }
          });
        }, 1000),
        intervalMin: setInterval(() => {
          setMinTime(mintime => {
            if (mintime === 59) {
              return 0;
            } else {
              return mintime + 1;
            }
          });
        }, 60000),
        intervalHeure: setInterval(() => {
          setHeureTime(heuretime => {
            if (heuretime === 23) {
              return 0;
            } else {
              return heuretime + 1;
            }
          });
        }, 3600000)
      };
      setIntervalIds(ids);
    } else {
      pause();
    }
  }

  function pause() {
    setBg('start');
    clearInterval(idsInterval.intervalSec);
    clearInterval(idsInterval.intervalMin);
    clearInterval(idsInterval.intervalHeure);
  }

  function reload() {
    setSecTime(0);
    setMinTime(0);
    setHeureTime(0);
    setBg('start');
    clearInterval(idsInterval.intervalSec);
    clearInterval(idsInterval.intervalMin);
    clearInterval(idsInterval.intervalHeure);
  }

  return (
    <div className="App">
      <div className='contenair flex-col'>
      <h1>{heuretime.toString().padStart(2, '0')} : {mintime.toString().padStart(2, '0')} : {sectime.toString().padStart(2, '0')}</h1>
        <div className='bouton'>
              <Bouton function={start} style={bg}></Bouton>
              <Bouton function={reload} style='stylebtn restart'></Bouton>
        </div>
      </div>
    </div>
  );
}


export default App;
