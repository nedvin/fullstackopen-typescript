import { NonSensitivePatient } from "../types";
import patients from "../data/patients";

const getAllPatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

export { getAllPatients };
