import React, {PropTypes, Component} from 'react';
import FolksJumbotron from '../FolksJumbotron';
import Header from '../Header';
import FoldingScreen from '../FoldingScreen';
import styles from './Welcome.less';

class Welcome extends Component {
  render() {
    const {isLike, onToggleLike}=this.props;
    return (
      <div className={styles.root}>
        <Header/>
        {isLike && <FolksJumbotron/>}
        {!isLike && <FoldingScreen onLike={()=>onToggleLike(true)}/>}
      </div>
    );
  }
}

Welcome.propTypes = {
  isLike: PropTypes.bool.isRequired,
  onToggleLike: PropTypes.func.isRequired
};

export default Welcome;