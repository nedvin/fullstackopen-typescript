import axios, { isAxiosError } from "axios";
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = "http://localhost:3000/api/diaries";

export const getAll = async () => {
  const { data } = await axios.get<DiaryEntry[]>(baseUrl);
  return data;
};

export const createDiaryEntry = async (diaryEntry: NewDiaryEntry) => {
  try {
    const { data } = await axios.post<DiaryEntry>(baseUrl, diaryEntry);
    return data;
  } catch (error) {
    const errorMessage = "something went wrong";
    if (isAxiosError(error)) {
      throw new Error(error.response ? error.response.data : errorMessage);
    } else {
      throw new Error(errorMessage);
    }
  }
};
