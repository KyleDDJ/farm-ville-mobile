import { COLORS, defaultCardBackground } from "@/constants/Colors";
import { Seeds } from "@/entities/seeds.entities";
import * as Icons from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";

type SeedDashboardProps = {
  seed: Seeds;
};

const SeedDashboard: React.FC<SeedDashboardProps> = ({ seed }) => {
  return (
    <View className="mb-4">
      <View
        className="flex-row justify-between items-center rounded-2xl p-6"
        style={{
          backgroundColor: defaultCardBackground,
          minHeight: 120,
        }}
      >
        <View className="flex-1">
          <Text className="text-xl font-bold text-gray-800 mb-2">
            {seed.title}
          </Text>
          <Text className="text-gray-600 mb-3 text-base">
            Harvest in: <Text className="font-mono text-base">00:04:20</Text>
          </Text>
          <Progress.Bar
            progress={0.3}
            width={250}
            height={12}
            color={COLORS.leafygreen}
            borderRadius={6}
          />
        </View>

        <TouchableOpacity
          className="ml-3 rounded-lg p-3"
          style={{ backgroundColor: COLORS.leafygreen }}
          onPress={() => console.log("Remove seed", seed.id)}
        >
          <Icons.Feather name="x" size={22} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeedDashboard;
