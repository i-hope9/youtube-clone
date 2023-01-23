import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useQuery } from "react-query";
// import Youtube, { search } from "../api/youtube";
// import FakeYoutube from "../api/fake-youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";
// import VideoCard from '../components/VideoCard'

export default function Videos() {
  const { q } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", q], () => {
    return youtube.search(q);
  }, {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong...</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
