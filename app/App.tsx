/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const onPressLearnMore = () => {
    AsyncStorage.setItem('@connected', `${!isAuth}`);
    setIsAuth((prev) => !prev);
  };

  useEffect(() => {
    AsyncStorage.getItem('@connected').then((res) => {
      setIsAuth(JSON.parse(res));
    });
  }, []);

  return (
    <>
      <View style={styles.view}>
        {isAuth ? (
          <Home handleLogin={onPressLearnMore} />
        ) : (
          <Login handleLogin={onPressLearnMore} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    flex: 1
  },
});

export default App;
