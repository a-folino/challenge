import React from 'react'
import { Searchbar } from './Searchbar'
import { StyleSheet, View } from 'react-native'

type SearchProps = {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const Search = ({ searchText, setSearchText }: SearchProps) => {

  return (
    <View style={styles.container}>
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  }
});
