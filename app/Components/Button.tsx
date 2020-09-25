import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={Style.view}>
      <Text style={Style.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  view: {
    height: 44,
    borderRadius: 12,
    width: 252,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  },
});

export default Button;
