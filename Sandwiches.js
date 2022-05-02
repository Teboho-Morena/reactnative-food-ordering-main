import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function Sandwiches({
  name,
  totalPrice,
  setTotalPrice,
  amount,
}) {
  const [price, setPrice] = useState(0);

  function increase() {
    setPrice(price + 5);
    setTotalPrice(totalPrice + 5);
  }
  function decrease() {
    setPrice(price - 5);
    setTotalPrice(totalPrice - 5);
  }
  return (
    <View style={StyleSheet.sandwiches}>
      <View style={styles.details}>
        <Image
          style={styles.image}
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-vblDDjaMycxfrpHTne5VQHaE8%26pid%3DApi&f=1",
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
    marginLeft: 65,
  },
  button: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 80,
    marginTop: 2,
  },
});
