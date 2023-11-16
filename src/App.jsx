import './App.scss'
import Boton from './ui/boton/Boton'
import Casilla from './ui/casilla/Casilla'
import circle from './assets/circle.svg'
import cross from './assets/cross.svg'

function App() {

  return (
    <>
      <div className="turns">
        <div className={'turns_players'}>
          <img src={cross} className={'turns_players--x'}/>
          <img src={circle} className={'turns_players--o'}/>
        </div>
        <Casilla className={'turns_turn'}/>
        <Boton className={'turns_back'}>
        </Boton>
      </div>
      <div className="tablero">
        {Array(9).fill().map((_, i) => (
          <Casilla key={i} className={'tablero_casilla'}/>
        ))}
      </div>
      <div className="info">
        <Casilla className={'info_x-player'}/>
        <Casilla className={'info_tie'} />
        <Casilla className={'info_o-player'}/>
      </div>
    </>
  )
}

export default App
