import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const cx = classNames.bind(styles);

const SpaceNavigator = ({onPrev, onNext}) => {
  return (
    <div className={cx('space-navigator')}>
      <div className={cx('left', 'end')}>
        <div className={cx('circle')} onClick={onPrev}>
          <MdChevronLeft/>
        </div>
      </div>
      <div className={cx('right', 'end')}>
        <div className={cx('circle')} onClick={onNext}>
          <MdChevronRight/>
        </div>
      </div>
    </div>
  );
}

export default SpaceNavigator