import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import useVideos from '../hooks/use-videos';
// import VideoCard from '../components/VideoCard'

export default function Videos() {
    const {q} = useParams();
    const [loading, error, videos] = useVideos({q: 'keyword'});
    return (
        <>
            <section>
                <ul>
                    {videos.map(
                        (video) => <VideoCard key={video.id} video={video.snippet}/>
                    )}
                </ul>
            </section>
        </>
    );
}