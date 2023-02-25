import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import { LeftNav, SearchVideoCard } from '../'
import { fetchDataApi } from '../../Utils/ApiData'

import './SerachResult.scss'

function SearchResults() {
    const [result, setResult] = useState()
    const { searchQuery } = useParams()
    const { setLoading } = useContext(Context)

    useEffect(()=>{
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults()
    },[searchQuery])

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataApi(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };
  return (
    <div className="search-box">
        <LeftNav/>
        <div className="serach-con">
            <div className="content">
                {result?.map((item, index)=>{
                    if(item?.type !== 'video') return false;
                    let video = item.video
                    return (
                        <SearchVideoCard
                        key={index}
                        video = { video }
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SearchResults