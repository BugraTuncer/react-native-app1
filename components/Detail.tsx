import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import { UserDto } from "../models";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6a93a3",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 250,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

interface DetailProps {
  route: any;
}

const Detail: React.FC<DetailProps> = ({ route }) => {
  const { user, likes, photo, altDescription } = route.params;
  const userData: UserDto = user;

  //@ts-ignore
  const BoldText = ({ children }) => (
    <Text style={{ fontWeight: "bold" }}>{children}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.item} source={{ uri: photo }} />
      <View style={styles.text}>
        <Text>
          {"\n"}
          Username: <BoldText>{userData.username.toUpperCase()}</BoldText>
          {"\n"}
        </Text>
        <Text>
          {"\n"}
          Likes : <BoldText>{likes}</BoldText>
          {"\n"}
        </Text>
        {altDescription && (
          <Text>
            Description: <BoldText>{altDescription}</BoldText>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Detail;
