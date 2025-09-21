import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SeedCard from "@/components/SeedCard";
import { COLORS, defaultBackground } from "@/constants/Colors";
import { SEEDS } from "@/constants/Seeds";

const ShopScreen = () => {
  const [selectedSeed, setSelectedSeed] = useState(null);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["30%"], []);

  const handlePress = (seed: any) => {
    setSelectedSeed(seed);
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("Bottom sheet index changed to:", index);
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: defaultBackground }}
      edges={["top", "bottom"]}
    >
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
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{
          backgroundColor: COLORS.leafygreen2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: COLORS.black,
        }}
        handleIndicatorStyle={{
          backgroundColor: COLORS.leafygreen1,
        }}
      >
        <BottomSheetView className="flex-1 px-5 py-2.5">
          <Text className="text-center text-gray-600 text-base mt-5">
            Buying Carrot
          </Text>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default ShopScreen;
