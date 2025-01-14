import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ArticleItem } from './ArticleItem';

type ArticlesListProps = {
  // would have this typed correctly
  articles: any[];
}

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <View style={styles.container}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  }
})