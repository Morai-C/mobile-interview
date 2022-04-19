import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import color from "./color";

type Props = {
  text: string;
  onPress?: () => void;
  customStyle?: any;
  textStyle?: any;
  isChecked?: boolean;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
};

const { width, height } = Dimensions.get("window");

export const BtnLg: React.FC<Props> = ({
  text,
  backgroundColor,
  borderColor,
  customStyle,
  textStyle,
  color,
  onPress,
  borderWidth,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        customStyle,
        { borderColor, backgroundColor, borderWidth },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingHorizontal: 41,
    paddingVertical: 14,
    borderRadius: 30,
    width: width * 0.85,
  },
  btnText: {
    color: color.light,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
});
