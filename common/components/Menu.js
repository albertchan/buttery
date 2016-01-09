import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {active: 0};
    }

    handleClick(index, e) {
        e.preventDefault();
        console.log(index);
        // this.setState({active: i}); // React will re-render when state changes
    }

    render() {
        return (
            <div className="menu-container">
                <ul className="menu">
                    {this.props.items.map(function(item, i) {
                        var link = '/' + item.id;

                        return (
                            <li key={i}
                                className={classNames('menu-item', {'active': i == this.state.active})}
                                onClick={(i) => this.handleClick.bind(i)}>
                                <Link to={link}>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    }, this)}
                </ul>
            </div>
        );
    }

}

Menu.propTypes = { items: React.PropTypes.array.isRequired };
