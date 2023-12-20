type BmiCategory = "underweight" | "normal" | "overweight" | "obese";

interface Measurements {
  length: number;
  weight: number;
}

const bmiToCategory = (bmi: number): BmiCategory => {
  const roundToOneDecimal = (n: number): number => {
    return Math.round(n * 10) / 10;
  };

  const roundedBmi = roundToOneDecimal(bmi);

  if (roundedBmi < 18.5) {
    return "underweight";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    return "normal";
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    return "overweight";
  } else {
    return "obese";
  }
};

const toMessage = (category: BmiCategory): string => {
  switch (category) {
    case "underweight":
      return "Low (underweight)";
    case "normal":
      return "Normal (healthy weight)";
    case "overweight":
      return "High (overweight)";
    case "obese":
      return "Very high (obese)";
  }
};

const calculateBmi = (measurements: Measurements): void => {
  const lengthInMetres = measurements.length / 100;
  const bmi = measurements.weight / (lengthInMetres * lengthInMetres);
  const result = bmiToCategory(bmi);
  const message = toMessage(result);
  console.log(message);
};

const isNumberGreaterThanZero = (candidate: number): boolean => {
  return !isNaN(candidate) && candidate > 0;
};

const parseArguments = (args: string[]): Measurements => {
  if (args.length < 4 || args.length > 4) {
    throw Error("invalid number of arguments");
  }

  const length = Number(args[2]);
  const weight = Number(args[3]);

  if (isNumberGreaterThanZero(length) && isNumberGreaterThanZero(weight)) {
    return {
      length,
      weight,
    };
  } else {
    throw Error("length and weight must be numbers greater than zero");
  }
};

try {
  calculateBmi(parseArguments(process.argv));
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("error:", error.message);
  }
  console.log("Usage: npm run bmiCalculator <length in cm> <weight in kg>");
  console.log("Example: npm run bmiCalculator 174 80");
}
