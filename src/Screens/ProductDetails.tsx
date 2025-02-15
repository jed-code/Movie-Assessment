import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { movieDetails, status, error } = useSelector((state: any) => state.movies);

  console.log('searchedMovies', JSON.stringify(movieDetails, null, 2));

  return (
    <View className="w-full flex-1 flex-row items-center justify-center bg-primary">
      <Text className="text-secondary">Product Details</Text>
    </View>
  );
};

export default ProductDetails;
