import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
    SafeAreaView,
    TextInput,
  Pressable,
  ImageBackground,
  Dimensions
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useRoute , useNavigation} from "@react-navigation/native";
const ProductInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const { width } = Dimensions.get("window");
    const height = (width * 100) / 100; 
  return (
    <ScrollView
      style={{ marginTop: 45, flex: 1, backgroundColor: "white" }}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#00ced1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
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
          <AntDesign
            name="search1"
            size={22}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          <TextInput placeholder="Search amazon" />
        </Pressable>
        <Feather name="mic" size={24} color="black" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {route.params.carouselImages.map((item, index) => (
                  <ImageBackground style={{width, height, marginTop:25, resizeMode: "contain"}} source={{uri: item}} key={index}>
                      <View></View>
            </ImageBackground>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({});
