import React, { Fragment } from 'react';
import Sidebar from 'react-sidebar';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './common/Header';
import Search from './common/Search';
import Card from './common/Card';
import loadCheatsAction from '../actions/gitCheat/gitCheatActions';

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
      sidebarOpen: false,
      searchTerm: ''
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.loadCheatsAction();
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  handleSearch(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { categories, isLoading } = this.props;
    return (
      <Fragment>
        <Header sidebarOpen={this.state.sidebarOpen} />
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
                Checkout your git commands
              </p>
            </div>
          )}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight
          styles={
            {
              sidebar: {
                background: '#DCDCDC',
                zIndex: 3
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
        <Search handleSearch={this.handleSearch} />
        &nbsp;
        <div className="container">
          {isLoading
        && (
          <div className="d-flex justify-content-center">
            <Loader type="ThreeDots" color="#3D4E81" className="text-center" />
          </div>
        )
          }
          <div className="card-columns">
            {
              categories
              && categories
                .filter(category => category.name.toLowerCase()
                  .includes(this.state.searchTerm.toLowerCase()))
                .map(category => {
                  return (
                    <Card
                      key={category._id}
                      {...category}
                    />
                  );
                })
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = {
  loadCheatsAction: PropTypes.func
};

const mapStateToProps = (
  { gitCheatReducer: { gitCheats: { categories }, isLoading } }) => ({
  categories,
  isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { loadCheatsAction },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);