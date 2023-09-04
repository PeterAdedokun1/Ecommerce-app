import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const AddressScreen = () => {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ backgroundColor: "#00CED1", height: 50 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a new Address
        </Text>
        <TextInput
          placeholder="Nigeria"
          placeholderTextColor={"black"}
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Full Name (first and name)
          </Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Flat,House No, Building,Company
          </Text>
          <TextInput
            placeholder=""
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Area ,Street,sector, village
          </Text>
          <TextInput
            placeholder=""
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark</Text>
          <TextInput
            placeholder=""
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>
          <TextInput
            placeholder=""
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
              </View>
              
              <Pressable style={{backgroundColor:"#ffc72c", padding: 19,borderRadius: 6, alignItems:"center"}}>  
                  <Text style={{fontWeight: "bold",}}>Add Address</Text>
              </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
