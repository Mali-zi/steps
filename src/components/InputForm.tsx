import { useState } from 'react';
import { Props } from '../models/index';
import { ButtonProps } from '../models/index';

export default function InputForm({addNewExercise}: ButtonProps) {

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
      <button 
        type='button' 
        className='ok' 
        onClick={addNewExercise}
      >
        OK
      </button>
    </form>

  )
}