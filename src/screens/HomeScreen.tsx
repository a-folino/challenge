import React, { useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Search } from '../components/Search'
import { ArticlesList } from '../components/ArticlesList';
import { HomeButtons } from '../components/HomeButtons';
import { PreviousSearches } from '../components/PreviousSearches';

export const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  // would store this in redux
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  // would type articles correctly
  const [articles, setArticles] = useState<any[]>([]);

  return (
    <ScrollView style={styles.container}>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <HomeButtons 
        setArticles={setArticles} 
        setSearchText={setSearchText} 
        searchText={searchText} 
        previousSearches={previousSearches}
        setPreviousSearches={setPreviousSearches} 
      />
      <PreviousSearches 
        searches={previousSearches} 
        previousSearches={previousSearches} 
        setArticles={setArticles} 
        setPreviousSearches={setPreviousSearches}
      />
      <ArticlesList articles={articles} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    width: '100%',
  }
});