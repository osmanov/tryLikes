import React, {PropTypes, Component} from 'react';
import styles from './Header.less';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
            <div className={styles.logo}></div>
          <div className={styles.list}>
            <span>info@trylikes.com&nbsp;|&nbsp;</span>
            <Link to="https://app.trylikes.com" target="_blank">Customer login</Link>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;