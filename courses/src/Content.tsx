import Part from "./Part";
import { CoursePart } from "./courseParts";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <>
      {props.courseParts.map((coursePart) => (
        <Part key={coursePart.name} part={coursePart} />
      ))}
    </>
  );
};

export default Content;
