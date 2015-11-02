var React = require('react'),
    Default =require('./layouts/Default.jsx'),
    Menu = require('../../common/components/Menu.jsx');


var Cinema = React.createClass({

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        var menuArray = this.props.i18n.translateWithCache('menu', this.state.locale, {returnObjectTrees: true}),
            title = this.props.i18n.translateWithCache('app.name');

        return (
            <Default title={title}>
                <h1>{title}</h1>
                <p className="subheading">Movie information, show times and more.</p>
                <Menu items={menuArray} />
                <div className="content">
                    <h2>Cinemas</h2>
                </div>
            </Default>
        );
    }

});

module.exports = Cinema;
