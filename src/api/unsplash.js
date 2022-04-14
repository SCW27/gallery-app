import axios from "axios";

const UNSPLASH_URL = process.env.REACT_APP_UNSPLASH_API_URL;
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export const searchAction = async (
  searchTerm,
  per_page = 5,
  page = 1,
  order_by = "relevant"
) => {
  return await axios.get(
    `${UNSPLASH_URL}/search/photos?query=${searchTerm}&per_page=${per_page}&page=${page}&order_by=${order_by}`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    }
  );
};
