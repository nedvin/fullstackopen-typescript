import express from "express";
import {
  getAllPatients,
  createPatient,
  getPatientById,
} from "../service/patientsService";
import { toNewPatient } from "../utils/utils";

const router = express.Router();

router.get("/patients", (_req, res) => {
  res.send(getAllPatients());
});

router.get("/patients/:id", (req, res) => {
  const id: string = req.params.id;
  const patient = getPatientById(id);

  if (!patient) {
    return res.status(404).send();
  }

  return res.json({ ...patient, entries: [] });
});

router.post("/patients", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    res.status(201).send(createPatient(newPatient));
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send({ error: error.message });
    } else {
      res.status(500).send({ error: "something went wrong" });
    }
  }
});

export default router;
