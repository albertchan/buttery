import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../../../common/components/MovieList';
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

        return (
            <div className="mw6-ns center">
                <span className="red">Sample</span>
                <span className="green">Sample</span>
                <span className="yellow">Sample</span>
                <button className="by-btn by-btn--primary">Button</button>
                <button className="by-btn by-btn--secondary">Button</button>
                <h2>Movies</h2>
                {isFetching &&
                    <div>Loading...</div>
                }
                {!isFetching && movies && movies.length > 0 &&
                    <MovieList items={movies} />
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
