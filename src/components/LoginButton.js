// import React, { Component } from 'react';
// import { Button } from 'antd';
// import { UserForm } from './LoginModal';

// export default class LoginButton extends Component {
//     state = {
//       visible: false,
//     };
  
//     showModal = () => {
//       this.setState({ visible: true });
//     };
  
//     handleCancel = () => {
//       this.setState({ visible: false });
//     };
  
//     handleCreate = () => {
//       const form = this.formRef.props.form;
//       form.validateFields((err, values) => {
//         if (err) {
//           return;
//         }
  
//         console.log('Received values of form: ', values);
//         form.resetFields();
//         this.setState({ visible: false });
//       });
//     };
  
//     saveFormRef = formRef => {
//       this.formRef = formRef;
//     };
  
//     render() {
//       return (
//         <div>
//           <Button type='primary'  onClick={this.showModal}>
//             New Collection
//           </Button>
//           <UserForm
//             wrappedComponentRef={this.saveFormRef}
//             visible={this.state.visible}
//             onCancel={this.handleCancel}
//             onCreate={this.handleCreate}
//           />
//         </div>
//       );
//     }
//   }
