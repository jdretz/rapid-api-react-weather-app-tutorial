import React from 'react';
import {
    sky,
    circle,
    cloud1,
    cloud2,
    cloud3
} from "./Logo.module.css"

const Logo = () => (
    <div className={sky}>
        <div className={circle}/>
        <div className={cloud1} />
        <div className={cloud2} />
        <div className={cloud3} />
    </div>
)

export default Logo;