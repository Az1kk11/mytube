import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from '../../shared/videoLength'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from "js-abbreviation-number";

import './SearchVideoCard.scss'

const SearchVideoCard = ({ video }) => {    
  return (
    <Link to={`/video/${video?.videoId}`} >
        <div className="search-boxx-video">
            <div className="img-boxx">
                <img src={video?.thumbnails[0]?.url} />
                {video?.lengthSeconds && (
                    <VideoLength time={video?.lengthSeconds} />
                )}
            </div>
            <div className="search-desc">
                <span className='search-title' >
                    {video?.title}
                </span>
                <span className='desc-snip' >
                    {video?.descriptionSnippet}
                </span>
                <div className="search-avatar">
                    <div className="sear-img">
                        <div className="imgg">
                            <img src={video?.author?.avatar[0].url} />
                        </div>
                    </div>
                    <div className="search-author">
                        <span className="search-title">
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type ===
                                "VERIFIED_CHANNEL" && (
                                <BsFillCheckCircleFill className='check' />
                            )}
                        </span>
                        <div className="serach-views">
                            <span>{`${abbreviateNumber(
                                video?.stats?.views,
                                2
                            )} views`}</span>
                            <span className="box">
                                .
                            </span>
                            <span className="truncate">
                                {video?.publishedTimeText}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default SearchVideoCard