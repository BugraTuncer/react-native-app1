import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Item } from ".";
import { PhotoDto } from "../models";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#6a93a3",
  },
});

interface RenderItemProps {
  item: PhotoDto;
}

const Home = () => {
  const [selectedId, setSelectedId] = React.useState<string>("");
  const [data, setData] = React.useState<PhotoDto[]>([]);
  const navigation = useNavigation<any>();
  const renderItem: React.FC<RenderItemProps> = ({ item }) => {
    const color = item.id === selectedId ? "white" : "black";
    const backgroundColor = item.id === selectedId ? "#c1c4c9" : "#e8eaed";
    return (
      <Item
        item={item.user}
        onPress={() => {
          setSelectedId(item.user.id);
          navigation.push("Detail", {
            user: item.user,
            likes: item.likes,
            photo: item.urls.small,
            altDescription: item.alt_description,
          });
        }}
        textColor={{ color }}
        imageUrl={item.urls.small}
        backgroundColor={{ backgroundColor }}
      />
    );
  };

  React.useEffect(() => {
    const responseData = fetch(
      "https://api.unsplash.com/photos?query=italy&client_id=Q8do2o5OnWVILGu41EGKYcrpLoem7uITMnwiBEJYDSM"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default Home;
