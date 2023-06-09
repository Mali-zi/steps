import React, { useState } from 'react';
import './App.css';
import CreateExerciseList from './components/CreateExerciseList';
import InputForm from './components/InputForm';
import { IExercise } from './models/index';

function App() {
  const [exercises, setExercises] = useState<IExercise[]>([]);


  

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
            <CreateExerciseList exercises={exercises} />
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
