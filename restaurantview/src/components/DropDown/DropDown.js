import React from 'react';
import { Select } from 'antd';
import style from './style';

const Option = Select.Option;
const selectCategory = props => {

   function handleValues (value) {
       props.getCategory(value);
   }
   return (
        <Select labelInValue defaultValue={{key: "newRestaurant"}} dropdownStyle={style.dropdown} onChange={handleValues}>
            <Option value="newRestaurant">Add Location</Option>
            <Option value="menu">Manage Menu</Option>
            <Option value="tables">Modify Tables</Option>
        </Select>
   );
};

export default selectCategory;