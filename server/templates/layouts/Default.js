var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Dropdown = require('../../../common/components/Dropdown.js');

var Default = React.createClass({

    propTypes: {
        title: ReactPropTypes.string
    },

    render: function() {
        var app = '/assets/js/app.js',
            styles = '/assets/css/app.css',
            vendors = '/assets/js/vendors.js';

        if (process.env.NODE_ENV === 'production') {
            vendors = '/assets/js/vendors.min.js';
        }

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link href={styles} rel="stylesheet" />
                </head>
                <body>
                    <div id="app">{this.props.children}</div>
                    <script src={vendors}></script>
                    <script src={app}></script>
                </body>
            </html>
        );
    }

});

module.exports = Default;
