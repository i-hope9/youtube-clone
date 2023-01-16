import React from "react";
import VideoCard from "../components/VideoCard";
import useVideos from "../hooks/use-videos";

export default function Home() {
    const [loading, error, videos] = useVideos({q: ''});
    return (
        <>
            <section>
                <ul>
                    {videos.map(
                        (video) => <VideoCard key={video.id} video={video.snippet} />
                    )}
                </ul>
            </section>
        </>
    )
}