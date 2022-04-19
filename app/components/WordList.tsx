import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../lib/global";

// const Words = [
//   {
//     id: 1,
//     word: "folgen",
//     isSelected: false,
//   },
//   {
//     id: 2,
//     word: "schaf",
//     isSelected: false,
//   },
//   {
//     id: 3,
//     word: "Bereiden",
//     isSelected: false,
//   },
//   {
//     id: 4,
//     word: "Haus",
//     isSelected: false,
//   },
// ];

const WordList = (props: any) => {
  //   const [clicked, setClicked] = useState(Words);
  const { clicked, setClicked, toggleHandler, renderItem } = props;

  const renderFlatList = (renderData: any) => {
    return (
      <FlatList
        columnWrapperStyle={styles.row}
        data={renderData}
        renderItem={renderItem}
        numColumns={2}
      />
    );
  };

  return <View>{renderFlatList(clicked)}</View>;
};

export default WordList;

const styles = StyleSheet.create({
  itemBox: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: "rgba(255,255,255, 0.6)",
    elevation: 5,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    width: "72%",
    alignSelf: "center",
  },
  clickedBox: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255, 0.3)",
    marginBottom: 12,
  },
});
