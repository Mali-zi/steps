import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { Props } from '../models/index';

export default function CreateExerciseList({exercises, setExercises, setNewDate, setNewExercise}: Props) {

  const exerciseList = exercises.map(exercise => {
    return (
      <li 
        key={exercise.id}
        className="mainList"
      >
        <div className='datePlace'>
          {exercise.date}
        </div>
        <div className='distancePlace'>
          {exercise.distance}
        </div>
        <div className="btns">
          <ButtonEdit handleEdit={() => {
            setExercises(
              exercises.filter(a =>
                a.id !== exercise.id
              )
            );
            setNewExercise(exercise.distance);
            setNewDate(exercise.date);
          }} 
          />
          <ButtonDelete handleDelete={() => {
              setExercises(
                exercises.filter(a =>
                  a.id !== exercise.id
                )
              );
            }}
          />
        </div>
      </li>
    )
  })

  return (
    <div className='exerciseStore'>
      <ul className="mylist">
        {exerciseList}
      </ul>
    </div>
  )
}