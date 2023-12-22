interface PartProps {
  part: CoursePart;
}

const Part = ({ part }: PartProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union value: ${JSON.stringify(value)}`
    );
  };

  const basic = () => (
    <p>
      <strong>
        {part.name} {part.exerciseCount}
      </strong>
      <br />
      <i>{part.description}</i>
    </p>
  );

  const background = () => (
    <p>
      <strong>
        {part.name} {part.exerciseCount}
      </strong>
      <br />
      <i>{part.description}</i>
      <br />
      background: {part.backgroundMaterial}
    </p>
  );

  const group = () => (
    <p>
      <strong>
        {part.name} {part.exerciseCount}
      </strong>
      <br />
      number of group projects: {part.groupProjectCount}
    </p>
  );

  const special = () => (
    <p>
      <strong>
        {part.name} {part.exerciseCount}
      </strong>
      <br />
      <i>{part.description}</i>
      <br />
      requirements:{" "}
      {part.requirements.map((req: string) => (
        <span key={req}>{req} </span>
      ))}
    </p>
  );

  switch (part.kind) {
    case "basic":
      return basic();
    case "background":
      return background();
    case "group":
      return group();
    case "special":
      return special();
    default:
      return assertNever(part);
  }
};

export default Part;
