import React, {PropTypes, Component} from 'react';
import styles from './FoldingScreen.less';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

class FoldingScreen extends Component {

  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object
  };
  
  _handleLike = ()=> {
    this.props.onLike();
  };
  _handleDislike = ()=> {
    this.context.router.push({
      pathname: `/dislike`
    })
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.background}></div>
        <div className={styles.wrapper}>
          <div className={styles.toggler}>
            <div onClick={this._handleLike} className={cx({thumb:true,up:true})}></div>
            <div onClick={this._handleDislike} className={cx({thumb:true,down:true})}></div>
          </div>
        </div>
      </div>
    );
  }
}

FoldingScreen.propTypes = {
  onLike: PropTypes.func.isRequired
};

export default FoldingScreen;