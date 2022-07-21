import React from 'react';
import './App.css';
import '../../todolist/src/components/Style.css';
import SelectorTareas from './components/SelectorTareas.js'
function App() {
  return (
    <div className='App'>
  <main>
    <h1>Lista de tareas!</h1>
    <SelectorTareas/>
    <h3>Tareas</h3>
    <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
    
    <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
  </main>
  </div>
  );
}

export default App;
