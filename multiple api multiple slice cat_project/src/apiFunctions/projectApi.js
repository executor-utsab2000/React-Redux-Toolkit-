import axios from "axios";
import apiGet from "./apiGet";
import { setData, setError } from "../features/projectSlice";

const apiKey = apiGet(); //get the api key
const url =
  "https://firestore.googleapis.com/v1/projects/portfolio-website-17e7a/databases/(default)/documents/project";

export const fetchData = async (dispatchFunction) => {
  try {
    const response = await axios.get(`${url}?key=${apiKey}`);
    dispatchFunction(
      setData({
        data: response.data.documents,
        loading: false,
      })
    );
  } catch (error) {
    dispatchFunction(setError(error.response?.data || error.message));
  }
};
