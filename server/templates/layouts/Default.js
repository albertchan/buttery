var React = require('react'),
    ReactPropTypes = React.PropTypes;

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
                    <header className="by-header cf">
                        <div className="by-header_right u-float-right">
                            <span>Filter by:</span> <a href="javascript:;">Right Now</a>
                            <span>in</span> <a href="javascript:;">Hong Kong</a>
                        </div>
                    </header>
                    <button className="by-btn by-btn--primary">Primary</button>
                    <a href="#" className="by-btn by-btn--primary">Primary</a>
                    <input type="button" className="by-btn by-btn--primary" value="Primary"/>
                    <div id="app">{this.props.children}</div>
                    <script src={vendors}></script>
                    <script src="/js/app.js"></script>
                </body>
            </html>
        );
    }

});

module.exports = Default;
