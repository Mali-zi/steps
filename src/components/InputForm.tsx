import { Props } from '../models/index';

export default function InputForm({exercises, setExercises, newDate, setNewDate, newExercise, setNewExercise}: Props) {
  function handleClick() {
    if (newDate && newExercise) {
      const nextList = [
        ...exercises,
        {
          id: Math.floor(Math.random() * 100) + 1,
          date: newDate, 
          distance: newExercise
        }
      ];
      nextList.sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
      setExercises(nextList);
      setNewDate('');
      setNewExercise('');
    };
  };

  return (
    <form className='inputForm'>
      <label htmlFor='dateLabel'>Дата (ДД.MM.ГГ)
      <input 
        id='dateLabel'
        type='date'
        className='inputDatePlace'
        defaultValue={newDate}
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
        onClick={handleClick}
      >
        OK
      </button>
    </form>
  )
}