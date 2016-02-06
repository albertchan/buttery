import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from '../../../common/components/Item';
import { fetchCinemasIfNeeded } from '../actions/cinemaActions';


@connect(mapStateToProps, {fetchCinemasIfNeeded})
export default class Cinema extends Component {
    static propTypes = {
        fetchCinemasIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        if (this.props.cinemaId) {
            this.props.fetchCinemasIfNeeded(this.props.cinemaId);
        }
    }
    
    render() {
        const { cinema, isFetching } = this.props;
        
        return (
            <div>
                {isFetching &&
                    <div>Loading...</div>
                }
                {!isFetching && cinema &&
                    <div>
                        <h2>{cinema.name}</h2>
                        <p>{cinema.address}</p>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cinemaId } = state.router.params;
    const { loadCinemas } = state;
    const {
        isFetching,
        item: cinema
    } = loadCinemas || {
        isFetching: true,
        item: {}
    };
    
    return {
        cinema,
        cinemaId,
        isFetching,
        fetchCinemasIfNeeded
    };
}
