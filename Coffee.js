import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function Coffee({ name, totalPrice, setTotalPrice, amount }) {
  const [price, setPrice] = useState(0);

  function increase() {
    setPrice(price + 2);
    setTotalPrice(totalPrice + 2);
  }
  function decrease() {
    setPrice(price - 2);
    setTotalPrice(totalPrice - 2);
  }
  return (
    <View style={StyleSheet.coffee}>
      <View style={styles.details}>
        <Image
          style={styles.image}
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y-RHUbq0NUvHQBEiR0l8KgHaHa%26pid%3DApi&f=1",
          }}
        />
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.amount}>{amount}</Text>
          <View style={styles.button}>
            <Button title="-" onPress={decrease} />
            <Button title="+" onPress={increase} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#fff",
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  amount: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 94,
  },
  button: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 108,
    marginTop: 2,
  },
});
