import axios from 'axios';

export default userARegisterCall = (data) => {
  return axios.post('https://manicas.herokuapp.com/user/register/', {
    user_type: 'USER_A',
    name: data.name,
    email: data.email,
    password: data.password,
    city: data.city,
  });
};
