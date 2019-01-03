import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.loadCheatsAction();
  }

  handleSearch(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { categories, isLoading } = this.props;
    return (
      <Fragment>
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
            {
              isLoading && (categories && !categories.length > 0)
              && (
                <h1 className="text-center">
                  Add new git cheats
                </h1>
              )
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