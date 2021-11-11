import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
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
  const Bold = ({ children }) => (
    <Text style={{ fontWeight: "bold" }}>{children}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.item}
        source={{ uri: photo }}
        width={150}
        height={150}
      />
      <View style={styles.text}>
        <Text>
          {"\n"}
          Username: <Bold>{userData.username.toUpperCase()}</Bold>
          {"\n"}
        </Text>
        <Text>
          {"\n"}
          Likes : <Bold>{likes}</Bold>
          {"\n"}
        </Text>
        {altDescription && (
          <Text>
            Description: <Bold>{altDescription}</Bold>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Detail;
