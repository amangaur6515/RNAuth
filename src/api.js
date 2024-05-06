import axios from 'axios';

const API_URL = 'http://192.168.1.7:7183/api/Auth';

export const login = async loginObject => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginObject);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const signUp = async signupObject => {
  try {
    const response = await axios.post(`${API_URL}/Register`, signupObject);

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// export const signUp = async signupObject => {
//   try {
//     const response = await fetch('https://192.168.1.7:7183/api/Auth/Register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(signupObject),
//     });

//     if (!response.ok) {
//       console.log('Failed to sign up');
//     }

//     const data = await response.json();
//     console.log(data);
//     //return data;
//   } catch (error) {
//     console.log('hi');
//     console.error(error);
//   }
// };
