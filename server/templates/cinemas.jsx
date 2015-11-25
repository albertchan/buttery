var React = require('react'),
    classNames = require('classnames'),
    Default =require('./layouts/Default'),
    Menu = require('../../common/components/Menu');


var Cinemas = React.createClass({

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
                <p className="subheading">{this.props.i18n.translateWithCache('app.tagline')}</p>
                <Menu items={menuArray} />
                <div className="content">
                    <h2>Cinemas</h2>
                    <div>Loading...</div>
                </div>
            </Default>
        );
    }

});

module.exports = Cinemas;
