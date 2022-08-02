import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(id,title,description)
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

// console.log(restaurants)
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {restaurants?.map((restaurant) => (
          <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          address={restaurant.addreess}
          title={restaurant.name}
          dishes={restaurant.dishes}
          rating={restaurant.rating}
          short_description={restaurant.short_description}
          genre={restaurant.type?.name}
          long={restaurant.long}
          lat={restaurant.lat}
        />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
