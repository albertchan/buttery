import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from '../../../../common/components/Item';
import { fetchMoviesIfNeeded } from '../../actions/movieActions';


@connect(mapStateToProps, {fetchMoviesIfNeeded})
export default class Movie extends Component {
    static propTypes = {
        fetchMoviesIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.movieId) {
            this.props.fetchMoviesIfNeeded(this.props.movieId);
        }
    }

    render() {
        const { movie, isFetching } = this.props;
        console.log(movie);

        return (
            <div>
                {isFetching &&
                <div>Loading...</div>
                }
                {!isFetching && movie &&
                <div>
                    <h2>{movie.title}</h2>
                    <p></p>
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { movieId } = state.router.params;
    const { loadMovies } = state;
    const {
        isFetching,
        item: movie
        } = loadMovies || {
        isFetching: true,
        item: {}
    };

    return {
        movie,
        movieId,
        isFetching,
        fetchMoviesIfNeeded
    };
}

export default connect(mapStateToProps, {
    fetchMoviesIfNeeded
})(Movie);
