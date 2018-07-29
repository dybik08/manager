import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmpolyeeEdit';

const RouterComponent = () => {
  return (
      <Router>
          <Scene key="root" hideNavBar >
              <Scene key="auth">
                <Scene style={styles.titleStyle} key='login' component={LoginForm} title="Please Login" initial />
              </Scene>
              <Scene key="main">
                  <Scene
                      rightTitle="Add"
                      onRight={() => Actions.employeeCreate()}
                      key="employeeList"
                      component={EmployeeList}
                      title="Employees"
                      initial
                  />
                  <Scene
                      key="employeeCreate"
                      component={EmployeeCreate}
                      title="Create Employee"
                  />
                  <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                  />
              </Scene>
          </Scene>
      </Router>
  );
};

const styles = {
  titleStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
};

export default RouterComponent;