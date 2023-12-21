import express from "express";
import { getAllDiagnoses } from "../service/diagnosesService";

const router = express.Router();

router.get("/diagnoses", (_reg, res) => {
  res.send(getAllDiagnoses());
});

export default router;
