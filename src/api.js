import axios from 'axios';

const API_URL = 'https://localhost:7183/api/Auth/';

export const login = async loginObject => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginObject);
    return response;
  } catch (error) {
    console.log(error.response);
  }
};

// export const signUp = async signupObject => {
//   try {
//     const response = await axios.post(
//       `http://10.0.2.2:7183/api/Auth/Register`,
//       signupObject,
//     );
//     console.log(response.data);
//     //return response.data;
//   } catch (error) {
//     console.log('hi');
//     console.log(error);
//   }
// };

export const signUp = async signupObject => {
  try {
    const response = await fetch('https://localhost:7183/api/Auth/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupObject),
    });

    if (!response.ok) {
      console.log('Failed to sign up');
    }

    const data = await response.json();
    console.log(data);
    //return data;
  } catch (error) {
    console.log('hi');
    console.error(error);
  }
};
