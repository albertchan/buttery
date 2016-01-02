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
                    <header className="by-header cf">
                        <nav className="by-header_left">
                            <ul className="by-menu by-menu--horizontal">
                                <li><a href="javascript:;">Movies</a></li>
                                <li><a href="javascript:;">Cinemas</a></li>
                            </ul>
                        </nav>
                        <div className="by-header_right">
                            <ul className="by-menu by-menu--horizontal">
                                <li>
                                    <Dropdown>
                                        <a className="by-dropdown_trigger" href="javascript:;">Today</a>
                                        <div className="by-dropdown_content">
                                            <ul className="by-menu by-menu--vertical">
                                                <li><a href="javascript:;">Tomorrow</a></li>
                                                <li><a href="javascript:;">Tomorrow</a></li>
                                                <li><a href="javascript:;">Tomorrow</a></li>
                                                <li><a href="javascript:;">Tomorrow</a></li>
                                            </ul>
                                        </div>
                                    </Dropdown>
                                </li>
                                <li><a href="javascript:;">Hong Kong</a></li>
                            </ul>
                        </div>
                    </header>
                    <div id="app">{this.props.children}</div>
                    <script src={vendors}></script>
                    <script src="/js/app.js"></script>
                </body>
            </html>
        );
    }

});

module.exports = Default;
