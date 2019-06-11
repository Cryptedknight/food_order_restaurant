import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Button} from 'antd';
import style from './style';
import foodord from "./images/food_order.png";

const { Header } = Layout;

const HeaderDiv = props => (
    <Layout>
        <Header style={style.header} className="header">
            <Row type="flex" gutter={32}>
                <Col span={3}>
                    <div style={style.imgDiv}>
                        <Link to="/"><img alt="Foodorderlogo" src={foodord} style={style.logo}/></Link>
                    </div>
                </Col>
                <Col span={15}>
                    <div style={style.helloUser}>
                        {(props.loggedIn) ? <h4>{`Hello ${props.user.firstName}`}</h4> : <h4>Food Order Restaurant Management Portal</h4>}

                    </div>
                </Col>
                <Col span={6}>
                    {(() => {
                            if (props.loggedIn) {
                                return (
                                    <div style={style.nav}>
                                        <div style={style.navDiv}>
                                            <Link to="/register"><Button style={style.button} onClick={props.logout}><h4>Logout</h4></Button></Link>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div style={style.nav}>
                                        <span style={style.navDiv}>
                                            <Link to="/"><Button style = {style.button} onClick = {()=>props.register}> <h4>Create Your Account</h4></Button></Link>
                                        </span>
                                        <span style={style.navDiv}>
                                            <Button style={style.button} onClick={props.login}><h4>Login</h4></Button>
                                        </span>
                                    </div>
                                );
                            }
                        })()
                    }

                </Col>
            </Row>

            <Menu></Menu>
        </Header>
    </Layout>
);
export default HeaderDiv;
