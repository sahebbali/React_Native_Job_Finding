import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
//https://search-engine-api.p.rapidapi.com/SearchGateway/basic-search
  const options = {
    method: "GET",
    url: `https://search-engine-api.p.rapidapi.com/SearchGateway/basic-search`,
    headers: {
      'X-RapidAPI-Key': '4440fa057cmshb57fee5f1789d55p19c6a4jsn4aff96b18067',
    'X-RapidAPI-Host': 'search-engine-api.p.rapidapi.com'
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;