import React from 'react';
import classes from "./Logo.module.css"

const Logo = () => (
    <div className={classes.sky}>
        <div className={classes.circle}/>
        <div className={classes.cloud1} />
        <div className={classes.cloud2} />
        <div className={classes.cloud3} />
    </div>
)

export default Logo;