import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../../common/components/MovieList';
import { fetchMoviesIfNeeded } from '../actions/movieActions';


@connect(mapStateToProps, {fetchMoviesIfNeeded})
export default class Movies extends Component {
    static propTypes = {
        fetchMoviesIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let region = this.props.currentRegion;
        this.props.fetchMoviesIfNeeded(region);
    }

    render() {
        const { currentLocale, movies, isFetching } = this.props;

        return (
            <div className="mw8-ns phm center">
                <h2>Movies</h2>
                {isFetching &&
                    <div>Loading...</div>
                }
                {!isFetching && movies && movies.length > 0 &&
                    <MovieList items={movies} locale={currentLocale} type="main" />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentLocale, currentRegion, loadMovies } = state;
    const {
        isFetching,
        items: movies
    } = loadMovies || {
        isFetching: true,
        items: []
    };

    return {
        currentLocale,
        currentRegion,
        movies,
        isFetching,
        fetchMoviesIfNeeded
    };
}
