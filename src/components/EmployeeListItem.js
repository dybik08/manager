import React,{Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardItem} from "./common";

class EmployeeListItem extends Component {
  onRowPress() {
      Actions.employeeCreate({ employee: this.props.employee });
  }

  render(){
      const {name} = this.props.employee.item;

      return(
          <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
              <View>
                  <CardItem>
                    <Text style={styles.titleStyle} >
                        {name}
                    </Text>
                  </CardItem>
              </View>
          </TouchableWithoutFeedback>
      );
  }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,

    }
};

export default EmployeeListItem;