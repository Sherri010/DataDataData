import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.css'

export default class Menu extends Component{
    static propTypes = {
        activeItem: PropTypes.string,
        onClickItem: PropTypes.func,
        menuItems: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        menuItems: [],
    };

    render(){
        const { activeItem, onClickItem, menuItems } = this.props;

        return (
            <div className='menuWrapper'>
                <h2 className='title'>Data Structures</h2>
                <ul className='menu'>
                    {menuItems.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => onClickItem(item.name)}
                                className={`menuItem ${activeItem === item.name ? 'active' : ''}`}
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
