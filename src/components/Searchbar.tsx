import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type SearchbarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const Searchbar = ({ searchText, setSearchText }: SearchbarProps) => {
  return (
    <TextInput style={styles.input} value={searchText} onChangeText={setSearchText} placeholder='Search articles' />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#eaeaea',
    width: 300,
    borderRadius: 50,
    paddingLeft: 20,
  }
});