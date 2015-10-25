var React = require('react'),
    Default =require('./layouts/Default.jsx');


var Home = React.createClass({

    render: function() {
        return (
            <Default title="Home">
                <h1>Buttery</h1>
                <p className="subheading">Movie information, show times and more.</p>
            </Default>
        );
    }

});

module.exports = Home;