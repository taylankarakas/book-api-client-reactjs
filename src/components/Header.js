import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: window.location.pathname
        }
        this.selectMenu = this.selectMenu.bind(this);
    }

    selectMenu(e) {
        this.setState({
            currentPage: e.key
        })
    }

    render() {
        return(
            <header>
                <Menu mode="horizontal" onClick={this.selectMenu} selectedKeys={[this.state.currentPage]} >
                    <Menu.Item key="/">
                        <Link to={'/'}>
                            <Icon type="home" />
                                Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/books">
                        <Link to={'/books'}>
                            <Icon type="appstore" />
                                Books
                        </Link>
                    </Menu.Item>
                </Menu>
            </header>
        )
    }
}