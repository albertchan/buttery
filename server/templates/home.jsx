var React = require('react'),
    Default =require('./layouts/Default.jsx'),
    Menu = require('./components/Menu.jsx');


var Home = React.createClass({

    render: function() {
        var menuArray = this.props.i18n.translateWithCache('menu', 'en', {returnObjectTrees: true});

        return (
            <Default title="Home">
                <h1>Buttery</h1>
                <p className="subheading">Movie information, show times and more.</p>
                <Menu items={menuArray} />
            </Default>
        );
    }

});

module.exports = Home;
