import React from "react"
import { formatAgo } from "../util/date";

export default function VideoCard({video}) {
    const {thumbnails, title, channelTitle, publishedAt} = video;

    return (
        <li>
            <img className="w-full" src={thumbnails.medium.url} alt={title}></img>
            <div>
                <p className="font-semibold mt-2 mb-1 line-clamp-2">{title}</p>
                <p className="text-sm text-slate-400">{channelTitle}</p>
                <p className="text-sm text-slate-400">{formatAgo(publishedAt, 'ko')}</p>
            </div>
        </li>
    )
}