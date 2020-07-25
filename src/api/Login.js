import axios from 'axios';
import {Alert} from 'react-native';

export default loginCall = (data) => {
  console.log('data: ', data);
  return axios
    .post('https://manicas.herokuapp.com/user/login/', {
      email: data.email,
      password: data.password,
    })
    .catch((e) => {
      Alert.alert('Oops', 'user does not exist');
    });
};
