import { setData } from "../features/usersSlice";
import axios from "axios";

const fetchData = async (dispatch) => {
  //dispatch  passed  here is useDispatch hook as oarameter from the component where it is called
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch(
    setData({
      data: response.data,
      loading: false,
    })
  );
};

export default fetchData;
