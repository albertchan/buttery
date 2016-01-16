import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import classNames from 'classnames';


export default class MovieList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick(index, e) {
        e.preventDefault();
    }

    render() {
        const items = this.props.items !== undefined ? this.props.items : [];

        return (
            <section>
                {items.map(function(item, i) {
                    // item = {id: id, title: 'Movie title', image: thumbnail_url}
                    var link = '/movie/' + item.id;
                    console.log(item);
                    return (
                        <article key={i}
                            title={item.title}
                            className={classNames('cf', 'mvm')}
                            onClick={(i) => this.handleClick.bind(i)}>
                            <div className="mw-75--ns u-float-left--ns">{item.title}</div>
                            <div className="u-float-right--ns tc">
                                <Link className="by-btn by-btn--gray" to={link} >
                                    <small className="green">24 mins</small> | UA Cityplaza
                                </Link>
                            </div>
                        </article>
                    );
                }, this)}
            </section>
        );
    }

}

MovieList.propTypes = { items: React.PropTypes.array };
