import { API_KEY } from "../../env"
import axios from "axios"

export const fetchNewsResults = async (search: string) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
  return response.data.articles;
}