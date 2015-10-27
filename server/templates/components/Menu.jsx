var React = require('react'),
    classNames = require('classnames'),
    PropTypes = React.PropTypes;


var Menu = React.createClass({

    propTypes: {
        items: PropTypes.array.isRequired,
    },

    getInitialState: function() {
        return {
            active: 0
        };
    },

    handleClick: function(i, event) {
        event.preventDefault();
        this.setState({active: i}); // React will re-render when state changes
    },

    render: function() {

        return (
            <div className="menu-container">
                <ul className="menu">
                    {this.props.items.map(function(item, i) {
                        return (
                            <li key={i}
                                className={classNames('menu-item', {'active': i == this.state.active})}
                                onClick={this.handleClick.bind(this, i)}>
                                <a href="#">
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    }, this)}
                </ul>
            </div>
        );
    }

});

module.exports = Menu;
