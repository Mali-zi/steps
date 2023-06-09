import { useState } from 'react';
import { Props } from '../models/index';



export default function InputForm({exercises, setExercises}: Props) {
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
    <form className='inputForm'>
      <label htmlFor='dateLabel'>Дата (ДД.MM.ГГ)
      <input 
        id='dateLabel'
        type='date'
        className='inputDatePlace'
        value={newDate} 
        onChange={(e) => setNewDate(e.target.value)}
      />
      </label>
      <label htmlFor='distanceLabel'>Пройдено км
      <input 
        id='distanceLabel'
        type='text'
        className='inputDistancePlace'
        value={newExercise} 
        onChange={(e) => setNewExercise(e.target.value)}
      />
      </label>
      <input type='button' className='ok' value='OK' onClick={addNewExercise} />
    </form>

  )
}