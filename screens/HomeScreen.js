import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-700 py-7">
        {/* Header */}
        <View className="flex-row pb-3 items-center  space-x-2 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <View className="px-32">
            <UserIcon size={35} color="#00CCBB" />
          </View>
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-1 space-x-3 bg-gray-200 p-3 rounded-lg">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Bienvenidos al restaurantes Deliver Now"
              keyboardType="default"
            />
          </View>

          <View className="px-8">
            <AdjustmentsIcon color="#00CCBB" />
          </View>
        </View>

        {/* Body */}
        <ScrollView>

        </ScrollView>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
