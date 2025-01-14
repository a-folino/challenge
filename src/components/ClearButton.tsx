import React from "react";
import { Button, Pressable, StyleSheet, Text } from "react-native";

type ClearButtonProps = {
  setSearchText: (text: string) => void;
  setArticles: (articles: any[]) => void;
};

export const ClearButton = ({ setSearchText, setArticles }: ClearButtonProps) => {
  const handleOnPress = () => {
    setSearchText("");
    setArticles([]);
  }

  return (
    <Pressable style={styles.button} onPress={handleOnPress}>
      <Text style={styles.text}>Clear</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    backgroundColor: "red",
    textAlign: "center",
    borderRadius: 20,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
