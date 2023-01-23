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
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="rounded-full w-10 h-10" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
