import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { id } = video;
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${id}`, { state: { video } });
  };

  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={
          isList
            ? "w-40 mr-2 hover:cursor-pointer"
            : "w-full hover:cursor-pointer"
        }
        src={thumbnails.medium.url}
        alt={title}
      ></img>
      <div>
        <p className="font-semibold mt-2 mb-1 line-clamp-2">{title}</p>
        <p className="text-sm text-slate-400">{channelTitle}</p>
        <p className="text-sm text-slate-400">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
