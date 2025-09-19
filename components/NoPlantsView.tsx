import { COLORS } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type AddPlantCardProps = {
  title: string;
  onPress?: () => void;
};

const AddPlantCard = ({ title, onPress }: AddPlantCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-11/12 self-center mt-5 rounded-2xl p-6 items-center"
      style={{
        borderWidth: 3,
        borderColor: COLORS.gray400,
        borderStyle: "dashed",
      }}
    >
      <View className="mb-4">
        <FontAwesome name="leaf" size={32} color={COLORS.gray500} />
      </View>

      <Text className="text-lg font-semibold text-gray-500">{title}</Text>
    </TouchableOpacity>
  );
};

export default AddPlantCard;
