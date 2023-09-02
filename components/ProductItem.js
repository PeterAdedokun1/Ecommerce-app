import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ProductItem = ({ image, title }) => {
  return (
    <Pressable style={{ marginHorizontal: 15, marginVertical: 25 }}>
      <Image
        source={{ uri: image }}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />
      <Text numberOfLines={1} style={{ width: 150, marginTop: 10 }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
