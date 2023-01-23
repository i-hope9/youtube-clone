import React from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetails() {
  const {
    state: { video },
  } = useLocation();
  const { title, description, channelId, channelTitle } = video.snippet;
  const { videoId } = useParams();
  const {} = useQuery([""]);

  return (
    <section className="flex flex-row">
      <article className="basis-3/4">
        <iframe
          id="player"
          width="100%"
          height="640"
          type="text/html"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameborder="0"
        />
        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <article className="basis-1/4">
        <RelatedVideos id={videoId} />
      </article>
    </section>
  );
}
