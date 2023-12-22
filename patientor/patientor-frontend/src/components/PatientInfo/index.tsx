import { useState, useEffect } from "react";
import { Patient } from "../../types";
import patientService from "../../services/patients";

interface PatientInfoProps {
  patientId: string | undefined;
}

const PatientInfo = ({ patientId }: PatientInfoProps) => {
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
      <h2>
        {patient.name} ({patient.gender})
      </h2>
      <p>
        ssn: {patient.ssn}
        <br />
        occupation: {patient.occupation}
      </p>
    </div>
  );
};

export default PatientInfo;
