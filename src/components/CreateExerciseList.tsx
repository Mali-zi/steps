import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { Props } from '../models/index';

export default function CreateExerciseList({exercises, setExercises}: Props) {

  const exerciseList = exercises.map(exercise => {
    return (
      <li 
        key={exercise.id}
      >
        {exercise.date}
        {exercise.distance}
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
    <ul>
      {exerciseList}
    </ul>
  )
}