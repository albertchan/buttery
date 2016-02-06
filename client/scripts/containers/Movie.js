import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from '../../../common/components/Item';
import Timeline from '../../../common/components/Timeline';
import { fetchMovieIfNeeded } from '../actions/movieActions';


@connect(mapStateToProps, {fetchMovieIfNeeded})
export default class Movie extends Component {
    static propTypes = {
        fetchMovieIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.movieId) {
            this.props.fetchMovieIfNeeded(this.props.movieId);
        }
    }

    render() {
        const { currentLocale, currentRegion, movie, isFetching } = this.props;
        console.log(movie);

        return (
            <div>
                {isFetching &&
                <div>Loading...</div>
                }
                {!isFetching && movie &&
                <div>
                    <h2>{movie.title}</h2>
                    <Timeline items={movie} locale={this.props.currentLocale} />
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { movieId } = state.router.params;
    const { currentLocale, currentRegion, loadMovie } = state;
    const {
        isFetching,
        item: movie
        } = loadMovie || {
        isFetching: true,
        item: {}
    };

    return {
        currentLocale,
        currentRegion,
        movie,
        movieId,
        isFetching,
        fetchMovieIfNeeded
    };
}
