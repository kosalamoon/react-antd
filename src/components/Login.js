import React from 'react';
import Card from "./Card";
import { Button, Checkbox, Form, Icon, Input } from "antd";
import './Login.css';

class Login extends React.Component {

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            console.log('Received values of form: ', values);
         }
      });
   };

   render() {
      const { getFieldDecorator } = this.props.form;
      return (
         <Card imgUrl={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}>
            <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
               <Form.Item hasFeedback>
                  {getFieldDecorator('username', {
                     rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                     <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                        placeholder="Username"
                     />,
                  )}
               </Form.Item>
               <Form.Item>
                  {getFieldDecorator('password', {
                     rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                     <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                        type="password"
                        placeholder="Password"
                     />,
                  )}
               </Form.Item>
               <Form.Item>
                  {getFieldDecorator('remember', {
                     valuePropName: 'checked',
                     initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <Button type="primary" htmlType="submit" className="login-form-button">
                     Log in
                  </Button>
               </Form.Item>
            </Form>
         </Card>
      );
   }
}

export default Form.create()(Login);
