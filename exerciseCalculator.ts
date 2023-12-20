interface ExerciseSummary {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Rating {
  rating: number;
  ratingDescription: string;
}

interface Arguments {
  target: number;
  dailyExerciseHours: number[];
}

const calculateRating = (target: number, average: number): Rating => {
  const diffFromTarget = target - average;

  if (diffFromTarget <= 0) {
    return {
      rating: 3,
      ratingDescription: "good, you met the target",
    };
  } else if (diffFromTarget <= 0.5 && diffFromTarget > 0) {
    return {
      rating: 2,
      ratingDescription: "not too bad, but could be better",
    };
  } else {
    return {
      rating: 1,
      ratingDescription: "bad, not close to target",
    };
  }
};

const calculateAverage = (dailyExerciseHours: number[]): number => {
  const totalHours = dailyExerciseHours.reduce(
    (prev: number, current: number) => prev + current,
    0
  );
  return totalHours / dailyExerciseHours.length;
};

const calculateTrainingDays = (dailyExerciseHours: Array<number>): number => {
  return dailyExerciseHours.reduce(
    (prev: number, current: number) => (current !== 0 ? prev + 1 : prev),
    0
  );
};

const calculateExercises = ({
  target,
  dailyExerciseHours,
}: Arguments): ExerciseSummary => {
  const periodLength = dailyExerciseHours.length;
  const trainingDays = calculateTrainingDays(dailyExerciseHours);
  const average = calculateAverage(dailyExerciseHours);
  const rating = calculateRating(target, average);

  return {
    periodLength,
    trainingDays,
    success: rating.rating === 3,
    rating: rating.rating,
    ratingDescription: rating.ratingDescription,
    target,
    average,
  };
};

const toNumber = (value: string): number => {
  const number = Number(value);

  if (isNaN(number)) {
    throw Error(`${value} is not a number`);
  }

  return number;
};

const toNumbers = (values: string[]): number[] => {
  return values.map(toNumber);
};

const isAllNumbers = (numbers: string[]): boolean => {
  return numbers.filter((num) => !isNaN(Number(num))).length === numbers.length;
};

const parseExerciseArguments = (args: string[]): Arguments => {
  if (args.length < 4) {
    throw Error("not enough arguments");
  }

  const target = toNumber(args[2]);
  const dailyExerciseHours = toNumbers(args.slice(3));

  if (!(target > 0)) {
    throw Error("target should be a positive value");
  }

  return {
    target,
    dailyExerciseHours,
  };
};

try {
  const result = calculateExercises(parseExerciseArguments(process.argv));
  console.log(result);
} catch (error) {
  if (error instanceof Error) {
    console.error("error:", error.message);
  }
  console.log(
    "Usage: npm run exerciseCalculator <target> <exercise hour 1> <exercise hour 2>..."
  );
  console.log("Example: npm run exerciseCalculator 2 0.5 1.5");
}
