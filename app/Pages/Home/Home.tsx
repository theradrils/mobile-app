/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Translations from '../../res';

import crashlytics from '@react-native-firebase/crashlytics'


const Home = ({handleLogin}) => {

  return (
    <>
      <View>
        <Text>{Translations.i18n.t("welcome")}</Text>
        <Button title={'Disconnect'} onPress={handleLogin} color="red" />
        <Button title="Test Crash" onPress={() => crashlytics().crash()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
