import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { UserForm } from './LoginModal';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: window.location.pathname,
            visible: false,
        }
        this.selectMenu = this.selectMenu.bind(this);
    }

    selectMenu(e) {
        this.setState({
            currentPage: e.key
        })
    }

    showModal = () => {
        this.setState({ visible: true });
    };
    
    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
            return err;
            }

            console.log('Received values of form: ', values);
            this.props.login(values)
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        console.log(this.props)
        return(
            <header>
                <Menu mode="horizontal" onClick={this.selectMenu} selectedKeys={[this.state.currentPage]}>
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
                    <Menu.Item
                        key="/profile"
                        style={{ position: 'absolute', right: 10 }}
                    >
                        <Link to={'/profile'} onClick={this.showModal}>
                            <Icon type="bars" />
                            Profile
                        </Link>
                        <UserForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                            title={'Login'}
                            okText={'Login'}
                        />
                    </Menu.Item>
                </Menu>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);