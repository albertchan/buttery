import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';


export default class Menu extends React.Component {

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
        //onClick={this.handleClick.bind(this, i)}>

        return (
            <div className="menu-container">
                <ul className="menu">
                    {this.props.items.map(function(item, i) {
                        var link = '/' + item.id;

                        return (
                            <li key={i}
                                className={classNames('menu-item', {'active': i == this.state.active})}
                                onClick={(i) => this.handleClick.bind(i)}>
                                <a href={link}>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        );
                    }, this)}
                </ul>
            </div>
        );
    }

}

Menu.propTypes = { items: React.PropTypes.array.isRequired };
