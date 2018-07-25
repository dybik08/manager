import React,{Component} from 'react';
import {Card, CardItem, Button, Input} from "./common";

class EmployeeCreate extends Component {
    render(){
        return(
            <Card>
                <CardItem>
                   <Input
                       label="Name"
                       placeholder="Jane"
                   />
                </CardItem>
                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                    />
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

export default EmployeeCreate;