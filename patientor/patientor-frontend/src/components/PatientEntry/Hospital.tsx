import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import { HospitalEntry } from "../../types";

interface HospitalProps {
  entry: HospitalEntry;
  getDescription: (code: string) => string;
}

const Hospital = ({ entry, getDescription }: HospitalProps) => {
  const style = {
    border: "1px solid black",
    marginBottom: "10px",
  };

  return (
    <div style={style}>
      <strong>{entry.date}</strong> <LocalHospitalRoundedIcon /> <br />
      <i>{entry.description}</i>
      <br />
      discharge: {entry.discharge.date}, <i>{entry.discharge.criteria}</i>
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

export default Hospital;
