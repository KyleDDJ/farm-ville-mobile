import { COLORS } from "@/constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type AddCardProps = {
  title: string;
  onPress?: () => void;
  borderColor?: string;
  borderStyle?: "solid" | "dashed";
};

const AddCard = ({
  title,
  onPress,
  borderColor = COLORS.leafygreen1,
  borderStyle = "dashed",
}: AddCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-11/12 self-center mt-5 rounded-2xl p-6 items-center"
      style={{
        borderWidth: 3,
        borderColor,
        borderStyle,
      }}
    >
      <View className="mb-4">
        <FontAwesome5 name="leaf" size={32} color={COLORS.leafygreen1} />
      </View>

      <Text
        className="text-lg font-semibold"
        style={{ color: COLORS.leafygreen1 }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AddCard;
