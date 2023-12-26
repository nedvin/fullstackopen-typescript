import { Diagnosis, Entry } from "../../types";
import HealthCheck from "./HealthCheck";
import OccupationalHealthCare from "./OccupationalHealthCare";
import Hospital from "./Hospital";

interface EntryDetailsProps {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const EntryDetails = ({ entry, diagnoses }: EntryDetailsProps) => {
  const getDescription = (code: string): string => {
    const diagnosis = diagnoses.find((diagnosis) => diagnosis.code === code);
    return diagnosis !== undefined ? diagnosis.name : "";
  };

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (entry.type) {
    case "HealthCheck":
      return <HealthCheck entry={entry} getDescription={getDescription} />;
    case "OccupationalHealthcare":
      return (
        <OccupationalHealthCare entry={entry} getDescription={getDescription} />
      );
    case "Hospital":
      return <Hospital entry={entry} getDescription={getDescription} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
