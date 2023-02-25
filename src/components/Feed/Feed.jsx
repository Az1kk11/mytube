import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/Context'
import { LeftNav, VideoCard, Category } from '../'

import './Feed.scss'

const Feed = () => {
  const { loading, searchResults, selectedCategory, setSelectedCategory } = useContext(Context)

  const selectedCategoryHander = category => setSelectedCategory(category)
  
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  },[])

  return (
    <div className='home'>
      <LeftNav/>
      <div className='content'>
      <Category selectedCategoryHander={selectedCategoryHander} 
          selectedCategory={selectedCategory}
        />
        <div className='cards'>
          {!loading &&  
            searchResults.map((item, index)=>{
              if(item.type !== 'video') return false;
              return(
                <VideoCard 
                  key={index}
                  video={item?.video}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Feed