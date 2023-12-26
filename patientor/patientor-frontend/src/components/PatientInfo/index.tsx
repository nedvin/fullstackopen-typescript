import { useState, useEffect } from "react";
import { Diagnosis, Patient } from "../../types";
import patientService from "../../services/patients";
import { Typography } from "@mui/material";
import EntryDetails from "../PatientEntry";

interface PatientInfoProps {
  patientId: string | undefined;
  diagnoses: Diagnosis[];
}

const PatientInfo = ({ patientId, diagnoses }: PatientInfoProps) => {
  const [patient, setPatient] = useState<Patient | undefined>(undefined);

  useEffect(() => {
    if (!patientId) {
      return;
    }

    patientService.getById(patientId).then((patient) => setPatient(patient));
  }, [patientId]);

  if (!patient) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4">
        {patient.name} ({patient.gender})
      </Typography>
      <p>
        ssn: {patient.ssn}
        <br />
        occupation: {patient.occupation}
      </p>
      <h3>entries</h3>
      {patient.entries.map((entry) => {
        return (
          <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
        );
      })}
    </div>
  );
};

export default PatientInfo;
