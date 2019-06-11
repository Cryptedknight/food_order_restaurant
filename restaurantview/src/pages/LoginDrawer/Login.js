import React from 'react';
import { Drawer, Form, Input, Button, Row, Col, Icon } from 'antd';
import styleLogin from './styleLogin';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginDrawer extends React.Component { 
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            const {userName, password} = values;
            this.props.login(userName, password);
          }
        });
      }



    render () {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
      
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
                <div>
                    <Drawer
                        title="Login"
                        placement="right"
                        onClose={this.props.onClose}
                        visible={this.props.visible}
                    >
                        <Form onSubmit={this.handleSubmit}>
                            <Row gutter={8}>
                                <Col span={12}>
                                    <FormItem
                                        validateStatus={userNameError ? 'error' : ''}
                                        help={userNameError || ''}
                                        >
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem
                                        validateStatus={passwordError ? 'error' : ''}
                                        help={passwordError || ''}
                                        >
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Please input your Password!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} style={styleLogin.btn}>Login</Button>
                                </FormItem>
                            </Row>
                        </Form>  
                        
                    </Drawer>
                </div>
        );
    }
}

const Login = Form.create()(LoginDrawer);
export default Login;