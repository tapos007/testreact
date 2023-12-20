import { Axios } from "axios";

const getPosts = async (cookie) => {
  try {
    const post = await Axios.get(
      `https://localhost:7004/WeatherForecast/get-from-api`,
      {
        headers: { Cookie: ".AspNet.ApplicationCookie=" + cookie },
      }
    );

    return post;
  } catch (e) {
    const msg = e?.response?.error.message ?? e?.message ?? "Unknown Error";

    console.error(msg);

    return false;
  }
};
export default getPosts;
