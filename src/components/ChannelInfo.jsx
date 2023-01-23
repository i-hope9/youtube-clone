import React from "react";
import { useQuery } from "react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => {
    return youtube.channelImageUrl(id);
  });

  return (
    <div>
      {url && <img className="rounded-full" src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
