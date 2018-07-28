import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {Card,CardItem,Button} from "./common";
import * as actions from '../actions';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
           this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift, employee } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: employee.uid});
    }

    render() {
        return(
            <Card>
                <EmployeeForm/>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EmployeeEdit);