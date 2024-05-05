import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const goToSignup = () => {
    navigation.navigate('Signup');
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
        <Button title="Login" />
        <Text>
          Not Registerd?
          <TouchableOpacity onPress={goToSignup}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </Text>
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
