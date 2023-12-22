import { useState } from "react";
import { createDiaryEntry } from "../services/diaryService";
import ErrorNotification from "./ErrorNotification";
import { DiaryEntry } from "../types";

interface DiaryFormProps {
  addDiaryEntry: (type: DiaryEntry) => void;
}

const DiaryForm = ({ addDiaryEntry }: DiaryFormProps) => {
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addNewDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createDiaryEntry({ date, visibility, weather, comment })
      .then((data) => addDiaryEntry(data))
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("unknown error occured");
        }
        setTimeout(() => setErrorMessage(""), 4000);
      });
  };

  return (
    <>
      <ErrorNotification message={errorMessage} />
      <form onSubmit={addNewDiary}>
        date:{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <div>
          <span>visibility: </span>
          great
          <input
            type="radio"
            name="visibility"
            value="great"
            checked={visibility === "great"}
            onChange={() => setVisibility("great")}
          />
          good
          <input
            type="radio"
            name="visibility"
            value="good"
            checked={visibility === "good"}
            onChange={() => setVisibility("good")}
          />
          ok
          <input
            type="radio"
            name="visibility"
            value="ok"
            checked={visibility === "ok"}
            onChange={() => setVisibility("ok")}
          />
          poor
          <input
            type="radio"
            name="visibility"
            value="poor"
            checked={visibility === "poor"}
            onChange={() => setVisibility("poor")}
          />
        </div>
        <div>
          <span>weather: </span>
          sunny
          <input
            type="radio"
            name="weather"
            value="sunny"
            checked={weather === "sunny"}
            onChange={() => setWeather("sunny")}
          />
          rainy
          <input
            type="radio"
            name="weather"
            value="rainy"
            checked={weather === "rainy"}
            onChange={() => setWeather("rainy")}
          />
          cloudy
          <input
            type="radio"
            name="weather"
            value="cloudy"
            checked={weather === "cloudy"}
            onChange={() => setWeather("cloudy")}
          />
          stormy
          <input
            type="radio"
            name="weather"
            value="stormy"
            checked={weather === "stormy"}
            onChange={() => setWeather("stormy")}
          />
          windy
          <input
            type="radio"
            name="weather"
            value="windy"
            checked={weather === "windy"}
            onChange={() => setWeather("windy")}
          />
        </div>
        <br />
        comment:{" "}
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default DiaryForm;
