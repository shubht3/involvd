import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom'

function Sidebar({ user }) {
    const url = '/' + user.displayName + '/' + user.uid;

    return (
        <div className="sidebar">
            <Link to={url}>
                <SidebarRow avatar ImageLink={user?.photoURL} title={user?.displayName} />
            </Link>
            
            <SidebarRow ImageLink="https://i.ibb.co/xfFzmK7/icons8-https://i.ibb.co/6sK5rW2/icons8-petition-48.png-32.png" title="Petitions" />
            <Link to="/news" style={{ textDecoration: 'none' }}>
            <SidebarRow ImageLink="https://i.ibb.co/JRtttfm/icons8-news-48.png" title="News" />
              </Link>
            
            <SidebarRow dropdown ImageLink="null" title="See more" />
            <div class="hr" />
            <div class="policies">
                <p>Privacy</p>
                <p class="dot">·</p>
                <p>Terms</p>
                <p class="dot">·</p>
                <p>Advertising</p>
                <p class="dot">·</p>
                <p>Ad choices</p>
                <i class="ads" />
                <p class="dot">·</p>
                <p>Cookies</p>
                <p class="dot">·</p>
                <p>More</p>
                <p class="dot">·</p>
                <p>Involved © 2020</p>
            </div>
        </div>
    )
}

export default Sidebar