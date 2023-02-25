import { Link } from 'react-router-dom'
import React from 'react'
import VideoLength from '../../shared/videoLength'

import { abbreviateNumber } from 'js-abbreviation-number'
import {BsFillCheckCircleFill} from 'react-icons/bs'

import './SuggestionVideoCard.scss'

const SuggestionVideoCard = ( { video } ) => {
  return (
    <Link to={`/video/${video?.videoId}`} >
      <div className="subes-video">
        <div className="suges-img">
          <img src={video?.thumbnails[0]?.url} />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className="suges-desc">
          <span className='suges-title'>{video?.title}</span>
          <span className='suges-auther-title' > 
            {video?.author?.title}
            {video?.author?.badges[0]?.type ===
              "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className='suges-badges' />
              )
            }
          </span>
          <div className="suges-stats">
            <span>
            {`${abbreviateNumber(
                video?.stats?.views,
                2
              )} views`}
            </span>
            <span className='suges-s' > . </span>
            <span className='truncate' > {video?.publishedTimeText} </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SuggestionVideoCard