import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { IExercise } from '../models/index';

export default function CreateExerciseList({...exercises}: IExercise[]) {
  const exerciseList = exercises.map(exercise => {
    return (
      <li 
        key={exercise.id}
      >
        {exercise.date}
        {exercise.distance}
        <div className="btns">
          <ButtonEdit id={exercise.id} />
          <ButtonDelete id={exercise.id} />
        </div>
      </li>
    )
  })

  return (
    <ul>
      {exerciseList}
    </ul>
  )
}