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
            <div className="by-movie flex flex-row-ns flex-col mw8-l center">
                {isFetching &&
                <div>Loading...</div>
                }
                {!isFetching && movie &&
                <div>
                    <h2>{movie.title}</h2>
                    <Timeline items={movie} locale={this.props.currentLocale} />
                </div>
                }
                <header className="by-movie_header flex_item w5-ns">
                    <div className="flag flag--top db-ns pam-ns">
                        <div className="flag_img prm db-ns pan-ns">
                            <img className="by-movie_thumb db" src="http://ia.media-imdb.com/images/M/MV5BMjM2MTQ2MzcxOF5BMl5BanBnXkFtZTgwNzE4NTUyNzE@._V1_UX140_CR0,0,140,209_AL_.jpg"/>
                        </div>
                        <div className="flag_body db-ns">
                            <h2>Star Wars: The Force Awakens</h2>
                            <p></p>
                        </div>
                    </div>
                </header>
                <section className="by-movie_showtimes flex_item w-100">
                    <ul className="by-showtimes mtn">
                        <li className="by-showtimes_legend">17:00</li>
                        <li className="by-showtime by-showtime--medium">
                            <time className="by-showtime_time">17:20</time>
                            <span className="by-showtime_cinema">UA Cine Times</span>
                        </li>
                        <li className="by-showtime by-showtime--high">
                            <time className="by-showtime_time">17:50</time>
                            <span className="by-showtime_cinema">UA Cityplaza</span>
                        </li>
                        <li className="by-showtimes_legend">18:00</li>
                        <li className="by-showtime by-showtime--low">
                            <time className="by-showtime_time">18:20</time>
                            <span className="by-showtime_cinema">UA Cine Times</span>
                        </li>
                        <li className="by-showtime by-showtime--low">
                            <time className="by-showtime_time">18:50</time>
                            <span className="by-showtime_cinema">UA Cityplaza</span>
                        </li>
                    </ul>
                </section>
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
