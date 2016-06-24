import React, {PropTypes, Component} from 'react';
import styles from './FolksJumbotron.less';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

class FolksJumbotron extends Component {
  render() {
    return (
      <div  className={styles.root}>
        <div className={cx({folk:true,blue:true})}></div>
        <div className={cx({folk:true,yellow:true})}></div>
        <div className={cx({folk:true,green:true})}></div>
        <div className={cx({folk:true,red:true})}></div>
      </div>
    );
  }
}

export default FolksJumbotron;