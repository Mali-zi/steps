import React, { useState } from 'react';
import './App.css';
import CreateExerciseList from './components/CreateExerciseList';
import InputForm from './components/InputForm';
import { IExercise } from './models/index';
import { Props } from '../models/index';

function App() {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [newExercise, setNewExercise] = useState('');
  const [newDate, setNewDate] = useState('');


  function addNewExercise() {
    setExercises([
      ...exercises,
      {
        id: Math.floor(Math.random() * 100) + 1,
        date: newDate, 
        distance: newExercise
      }
    ]);
    setNewDate('');
    setNewExercise('');
  };
  

  return (
    <div className="App">
      <div className='container'>
      <header className="title">
        <h2>Учёт тренировок</h2>
      </header>
      <InputForm 
        exercises={exercises} 
        setExercises={setExercises}
      />

      <div>
        <div>
          <div>
            <CreateExerciseList addNewExercise={addNewExercise} />
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
