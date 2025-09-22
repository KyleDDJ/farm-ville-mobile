import { defaultBackground } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

type EarningsSummaryProps = {
  userName?: string;
  earnings?: string;
  greeting?: string;
};

const EarningsSummary: React.FC<EarningsSummaryProps> = ({
  userName = "Kyle D.",
  earnings = "$10",
  greeting = "Hello!",
}) => {
  return (
    <View
      className="flex-row justify-between items-center px-4 py-5 rounded-b-3xl"
      style={{ backgroundColor: defaultBackground }}
    >
      <View>
        <Text className="text-sm text-white mb-1">{greeting}</Text>
        <Text className="text-lg font-semibold text-white">{userName}</Text>
      </View>

      <View className="items-end">
        <Text className="text-sm text-white mb-1">Earnings:</Text>
        <Text className="text-2xl font-bold text-white">{earnings}</Text>
      </View>
    </View>
  );
};

export default EarningsSummary;
