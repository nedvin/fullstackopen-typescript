import { useEffect, useState } from "react";
import { getAll } from "./services/diaryService";
import { DiaryEntry } from "./types";
import Diary from "./components/Diary";
import DiaryForm from "./components/DiaryForm";

function App() {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAll().then(setDiaryEntries);
  }, []);

  const addDiaryEntry = (entry: DiaryEntry) => {
    setDiaryEntries(diaryEntries.concat(entry));
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <DiaryForm addDiaryEntry={addDiaryEntry} />
      <h2>Diary entries</h2>
      {diaryEntries.map((entry) => (
        <Diary key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default App;
