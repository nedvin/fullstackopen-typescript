import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Diagnosis } from "../types";

const getAll = () => {
  return axios
    .get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`)
    .then((response) => response.data);
};

export default { getAll };
