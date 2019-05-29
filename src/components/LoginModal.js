import React, { Component } from 'react';
import { Modal, Form, Input, Icon } from 'antd';
import './LoginModal.css';

export const UserForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends Component {
      render() {
        const { visible, onCancel, onCreate, form, title, okText } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title={title}
            okText={okText}
            onCancel={onCancel}
            onOk={onCreate}
          >
          <Icon type="login" style={{ fontSize: 40, display: 'flex', justifyContent: 'center', marginBottom: 24 }} />
            <Form layout="vertical">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    },
  );