import React from 'react'
import { Alert, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

type ArticleItemProps = {
  article: any;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {

  const handlePress = async () => {
    const url = article.url;

    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Can't open this URL:", url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>by {article.author}</Text>
      <Text>{article.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    padding: 10,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 5,
  }
})
