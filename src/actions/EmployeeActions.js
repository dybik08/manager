import EMPLOYEE_UPDATE from './const';

export const employeeUpdate = ({ prop, value }) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: {prop, value}
  };
};