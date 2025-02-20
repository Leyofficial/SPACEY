import axios from "axios";

export const getNews = async () => {
  try {
    const response = await axios.get(
      "https://spacey-server-two.vercel.app/news"
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
