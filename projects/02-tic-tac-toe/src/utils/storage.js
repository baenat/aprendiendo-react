
// Guardar partida del juego en el Storage

export const saveGameToStorage = ({ board, turn }) => {

  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);

}

export const resetGameStorage = () => {

  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');

}

export const getItemFromStorage = (item) => {

  return window.localStorage.getItem(item);

}