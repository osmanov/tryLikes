import React, {PropTypes, Component} from 'react';
import Header from '../../components/Header';
import styles from './Dislike.less';

class Dislike extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <div className={styles.root}>
        <Header/>
        <div className={styles.background}></div>
      </div>
    );
  }
}

export default Dislike;