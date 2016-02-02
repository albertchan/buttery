import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../../../../common/components/List';
import { fetchCinemasIfNeeded } from '../../actions/cinemaActions';


@connect(mapStateToProps, {fetchCinemasIfNeeded})
export default class Cinemas extends Component {
    static propTypes = {
        fetchCinemasIfNeeded: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchCinemasIfNeeded(this.props.currentRegion);
    }
    
    render() {
        const { cinemas, isFetching } = this.props;
        
        return (
            <div className="mw6-ns center">
                <h2>Cinemas</h2>
                {isFetching &&
                    <div>Loading...</div>
                }
                {!isFetching && cinemas && cinemas.length > 0 &&
                    <List items={cinemas} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentRegion, loadCinemas } = state;
    const {
        isFetching,
        items: cinemas
    } = loadCinemas || {
        isFetching: true,
        items: []
    };
    
    return {
        currentRegion,
        cinemas,
        isFetching,
        fetchCinemasIfNeeded
    };
}