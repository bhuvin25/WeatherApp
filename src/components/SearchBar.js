import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChange }) => {
  return <TextInput style={styles.input} placeholder="Enter city" value={value} onChangeText={onChange} />;
};

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, width: '80%', marginBottom: 10 },
});

export default SearchBar;
