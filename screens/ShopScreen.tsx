import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EarningsSummary from "@/components/EarningsSummary";
import SeedCard from "@/components/SeedCard";
import { COLORS, defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";

const ShopScreen = () => {
  const [selectedSeed, setSelectedSeed] = useState(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["35%"], []);

  const handlePress = (seed: any) => {
    setSelectedSeed(seed);
    bottomSheetModalRef.current?.present();
  };

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: defaultBackground }}
      edges={["top", "bottom"]}
    >
      <EarningsSummary />

      <ScrollView className="p-4">
        {SEEDS.map(seed => (
          <TouchableOpacity
            key={seed.id}
            activeOpacity={0.7}
            onPress={() => handlePress(seed)}
          >
            <SeedCard seed={seed} variant="shop" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: COLORS.leafygreen2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        handleIndicatorStyle={{
          backgroundColor: COLORS.leafygreen1,
        }}
      >
        <BottomSheetView className="flex-1 px-5 py-2.5">
          <Text className="text-center text-xl font-bold text-white">
            Buying Carrot?
          </Text>

          <View className="mb-4">
            <Text className="text-lg font-semibold text-white mb-2">
              Amount:
            </Text>
            <TextInput
              className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-lg"
              keyboardType="numeric"
              placeholder="1"
              style={{ color: COLORS.black }}
            />
          </View>

          <View className="mb-6">
            <Text className="text-lg font-semibold text-white">Cost:</Text>
            <Text className="text-2xl font-bold text-white">$5.00</Text>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 bg-gray-500 rounded-lg py-3"
              onPress={handleClose}
            >
              <Text className="text-center text-white text-lg font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 rounded-lg py-3"
              style={{ backgroundColor: COLORS.leafygreen1 }}
              onPress={() => console.log("Pressed buy")}
            >
              <Text className="text-center text-white text-lg font-semibold">
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default ShopScreen;
