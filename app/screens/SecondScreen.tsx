import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import color from "../lib/color";
import { globalStyles } from "../lib/global";
import { BtnLg } from "../lib/buttonComp";
import WordList from "../components/WordList";
import BottomSheet from "react-native-simple-bottom-sheet";
import { Foundation } from "@expo/vector-icons";

const Words = [
  {
    id: 1,
    word: "folgen",
    answer: false,
  },
  {
    id: 2,
    word: "schaf",
    answer: true,
  },
  {
    id: 3,
    word: "Bereiden",
    answer: false,
  },
  {
    id: 4,
    word: "Haus",
    answer: false,
  },
];

const SecondScreen = (): JSX.Element => {
  const [clicked, setClicked] = useState(Words);
  const [selectedItem, setSelectedItem] =
    useState<{ id: number; word: string; answer: boolean }>();

  const panelRef = useRef<any>(null);
  const [open, setOpen] = useState<boolean>(false);

  const correctAnswer = "schaf";

  const toggle = () => {
    setOpen(open);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.footer}>
        <Text
          style={[
            globalStyles.textRegular,
            { fontSize: 14, color: color.light, marginBottom: 30 },
          ]}
        >
          Fill in the missing word
        </Text>
        <Text
          style={[
            globalStyles.textRegular,
            { fontSize: 14, color: color.light, marginBottom: 50 },
          ]}
        >
          The <Text style={[globalStyles.textMedium]}>house</Text> is small
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              globalStyles.textRegular,
              {
                fontSize: 14,
                color: color.light,
              },
            ]}
          >
            Das
          </Text>

          <View
            style={
              selectedItem?.word
                ? [styles.itemBox, { marginHorizontal: 15 }]
                : styles.sentenceBox
            }
          >
            <Text style={[globalStyles.textMedium, { fontSize: 14 }]}>
              {selectedItem?.word}
            </Text>
          </View>

          <Text
            style={[
              globalStyles.textRegular,
              {
                fontSize: 14,
                color: color.light,
              },
            ]}
          >
            ist klien
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <WordList
            clicked={clicked}
            setClicked={setClicked}
            // toggleHandler={toggleHandler}
            renderItem={({ item }: any) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedItem(item);
                  }}
                >
                  <View
                    style={
                      selectedItem?.id === item.id
                        ? styles.clickedBox
                        : styles.itemBox
                    }
                  >
                    {selectedItem?.id === item.id ? (
                      <View></View>
                    ) : (
                      <Text style={[globalStyles.textMedium, { fontSize: 14 }]}>
                        {item.word}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            flex: 1,

            justifyContent: "flex-end",
          }}
        >
          {selectedItem?.id ? (
            <BtnLg
              text="CHECK ANSWER"
              backgroundColor="#05F2F2"
              onPress={() => panelRef.current.togglePanel(toggle)}
            />
          ) : (
            <BtnLg text="CONTINUE" backgroundColor="rgba(255,255,255, 0.3)" />
          )}
        </View>
      </View>

      <BottomSheet
        isOpen={false}
        ref={(ref: any) => (panelRef.current = ref)}
        sliderMinHeight={0}
        wrapperStyle={
          selectedItem?.answer === true
            ? { backgroundColor: "#05f2f2" }
            : { backgroundColor: "#F2778D" }
        }
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          {selectedItem?.answer === true ? (
            <View
              style={{
                marginBottom: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <Text style={[globalStyles.textMedium, { color: color.light }]}>
                Great job!
              </Text>
              <Foundation name="flag" size={24} color="white" />
            </View>
          ) : (
            <View style={{ marginBottom: 15 }}>
              <Text style={[globalStyles.textMedium, { color: color.light }]}>
                Answer: <Text>{correctAnswer}</Text>
              </Text>
            </View>
          )}

          <View style={{ marginBottom: 50 }}>
            <BtnLg
              textStyle={
                selectedItem?.answer === true
                  ? { color: "#05f2f2" }
                  : { color: "#F2778D" }
              }
              customStyle={{
                shadowColor: "#000000",
                shadowOffset: { width: 0, height: 12 },
                shadowOpacity: 0.58,
                shadowRadius: 25,
                elevation: 15,
              }}
              text="CONTINUE"
              backgroundColor={color.light}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 3,
    backgroundColor: color.secondary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  sentenceBox: {
    width: 60,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  clickedBox: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255, 0.3)",
    marginBottom: 12,
  },
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
  answerTrue: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#05f2f2",
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: "rgba(255,255,255, 0.6)",
    elevation: 5,
  },
  answerFalse: {
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#F2778D",
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: "rgba(255,255,255, 0.6)",
    elevation: 5,
  },
});
