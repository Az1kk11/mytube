import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import { fetchDataApi } from '../../Utils/ApiData'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from "react-icons/ai";
import { SuggestionVideoCard } from '../'

import './VideoDetails.scss'

const VideoDetails = () => {
    const [video, setVideo] = useState()
    const [relatedVideos, setRelatedVideos] = useState()
    const {id} = useParams()
    const { setLoading } = useContext(Context)

    useEffect(()=>{
        document.getElementById('root').classList.add('custom-h')
        fetchVideoDetails()
        fetchRelatedVideos()
    },[id])

    const fetchVideoDetails = () => {
        setLoading(true)
        fetchDataApi( `video/details/?id=${id}` ).then((res)=> {
            setVideo(res)
            console.log(res);
            setLoading(false)
        });
    };
    const fetchRelatedVideos = () => {
        setLoading(true);
        fetchDataApi(`video/related-contents/?id=${id}`).then((res)=>{
            console.log(res);
            setRelatedVideos(res)
            setLoading(false)
        })
    }
    console.log(video);
  return (
    <div className="video-box-player">     
        <div className="video-con-player">
            <div className="video-content">
                <div className="player">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls
                        width={'100%'}
                        height={'100%'}
                        style={{ backgroundColor:'#000000' }}
                        playing={true}
                    />
                </div>
                <div className="video-title">
                    {video?.title}
                </div>
                <div className="desc">
                    <div style={{ display:'flex' }} >
                        <div style={{ display:'flex', alignItems:'flex-start' }} >
                            <div className="img-avatar">
                                <img src={video?.author?.avatar[0]?.url} />
                            </div>
                        </div>
                        <div className="subs-text">
                            <div className="text-icon">
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type ===
                                    "VERIFIED_CHANNEL" && (
                                        <BsFillCheckCircleFill className='badjes-icon' />
                                    )}
                            </div>
                            <div className="text">
                                {video?.author?.stats?.subscribersText}
                            </div>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="like">
                            <AiOutlineLike className='like-icon' />
                            {`${abbreviateNumber(video?.stats?.views,
                                2
                                )} Likes`}
                        </div>
                        <div className="like">
                            {`${abbreviateNumber(video?.stats?.views,
                                2
                                )}Views`}
                        </div>
                    </div>
                </div>
            </div>
            <div className="suges-video">
                {relatedVideos?.contents?.map((item, index)=>{
                    if(item?.type !== 'video') return false
                    return(
                        <SuggestionVideoCard key={index} video={item?.video}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default VideoDetails