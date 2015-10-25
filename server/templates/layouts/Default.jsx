var React = require('react');

var Default = React.createClass({

    render: function() {
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
                    {this.props.children}
                    <script src="/js/app.js"></script>
                </body>
            </html>
        );
    }

});

module.exports = Default;