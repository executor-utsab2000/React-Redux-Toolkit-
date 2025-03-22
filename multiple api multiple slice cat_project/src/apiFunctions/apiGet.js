import axios from "axios";

const apiGet = async () => {
  const response = await axios.get("src/data/apiKey.txt");
  const apikey = response.data.split("=")[1];

  return apikey;
};

export default apiGet;
