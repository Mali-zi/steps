export interface IExercise {
  id: number | undefined,
  date: string | undefined, 
  distance: string | undefined
}

export type Props = {
  exercises: IExercise[];
  setExercises: (val: IExercise[]) => void;
};