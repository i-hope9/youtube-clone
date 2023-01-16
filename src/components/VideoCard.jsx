import React from "react"

export default function VideoCard({video}) {
    const {thumbnails, title, channelTitle, publishedAt} = video;

    return (
        <div>
            <img src={thumbnails.default.url} alt="thumbnail"></img>
            <h5>{title}</h5>
            <h6>{channelTitle}</h6>
            <h6>{publishedAt}</h6>
        </div>
    )
}