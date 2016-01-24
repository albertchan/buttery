import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';
import Dropdown from './Dropdown';


let items = {};

export default class SelectRegion extends Component {

    constructor(props) {
        super(props);

        for (var item of this.props.items) {
            items[item.id] = item.name;
        }

        this.state = {
            items: items,
            selected: this.props.selected || 1
        };
    }

    handleClick(id, e) {
        e.preventDefault();
        this.setState({selected: id}); // React will re-render when state changes
        this.props.handleChange(id);
    }

    render() {
        return (
            <Dropdown>
                <a className="by-dropdown_trigger" href="javascript:;">{items[this.state.selected]}</a>
                <div className="by-dropdown_content">
                    <ul className="by-menu by-list--vertical">
                        {this.props.items.map(function(item, i) {
                            return (
                                <li key={item.id} onClick={this.handleClick.bind(this, item.id)}>
                                    <a href="javascript:;">{item.name}</a>
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </Dropdown>
        );
    }

}

SelectRegion.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string
};