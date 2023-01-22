import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useQuery } from "react-query";
import Youtube, { search } from "../api/youtube";
import FakeYoutube from "../api/fake-youtube";
// import VideoCard from '../components/VideoCard'

export default function Videos() {
  const { q } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", q], () => {
    const youtube = new Youtube();
    return youtube.search(q);
  });
  return (
    <>
      <section>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong...</p>}
        {videos && (
          <ul>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video.snippet} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
