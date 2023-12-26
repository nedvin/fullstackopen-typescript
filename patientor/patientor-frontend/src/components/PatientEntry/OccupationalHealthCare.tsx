import { OccupationalHealthCareEntry } from "../../types";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

interface OccupationalHealthCareProps {
  entry: OccupationalHealthCareEntry;
  getDescription: (code: string) => string;
}

const OccupationalHealthCare = ({
  entry,
  getDescription,
}: OccupationalHealthCareProps) => {
  const style = {
    border: "1px solid black",
    marginBottom: "10px",
  };

  return (
    <div style={style}>
      <strong>{entry.date}</strong> <WorkRoundedIcon /> {entry.employerName}
      <br />
      <i>{entry.description}</i>
      <br />
      diagnosed by {entry.specialist}
      <ul>
        {entry.diagnosisCodes?.map((code) => (
          <li key={entry.id + "-" + code}>
            {code} {getDescription(code)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OccupationalHealthCare;
