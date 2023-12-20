import express from "express";
import qs from "qs";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

const app = express();
app.use(express.json());
app.set("query parser", (str: string) => qs.parse(str));

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  if (!req.query.length || !req.query.weight) {
    return res.status(400).send({ error: "malformed parameters" });
  }

  const length = Number(req.query.length);
  const weight = Number(req.query.weight);

  if (isNaN(length) || length <= 0 || isNaN(weight) || weight <= 0) {
    res.status(400).send({ error: "malformed parameters" });
  }

  return res
    .status(200)
    .send({ length, weight, bmi: calculateBmi({ length, weight }) });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { target, daily_exercises: dailyExerciseHours } = req.body;

  if (!target || !dailyExerciseHours) {
    return res.status(400).send({ error: "missing parameters" });
  }

  if (!(dailyExerciseHours instanceof Array)) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const exerciseHoursIsNumbers = dailyExerciseHours.every(
    (num) => !isNaN(Number(num))
  );

  if (isNaN(Number(target)) || !exerciseHoursIsNumbers) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const result = calculateExercises({
    target: Number(target),
    dailyExerciseHours: dailyExerciseHours.map(Number),
  });
  return res.send(result);
});

app.listen(3002, () => {
  console.log("server running...");
});
