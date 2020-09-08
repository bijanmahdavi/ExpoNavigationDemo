import React, { Component } from 'react';
import { TextInput } from 'react-native';

const OurTextInput = () => {
  const [value, onChangeText] = React.useState('Username');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', textAlign: "center" }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export function SetValuePass() {
    const [value, onChangeText] = React.useState('Password');
    return (
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', textAlign: "center"}}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      );
}

export default OurTextInput;