import { useEffect } from "react";
import { useState } from "react";

export default function useVideos({ q }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    let url = '/data/';

    if (q === '')
      url += 'mostPopular.json';
    else 
      url += 'searchKey.json';

    fetch(url)
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [q]);

  return [loading, error, videos];
}
