import Content from "./Content";
import Header from "./Header";
import TotalExercises from "./TotalExercises";
import { courseParts } from "./courseParts";

const App = () => {
  const courseName = "Half Stack application development";

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <TotalExercises totalExercises={totalExercises} />
    </div>
  );
};

export default App;
