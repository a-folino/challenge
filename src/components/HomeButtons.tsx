import React from 'react'
import { SubmitButton } from './SubmitButton'
import { ClearButton } from './ClearButton'
import { StyleSheet, View } from 'react-native'

type HomeButtonsProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  setArticles: (articles: any[]) => void;
  previousSearches: string[];
  setPreviousSearches: (searches: string[]) => void;  
};

export const HomeButtons = ({ searchText, setSearchText, setArticles, previousSearches, setPreviousSearches }: HomeButtonsProps) => {
 

  return (
    <View style={styles.container}>
      <SubmitButton searchText={searchText} setArticles={setArticles} previousSearches={previousSearches} setPreviousSearches={setPreviousSearches} />
      <ClearButton setArticles={setArticles} setSearchText={setSearchText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10
  }
});
