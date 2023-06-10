import { useState } from 'react';
import './App.css';
import CreateExerciseList from './components/CreateExerciseList';
import InputForm from './components/InputForm';
import { IExercise } from './models/index';

function App() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [newExercise, setNewExercise] = useState('');
  const [newDate, setNewDate] = useState(new Date().toLocaleString("RU"));

  return (
    <div className="App">
      <div className='container'>
      <header className="title">
        <h2>Учёт тренировок</h2>
      </header>
      
      <InputForm 
        exercises={exercises} 
        setExercises={setExercises}
        newExercise={newExercise}
        setNewExercise={setNewExercise}
        newDate={newDate}
        setNewDate={setNewDate}
      />

      <header className='titleStore'>
        <div>Дата (ДД.MM.ГГ)</div>
        <div>Пройдено км</div>
        <div>Действия</div>
      </header>

      <CreateExerciseList 
        exercises={exercises} 
        setExercises={setExercises}
        setNewDate={setNewDate}
        setNewExercise={setNewExercise}
      />

      </div>
    </div>
  );
}

export default App;
