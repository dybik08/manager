import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {CardItem} from "./common";

class EmployeeListItem extends Component {
  render(){
      const {name} = this.props.employee.item;

      return(
          <View>
              <CardItem>
                <Text style={styles.titleStyle} >
                    {name}
                </Text>
              </CardItem>
          </View>
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