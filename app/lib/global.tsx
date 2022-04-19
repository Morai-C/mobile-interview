import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/Poppins";

export const globalStyles = StyleSheet.create({
  textSemiBold: {
    fontFamily: " Poppins_600SemiBold",
  },
  textMedium: {
    fontFamily: "Poppins_500Medium",
  },
  textRegular: {
    fontFamily: "Poppins_400Regular",
  },
  textLight: {
    fontFamily: "Poppins_300Light",
  },
});
