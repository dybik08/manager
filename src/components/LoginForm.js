import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Button, Card, CardItem, Input} from "./common";
import * as actions from '../actions';


class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render(){
        return(
            <Card>
                <CardItem>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                    />
                </CardItem>
                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = state => {
  return {
   email: state.auth.email
  };
};

export default connect(mapStateToProps, actions)(LoginForm);