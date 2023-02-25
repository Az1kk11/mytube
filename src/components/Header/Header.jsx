import React, { useContext, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context';

import imgLogo from '../../images/yt-logo.png'
import imgMobil from '../../images/yt-logo-mobile.png'
import Loader from '../../shared/loader'

import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar, CardActionArea } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Close } from '@mui/icons-material';

import './header.scss'

const Header = () => {
  const [ searchQuery, setSearchQuery ] = useState('')
  const { loading, mobilMenu, setMobilMenu } =  useContext(Context)

  const navgate = useNavigate()

  const SearchQueryHanler = (e) => {
    if((e?.key ===  'Enter' || e === 'searchButton') && 
      searchQuery?.length > 0
    ){
      navgate(`/searchResult/${searchQuery}`)
    }
  }  

  const mobilMenuTogle = () => {
    setMobilMenu(!mobilMenu)
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0]
  return (
    <div className="top-menu">
      { loading && <Loader/> }
      <div className="menu-box">
        {pageName !== 'video' && (
          <div className="mabil-menu"
            onClick={mobilMenuTogle}
          >
            {mobilMenu ? (
              <Close/>
              ) : (
                <MenuIcon/>
            )}
          </div>  
        )}
        <div className="logo">
          <Link to={'/'} >
            <img src={imgLogo} className='desktop-logo' />
            <img src={imgMobil} className='mobil-logo' />
          </Link>
        </div>
      </div>
      <div className="input-box">
        <div className="input-border" >
          <input 
            type="text" 
            className='input-top'
            placeholder='Search'
            onKeyUp={SearchQueryHanler}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className='btn-top'  
                onClick={()=> SearchQueryHanler('searchButton') }
                >
            <CardActionArea sx={{
                width:'100%',
                height:'100%',
                borderBottomRightRadius:'1.5rem',
                borderTopRightRadius:'1.5rem',
              }}>
              <SearchIcon/>
            </CardActionArea>
        </button>
      </div>
      <div className="right-top">
        <div className="add-line">
          <div className="add-line">
            <CardActionArea className='bnt-add-line' >
              <VideoCallIcon />
            </CardActionArea>
            <CardActionArea className='bnt-add-line' >
              <NotificationsActiveOutlinedIcon/>
            </CardActionArea>
          </div>
          <Avatar src='https://xsgames.co/randomusers/assets/avatars/female/67.jpg' sx={{
            width:'30px',
            height:'30px',
          }} />
        </div>
      </div>
    </div>
  )
}

export default Header