import React,{Component} from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import {Button, Card, CardItem, Input} from "./common";
import * as actions from '../actions';


class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if(this.props.error) {
            return(
              <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
              </View>
            );
        }
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
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardItem>
                {this.renderError()}
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
   const { email, password, error } = state.auth;
   return {
   email,
   password,
   error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);