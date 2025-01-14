import React, { useState } from 'react'
import { Searchbar } from './Searchbar'
import { StyleSheet, View } from 'react-native'
import { PreviousSearches } from './PreviousSearches';

type SearchProps = {
  searchText: string;
  previousSearches: string[];
  setSearchText: (text: string) => void;
}

export const Search = ({ searchText, previousSearches, setSearchText }: SearchProps) => {

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
