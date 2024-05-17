import { TURNS } from '../constants/constants.js';
import { Square } from './Square.jsx'

export function WinnerModal({ winner, resetGame }) {

  if (winner === null) return null;

  const winnerText = (!winner) ? '¡EMPATE!' : '¡GANADOR!';

  const winnerRender = () => {

    if (winner) {
      return <Square>{winner}</Square>;
    }

    return <>
      <Square> {TURNS.X} </Square>
      <Square> {TURNS.O} </Square>
    </>;

  }

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winnerRender()}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}