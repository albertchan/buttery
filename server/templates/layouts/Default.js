var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Dropdown = require('../../../common/components/Dropdown.js');

var Default = React.createClass({

    propTypes: {
        title: ReactPropTypes.string
    },

    render: function() {
        var app = '/js/app.js',
            vendors = '/js/vendors.js';

        if (process.env.NODE_ENV === 'production') {
            vendors = '/js/vendors.min.js';
        }

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>
                    <div id="app">{this.props.children}</div>
                    <script src={vendors}></script>
                    <script src="/js/app.js"></script>
                </body>
            </html>
        );
    }

});

module.exports = Default;
