import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as layoutActionsCreators from '../../actions/layout';
import Welcome from '../../components/Welcome';
import styles from './App.less';

export default class App extends Component {

  render() {
    return(
    <div className={styles.root}>
      <Welcome isLike={this.props.layout.isLike} onToggleLike={this.props.layoutActions.toggleLike}/>
    </div>
  );
  }

};

function mapStateToProps({layout}) {
  return {
    layout
  }
}

function mapDispatchToProps(dispatch) {
  return {
    layoutActions: bindActionCreators(layoutActionsCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

