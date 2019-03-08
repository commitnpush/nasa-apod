import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
import {Circle} from 'better-react-spinkit';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, url, loading}) => {
  if(loading){
    return (
      <div className={cx('viewer')}>
        <Circle color="white" size={60}/>
      </div>
    );
  }
  if(!url) return null;
  return(
    <div className={cx('viewer')}>
      {
        mediaType === 'image' ? (
          <img onClick={() => window.open(url)} src={url} alt="space"/>
        ) : (
          <iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        )
      }
    </div>
  )
}

export default Viewer;