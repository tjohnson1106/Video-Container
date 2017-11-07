import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainApp = () => {
  const name = "01 - This is my life";

  return (
    <View style={styles.container}>
      <View style={styles.innerConatiner} />
      <Text style={styles.title}>
        <Text style={styles.subtitle}>Playing:</Text> {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: "#e67e22",
    borderRadius: 5
  },
  innerConatiner: {
    backgroundColor: "#d35400",
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "200",
    color: "#fff",
    position: "absolute",
    backgroundColor: "transparent",
    top: 12,
    left: 10
  },
  subtitle: {
    fontWeight: "bold"
  }
});

export default MainApp;
