import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetails() {
  const {
    state: { video },
  } = useLocation();
  const { title, description, channelId, channelTitle } = video.snippet;
  const { videoId } = useParams();

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-3/4">
        <iframe
          id="player"
          title={title}
          width="100%"
          height="640"
          type="text/html"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
        />
        <div className="p-8">
          <h2 className="font-bold text-2xl">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <article className="basis-1/4">
        <RelatedVideos id={videoId} />
      </article>
    </section>
  );
}
