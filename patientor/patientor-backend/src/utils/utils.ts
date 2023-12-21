import { NewPatient, Gender } from "../types";

const isString = (obj: unknown): obj is string => {
  return typeof obj === "string" || obj instanceof String;
};

const isDate = (obj: string): boolean => {
  return Boolean(Date.parse(obj));
};

const isGender = (obj: string): obj is Gender => {
  return Object.values(Gender)
    .map((gender) => gender.toString())
    .includes(obj);
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error("invalid name");
  }

  return name;
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("invalid date");
  }

  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("invalid ssn");
  }

  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("invalid gender");
  }

  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error("invalid occupation");
  }

  return occupation;
};

export const toNewPatient = (obj: unknown): NewPatient => {
  if (!obj || typeof obj !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    !("name" in obj) ||
    !("dateOfBirth" in obj) ||
    !("ssn" in obj) ||
    !("gender" in obj) ||
    !("occupation" in obj)
  ) {
    throw new Error("Invalid data: some fields are missing");
  }

  const newPatient: NewPatient = {
    name: parseName(obj.name),
    dateOfBirth: parseDateOfBirth(obj.dateOfBirth),
    ssn: parseSsn(obj.ssn),
    gender: parseGender(obj.gender),
    occupation: parseOccupation(obj.occupation),
  };

  return newPatient;
};
