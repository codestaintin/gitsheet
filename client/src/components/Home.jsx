import React, { Fragment } from 'react';
import Sidebar from 'react-sidebar';
import Header from './common/Header';
import Search from './common/Search';
import Card from './common/Card';

/**
 * @export
 *
 * @class Home
 *
 * @extends {React.Component}
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <br />
        <Sidebar
          sidebar={(
            <div className="container">
              <img
                className="mx-auto d-block"
                src="http://res.cloudinary.com/ditm0nduo/image/upload/c_scale,w_45/v1543601618/logo_esyn8n.png"
                alt="check"
              />
              <p className="text-center">The Awesome Git Sheet</p>
              <hr />
              <p>
                Whether you are new to git or just needing a referesher,
              </p>
              <p>
              this cheat sheet will help you discover or
              remember useful git commands.
              </p>
            </div>
          )}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight
          styles={
            {
              sidebar: {
                background: '#6E7FF3',
                zIndex: 3,
              }
            }
          }
        >
          <button
            type="button"
            className="float-right custom-margin btn btn-link"
            onClick={() => this.onSetSidebarOpen(true)}
          >
            <i className="fa fa-angle-double-left" />
          </button>
        </Sidebar>
        &nbsp;
        <Search />
        &nbsp;
        <div className="container">
          <div className="card-columns">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Home;