import { defaultCardBackground, defaultTextColor } from "@/constants/Colors";
import { Seeds } from "@/entities/seeds.entities";
import React from "react";
import { Image, Text, View } from "react-native";

type SeedCardProps = {
  seed: Seeds;
  variant?: "shop" | "seeds";
};

const SeedCard = ({ seed, variant = "seeds" }: SeedCardProps) => {
  const seedImages: Record<string, any> = {
    Carrot: require("@/assets/seeds/carrot.png"),
    Potato: require("@/assets/seeds/potato.png"),
    Cabbage: require("@/assets/seeds/cabbage.png"),
  };

  const imageSource = seedImages[seed.title] || null;

  return (
    <View
      className="flex-row p-4 rounded-xl mb-4"
      style={{ backgroundColor: defaultCardBackground }}
    >
      {imageSource && (
        <Image
          source={imageSource}
          resizeMode="contain"
          className="w-28 h-28 mr-4"
          style={seed.title !== "Carrot" ? { borderRadius: 12 } : undefined}
        />
      )}

      <View className="flex-1 justify-between">
        <Text className="text-lg font-semibold text-gray-800 mb-2">
          {seed.title}
        </Text>
        <Text className=" mb-1" style={{ color: defaultTextColor }}>
          Harvest in {seed.estimated}
        </Text>

        {variant === "seeds" ? (
          <Text className=" mb-1" style={{ color: defaultTextColor }}>
            {seed.stock}
          </Text>
        ) : (
          <Text className="mb-1" style={{ color: defaultTextColor }}>
            Cost: {seed.cost}
          </Text>
        )}

        <Text className="text-lg font-bold" style={{ color: defaultTextColor }}>
          Profit: {seed.profit}
        </Text>
      </View>
    </View>
  );
};

export default SeedCard;
