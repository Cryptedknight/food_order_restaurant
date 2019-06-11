import React from 'react';
import { Row, Col } from 'antd';
import DropDown from '../../components/DropDown/DropDown';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            categoryChoices: [{value: "newRestaurant", text: "Add Location"}, {value: "menu", text: "Manage Menu"}, {value: "tables", text: "Modify Tables"}],
            currentCategory: "newRestaurant",
        }
    }

    getCategory = categoryObject => {
        const { key } = categoryObject;
        console.log(key);
    } 


    render () {
        return (
            <div>
                <Row>
                    <h1>Your Restaurants</h1>
                    {/* Table for managing restaurant info */}
                </Row>
                <Row gutter={8}>
                    <Col span={20}></Col>
                    <Col span={4}>
                        <DropDown getCategory={this.getCategory}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;