import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { useState } from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Doner from "./Doner";
import Coffee from "./Coffee";
import Sandwiches from "./Sandwiches";
import Pizza from "./Pizza";
import Salads from "./Salads";

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <ScrollView>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ fontWeight: "900" }}>Cart</Text>
          <SimpleLineIcons name="pencil" size={24} color="black" />
        </View>
        <Doner
          name="Doner"
          amount="M10.00"
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Coffee
          name="Coffee"
          amount="M2.00"
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Sandwiches
          name="Sandwich"
          amount="M5.00"
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Pizza
          name="pizza"
          amount="M15.00"
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Salads
          name="Salad"
          amount="M20.00"
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Text style={{ fontSize: 30 }}>The total price is {totalPrice}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE082",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
