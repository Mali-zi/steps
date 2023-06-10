export interface IExercise {
  id: number | undefined,
  date: string | undefined, 
  distance: string | undefined
}

export interface Props {
  exercises: IExercise[];
  setExercises: (val: IExercise[]) => void;
};

export interface ButtonProps {
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleEdit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addNewExercise?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}