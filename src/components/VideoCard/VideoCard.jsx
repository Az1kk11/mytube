import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs' ;
import { abbreviateNumber } from 'js-abbreviation-number';

import VideoLength from '../../shared/videoLength'

import './VideoCard.scss'

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className="card-box">
          <div className="img-box">
            <img src={video?.thumbnails[0].url} className='card-img '/>
            {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )}
          </div>
          <div className="card-content">
            <div className="avatar-box">
              <div className="avatar-con">
                <img src={video?.author?.avatar[0]?.url} className='avatar-img' />
              </div>
            </div>
            <div className="box">
              <span className='box-title' >{video?.title}</span>
              <span className='author-title'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 
                  'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className='badjes-text' />
                  )
                }
              </span>
              <div className="views-card">
                <span> {`${abbreviateNumber(
                  video?.stats?.views,
                    2
                  )} views `} 
                </span>
                <span className='views-bottom' >
                  .
                </span>
                <span className='truncate' >
                  {video?.poblishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default VideoCard