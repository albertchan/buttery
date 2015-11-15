import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Cinemas from '../../../../common/components/Cinemas';
import { fetchCinemasIfNeeded } from '../../actions';


class Cinema extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchCinemasIfNeeded();
    }
    
    render() {
        const { cinemas, isFetching } = this.props;
        
        return (
            <div>
                <h2>Cinemas</h2>
                {isFetching &&
                    <div>Loading...</div>
                }
                {!isFetching && cinemas && cinemas.length > 0 &&
                    <Cinemas items={cinemas} />
                }
            </div>
        );
    }
}

Cinema.propTypes = {
    fetchCinemasIfNeeded: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { loadCinemas } = state;
    const {
        isFetching,
        items: cinemas
    } = loadCinemas || {
        isFetching: true,
        items: []
    };
    
    return {
        cinemas,
        isFetching,
        fetchCinemasIfNeeded
    };
}

export default connect(mapStateToProps, {
    fetchCinemasIfNeeded
})(Cinema);
