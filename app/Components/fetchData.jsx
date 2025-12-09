import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

const fetchData = async ({ url, slug }) => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    const apiUrl = `${BASE_URL}${url}`; // agar url me / included hai to theek hai

    const res = await axios.post(apiUrl, { slug });
    console.log("API RESPONSE:", res.data);

    return res.data?.data || null;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default fetchData;
