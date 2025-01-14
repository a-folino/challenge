import React from 'react'
import { StyleSheet, View } from 'react-native'
import { fetchNewsResults } from '../api/news';
import { PreviousSearchItem } from './PreviousSearchItem';

type PreviousSearchesProps = {
  searches: string[];
  previousSearches: string[];
  setPreviousSearches: (searches: string[]) => void;
  setArticles: (articles: any[]) => void;
}

export const PreviousSearches = ({ searches, setPreviousSearches, previousSearches, setArticles }: PreviousSearchesProps) => {

  const handleOnPress = async (search: string) => {
    const response = await fetchNewsResults(search);
    setPreviousSearches([...previousSearches, search]);

    // only storing first 5 articles
    setArticles(response.slice(0, 5));
  };

  const handleDelete = (index: number) => {
    const newSearches = previousSearches.filter((_, i) => i !== index);
    setPreviousSearches(newSearches);
  }

  return (
    <View style={styles.container}>
      {searches.map((search, index) => (
        <PreviousSearchItem 
          key={`prev-${index}`}
          search={search} 
          handleOnPress={() => handleOnPress(search)} 
          handleDelete={() => handleDelete(index)} 
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    gap: 10,
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }
});
