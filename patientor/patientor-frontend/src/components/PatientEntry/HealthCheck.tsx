import { HealthCheckEntry } from "../../types";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

interface HealthCheckProps {
  entry: HealthCheckEntry;
  getDescription: (code: string) => string;
}

const HealthCheck = ({ entry, getDescription }: HealthCheckProps) => {
  const style = {
    border: "1px solid black",
    marginBottom: "10px",
  };

  const getRatingIcon = (rating: number) => {
    if (rating === 0) {
      return <FavoriteRoundedIcon color="success" />;
    } else if (rating === 1) {
      return <FavoriteRoundedIcon color="info" />;
    } else if (rating === 2) {
      return <FavoriteRoundedIcon color="warning" />;
    } else {
      return <FavoriteRoundedIcon color="error" />;
    }
  };

  return (
    <div style={style}>
      <strong>{entry.date}</strong> <HealthAndSafetyRoundedIcon />
      <br />
      <i>{entry.description}</i>
      <br />
      {getRatingIcon(entry.healthCheckRating)}
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

export default HealthCheck;
