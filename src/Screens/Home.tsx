import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { getMovieById } from '../Redux/Slices/movieSlice';
import { useAppDispatch } from '../Lib/hooks/useDispatch';
import { useAppSelector } from '../Lib/hooks/useAppSelector';
import { searchMovieByName } from '../Redux/Slices/movieSlice';
import { Container } from '~/components/Container';
import SearchInput from '~/components/SearchInput';

const Home = () => {
  let dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { searchedMovies, status, error } = useAppSelector((state: any) => state.movies);

  if (searchValue) {
    console.log('Show search result');
  } else {
    console.log('Dont show search result');
  }

  return (
    <Container>
      <View className="p-5">
        <View className="mt-3 w-full">
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchMovieByName={searchMovieByName}
          />
        </View>
        <View className="mt-3">
          <Text className="text-white">Home</Text>
        </View>
      </View>
    </Container>
  );
};

export default Home;
