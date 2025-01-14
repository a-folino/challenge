import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { fetchNewsResults } from '../api/news';

type SubmitButtonProps = {
  setArticles: (articles: any[]) => void;
  searchText: string;
  previousSearches: string[];
  setPreviousSearches: (searches: string[]) => void;
};

export const SubmitButton = ({ setArticles, searchText, setPreviousSearches, previousSearches }: SubmitButtonProps) => {

  const handleOnPress = async () => {
    try {
      const response = await fetchNewsResults(searchText);
      setPreviousSearches([...previousSearches, searchText]);

      // only storing first 5 articles
      setArticles(response.slice(0, 5));
    } catch (error) {
      // would handle error better in production
      console.log(error)
    }
  };

  return (
    <Pressable
      style={styles.button}
      onPress={handleOnPress}  
    >
      <Text style={styles.text}>Search</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    backgroundColor: '#24a0ed',
    textAlign: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
})
