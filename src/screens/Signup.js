import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signUp} from '../api';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    const signupObject = {
      email,
      password,
    };
    const res = await signUp(signupObject);
    //console.log(res);
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="email"
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="password"
          secureTextEntry
          onChangeText={setPassword}
        />
        {/* <TouchableOpacity onPress={goToLogin}> */}
        <Button title="Signup" onPress={handleSubmit} />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    borderWidth: 0,
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    padding: 20,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 50,
    padding: 10,
    margin: 10,
  },
  label: {},
});
