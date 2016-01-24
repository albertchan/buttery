import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ShowingsList from '../../../../common/components/ShowingsList';
import { fetchShowingsIfNeeded } from '../../actions/showingActions';


@connect(mapStateToProps, {fetchShowingsIfNeeded})
export default class Showings extends Component {
    static propTypes = {
        fetchShowingsIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { inputValue } = this.props;
        //this.props.fetchShowingsIfNeeded();
    }

    render() {
        const { showings, isFetching } = this.props;

        return (
            <div>
                <h2>Showings</h2>
                {isFetching &&
                <div>Loading...</div>
                }
                {!isFetching && showings && showings.length > 0 &&
                <ShowingsList items={showings} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loadMovies } = state;
    const {
        isFetching,
        items: movies
        } = loadMovies || {
        isFetching: true,
        items: []
    };

    return {
        movies,
        isFetching,
        fetchMoviesIfNeeded
    };
}
