import express from "express";
import { getAllPatients } from "../service/patientsService";

const router = express.Router();

router.get("/patients", (_req, res) => {
  res.send(getAllPatients());
});

export default router;
