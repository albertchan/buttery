var React = require('react'),
    classNames = require('classnames'),
    Default =require('./layouts/Default.jsx'),
    Menu = require('../../common/components/Menu.jsx');


var Cinema = React.createClass({

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        var menuArray = this.props.i18n.translateWithCache('menu', this.state.locale, {returnObjectTrees: true}),
            title = this.props.i18n.translateWithCache('app.name'),
            cinemas = this.props.context.cinema;

        return (
            <Default title={title}>
                <h1>{title}</h1>
                <p className="subheading">{this.props.i18n.translateWithCache('app.tagline')}</p>
                <Menu items={menuArray} />
                <div className="content">
                    <h2>Cinemas</h2>
                    <ul>
                        {cinemas.map(function(item, i) {
                            var link = '/cinema/' + item.id;

                            return (
                                <li key={i}
                                    className={classNames('list-item')}>
                                    <a href={link}>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </Default>
        );
    }

});

module.exports = Cinema;
