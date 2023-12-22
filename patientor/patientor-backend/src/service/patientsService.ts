import { v4 as uuid } from "uuid";
import { NewPatient, NonSensitivePatient, Patient } from "../types";
import patients from "../data/patients";

const getPatientById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id);
};

const getAllPatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return { id, name, dateOfBirth, gender, occupation };
  });
};

const createPatient = (newPatient: NewPatient): Patient => {
  const patient: Patient = { ...newPatient, entries: [], id: uuid() };
  patients.push(patient);
  return patient;
};

export { getAllPatients, createPatient, getPatientById };
