// import axios from '../../Utils/axios'; // adjust the path if needed

// const fetchData = async ({ url, slug, setState, setLoading }) => {
//   try {
//     if (setLoading) setLoading(true);
//     const res = await axios.public.post(url, { slug });
//     setState(res.data?.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     if (setLoading) setLoading(false);
//   }
// };

// export default fetchData;


import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

const fetchData = async ({ url, slug }) => {
  try {
    if (!BASE_URL) throw new Error("API base URL is not defined");

    // Properly combine base URL and endpoint
    const apiUrl = new URL(url, BASE_URL).href;

    const res = await axios.post(apiUrl, { slug });
    return res.data?.data || null;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default fetchData;

