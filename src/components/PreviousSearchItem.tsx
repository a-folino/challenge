import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type PreviousSearchItemProps = {
  handleOnPress: () => void;  
  handleDelete: () => void;
  search: string;
}

export const PreviousSearchItem = ({ search, handleOnPress, handleDelete }: PreviousSearchItemProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={handleOnPress}>
        <Text>{search}</Text>
      </Pressable>
      <Pressable onPress={handleDelete}>
        <Text>X</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10
  }
});

