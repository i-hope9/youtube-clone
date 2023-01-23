import React from "react";
import { useQuery } from "react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageUrl(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex my-4 mb-8 items-center">
      {isLoading && (
        <p className="rounded-full w-10 h-10 bg-indigo-700 font-extrabold text-lg text-center">
          {name.charAt(0)}
        </p>
      )}
      {error && (
        <p className="rounded-full w-10 h-10 bg-indigo-700 font-extrabold text-lg text-center">
          {name.charAt(0)}
        </p>
      )}
      {url && <img className="rounded-full w-10 h-10" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
