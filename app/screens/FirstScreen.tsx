import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import color from "../lib/color";
import { globalStyles } from "../lib/global";
import { BtnLg } from "../lib/buttonComp";

const height = Dimensions.get("screen");

const FirstScreen = () => {
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
            style={{
              width: 60,
              marginHorizontal: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#fff",
            }}
          ></View>

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
            marginBottom: 15,
            justifyContent: "space-around",

            width: "70%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={[
                globalStyles.textMedium,
                {
                  fontSize: 14,
                  color: color.dark,
                  backgroundColor: color.light,
                  justifyContent: "center",
                  textAlign: "center",
                  textAlignVertical: "center",
                  width: 100,
                  height: 50,
                  borderRadius: 20,
                  shadowColor: "rgba(0, 0, 0, 0.75)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 2,
                  elevation: 4,
                  borderWidth: 1,
                },
              ]}
            >
              folgen
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: color.light,
                borderRadius: 20,
                justifyContent: "center",
                shadowColor: "rgba(0, 0, 0, 0.75)",
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 2,
                elevation: 1,
                borderWidth: 1,
              }}
            >
              <Text
                style={[
                  globalStyles.textMedium,
                  {
                    fontSize: 14,
                    color: color.dark,
                    textAlign: "center",
                  },
                ]}
              >
                schaf
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
            width: "70%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={[
                globalStyles.textMedium,
                {
                  fontSize: 14,
                  color: color.dark,
                  backgroundColor: color.light,
                  justifyContent: "center",
                  textAlign: "center",
                  textAlignVertical: "center",
                  width: 100,
                  height: 50,
                  borderRadius: 20,
                  shadowColor: "rgba(0, 0, 0, 0.75)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 2,
                  elevation: 4,
                  borderWidth: 1,
                },
              ]}
            >
              Bereiden
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 100,
                height: 50,
                backgroundColor: color.light,
                borderRadius: 20,
                justifyContent: "center",
                shadowColor: "rgba(0, 0, 0, 0.75)",
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 2,
                elevation: 1,
                borderWidth: 1,
              }}
            >
              <Text
                style={[
                  globalStyles.textMedium,
                  {
                    fontSize: 14,
                    color: color.dark,
                    textAlign: "center",
                  },
                ]}
              >
                Haus
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "flex-end",
          }}
        >
          <BtnLg text="CONTINUE" backgroundColor="rgba(255,255,255, 0.3)" />
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    // alignItems: "center",
    // justifyContent: "center",
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
});
