/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import ButtonCustom from '../../Components/Button';
import Translation from '../../res/index';
interface LoginProps {
  handleLogin: (value: boolean) => void;
}

interface formInput {
  login: string;
  password: string;
}

const Login = (props: LoginProps) => {
  const [formInput, setFormInput] = useState<formInput>({
    login: '',
    password: '',
  });

  const handleChangeLogin = (text: string, target: string) => {
    const formInputCP = {...formInput};
    formInputCP[target] = text;
    setFormInput({...formInputCP});
  };

  const handleSendLogin = () => {
    props.handleLogin(true);
  };

  return (
    <>
      <View style={styles.scrollView}>
        {/*<Logo size={100} />*/}
        <TextInput
          style={styles.inputStyles}
          placeholder={'login'}
          onChangeText={(text) => handleChangeLogin(text, 'login')}
          value={formInput.login}
        />
        <TextInput
          style={styles.inputStyles}
          placeholder={'password'}
          onChangeText={(text) => handleChangeLogin(text, 'password')}
          value={formInput.password}
        />
        <ButtonCustom text={Translation.i18n.t("send")} onPress={handleSendLogin} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center',
    padding: 50,
  },
  inputStyles: {
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    margin: 10,
  },
  send: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    flex: 1,
  }
});

export default Login;
