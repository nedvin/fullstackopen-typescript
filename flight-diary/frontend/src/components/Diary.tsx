import { DiaryEntry } from "../types";

interface DiaryProps {
  entry: DiaryEntry;
}

const Diary = ({ entry }: DiaryProps) => (
  <div>
    <h4>{entry.date}</h4>
    <p>
      visibility: {entry.visibility}
      <br />
      weather: {entry.weather}
    </p>
  </div>
);

export default Diary;
