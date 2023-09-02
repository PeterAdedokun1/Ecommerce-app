import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={{backgroundColor: "#00ced1", padding: 10, flexDirection: "row", alignItems: "center"}}>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign name="search1" size={22} color="black" style={{ paddingLeft: 10 }} />
            <TextInput placeholder="Search amazon" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
