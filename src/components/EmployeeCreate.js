import React,{Component} from 'react';
import { Picker, Text } from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions";
import {Card, CardItem, Button, Input} from "./common";

class EmployeeCreate extends Component {
    render(){
        const {name, phone, employeeUpdate } = this.props;
        return(
            <Card>
                <CardItem>
                   <Input
                       label="Name"
                       placeholder="Jane"
                       value={name}
                       onChangeText={value => employeeUpdate({prop: 'name', value})}
                   />
                </CardItem>
                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        value={phone}
                        onChangeText={value => employeeUpdate({prop: 'phone', value})}
                    />
                </CardItem>
                <CardItem style={{ flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker

                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardItem>
                <CardItem>
                    <Button>
                        Create
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = state => {
    const {name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);