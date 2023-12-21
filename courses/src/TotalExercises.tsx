interface TotalExercisesProps {
  totalExercises: number;
}

const TotalExercises = (props: TotalExercisesProps) => (
  <p>Number of exercises {props.totalExercises}</p>
);

export default TotalExercises;
