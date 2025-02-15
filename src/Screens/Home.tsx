import React from 'react';
import { View, Text } from 'react-native';
import { getMovieById } from '../Redux/Slices/movieSlice';
import { useAppDispatch } from '../Lib/hooks/useDispatch';
import { useAppSelector } from '../Lib/hooks/useAppSelector';
import { searchMovieByName } from '../Redux/Slices/movieSlice';

const Home = () => {
  let dispatch = useAppDispatch();

  const { searchedMovies, status, error } = useAppSelector((state: any) => state.movies);

  let selectMovie = () => {
    let id = '1234';
    dispatch(getMovieById(id));
  };

  // dispatch(searchMovieByName("iron man"));

  console.log('status', status);
  console.log('searchedMovies', JSON.stringify(searchedMovies, null, 2));
  console.log('error', error);
  return (
    <View className="w-full flex-1 flex-row items-center justify-center bg-primary">
      <Text className="text-secondary">Home</Text>
    </View>
  );
};

export default Home;
