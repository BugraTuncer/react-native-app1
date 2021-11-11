import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { UserDto } from "../models";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 250,
  },
  title: {
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: "center",
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});

interface ItemProps {
  item: UserDto;
  onPress: any;
  textColor: any;
  imageUrl: string;
  backgroundColor: any;
}

const Item: React.FC<ItemProps> = ({
  item,
  onPress,
  textColor,
  imageUrl,
  backgroundColor,
}) => (
  <SafeAreaView>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, backgroundColor]}
    >
      <Text style={[styles.title, textColor]}>
        {item.username.toUpperCase()}
      </Text>
      <Image source={{ uri: imageUrl }} style={styles.item} />
    </TouchableOpacity>
  </SafeAreaView>
);

export default Item;
