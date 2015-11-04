var React = require('react'),
    Default =require('./layouts/Default.jsx'),
    Menu = require('../../common/components/Menu.jsx'),
    ReactPropTypes = React.PropTypes;


var Home = React.createClass({

    propTypes: {
        title: ReactPropTypes.string
    },

    getInitialState: function() {
        return {
            locale: 'en'
        };
    },

    changeLanguage: function(lng) {
        this.setState({
            locale: lng
        });
    },

    render: function() {
        var menuArray = this.props.i18n.translateWithCache('menu', this.state.locale, {returnObjectTrees: true}),
            title = this.props.i18n.translateWithCache('app.name');

        return (
            <Default title={title}>
                <h1>Buttery</h1>
                <p className="subheading">{this.props.i18n.translateWithCache('app.tagline')}</p>
                <Menu items={menuArray} />
            </Default>
        );
    }

});

module.exports = Home;
