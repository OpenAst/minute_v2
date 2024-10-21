import {  post } from '../../api/api';

export const changePasswordAction = (passwordData) => async (dispatch) => {
  try {
    await post('/auth/change-password/', passwordData);
    alert('Password changed successfullly');
  } catch (error) {
    console.error('Error changing password', error);
    alert('Error changing password')
  }

};