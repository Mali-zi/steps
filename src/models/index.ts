export interface IExercise {
  id: number,
  date: string, 
  distance: string | string
}

export interface Props {
  exercises: IExercise[];
  setExercises: (val: IExercise[]) => void;
  newDate?: string, 
  setNewDate: (val: string) => void;
  newExercise?: string,
  setNewExercise: (val: string) => void;
};

export interface ButtonProps {
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleEdit?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addNewExercise?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}