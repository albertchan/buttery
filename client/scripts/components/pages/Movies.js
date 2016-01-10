import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../../../../common/components/List';
import { fetchMoviesIfNeeded } from '../../actions/movieActions';


@connect(mapStateToProps, {fetchMoviesIfNeeded})
export default class Movies extends Component {
    static propTypes = {
        fetchMoviesIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMoviesIfNeeded();
    }

    render() {
        const { movies, isFetching } = this.props;
        console.log(movies);

        return (
            <div>
                <h2>Movies</h2>
                {isFetching &&
                <div>Loading...</div>
                }
                {!isFetching && movies && movies.length > 0 &&
                <List items={movies} />
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
