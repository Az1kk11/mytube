import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../context/Context';

import { LeftNavItemTop,
        LeftNavItemCenter, 
        LeftNavItemSubscriptions, 
        LeftNavItemNavigator, 
        LeftNavItemFeatures,
        LeftNavItemSettings,
        LeftMiniMenu } from '../../Utils/Constants'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

import './LeftNav.scss'

const LeftNav = () => {
    const { mobilMenu } = useContext(Context)
    
  return (
    <div className={`left-nav ${mobilMenu ? 'mobilMenu' : '' } `}>
        <div className="navbar-box">
            <div className="nav-box" >
                {LeftNavItemTop.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box">
                            <span className='nav-icon'>{item.icon}</span>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav-box" >
                {LeftNavItemCenter.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box" >
                            <span className='nav-icon'>{item.icon}</span>
                            {item.name}
                        </div>
                    </div>        
                ))}
            </div>
            <div className="nav-box" >
                <h3 className='sybs-text' >Subscriptions</h3>
                {LeftNavItemSubscriptions.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box">
                            <Avatar src={ item.uri } sx={{
                                    width:'30px',
                                    height:'30px',
                                    marginRight:'20px',
                                    marginLeft:'15px'
                                }}/>
                            {item.name}
                        </div>
                    </div>
                ))}
                <div className="nav-item-box">
                    <AddCircleOutlineIcon sx={{ marginRight:'20px', marginLeft:'15px' }} />
                    <h4>Channel catalog</h4>
                </div>
            </div>
            <div className="nav-box" >
                <h3 className='sybs-text'>Navigator</h3>
                {LeftNavItemNavigator.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box">
                            <span className='nav-icon'>{item.icon}</span>
                            {item.name}
                        </div>
                    </div>        
                ))}
            </div>
            <div className="nav-box" >
                <h3 className='sybs-text'>Other features</h3>
                {LeftNavItemFeatures.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box">
                            <span className='other-icon'>{item.icon}</span>
                            {item.name}
                        </div>
                    </div>        
                ))}
            </div>
            <div className="nav-box" >
                {LeftNavItemSettings.map((item, index)=>(
                    <div key={index}>
                        <div className="nav-item-box">
                            <span className='nav-icon'>{item.icon}</span>
                            {item.name}
                        </div>
                    </div>        
                ))}
            </div>
            <div className="nav-box" >
                <div className="info-text">
                    <h6>© 2023 Google LLC</h6>
                    <div className='text'>
                        <div className="urll-box">
                            <div className="ddd">
                            Clone by  <CallReceivedIcon sx={{ marginLeft:'10px' }} />
                            </div>
                            <span>Jaksilikov Azizbek</span>
                            </div>
                        <div className="urll">
                            <InstagramIcon/>
                            <a href="https://instagram.com/az1kk.11?igshid=OTJlNzQ0NWM=">
                                Instagram</a>
                        </div>
                        <div className="urll">
                            <TelegramIcon/>
                            <a href="https://t.me/Az1kk11">Telegram</a>
                        </div>
                        <div className="urll">
                            <GitHubIcon/>
                            <a href="https://github.com/Az1kk11">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-min">
            {LeftMiniMenu.map((item, index)=> (
                <div key={index}>
                    <div className="nav-min-box">
                        <span className='nav-icon'>{item.icon}</span>
                        {item.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


export default LeftNav