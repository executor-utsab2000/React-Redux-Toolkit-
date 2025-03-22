import { setData, setError } from "../features/categorySlice";
import axios from "axios";
import apiGet from "./apiGet";

// getting api data by api from server
const apiKey = apiGet();
const url =
  "https://firestore.googleapis.com/v1/projects/portfolio-website-17e7a/databases/(default)/documents/categories";

export const fetchData = async (dispatchFunction) => {
  try {
    const response = await axios.get(`${url}?key=${apiKey}`);
    // dispatch method call to set data
    dispatchFunction(
      setData({
        data: response.data.documents,
        loading: false,
      })
    );
  } catch (error) {
    // dispatch method call to set error  data
    dispatchFunction(setError(error.response?.data || error.message));
  }
};
