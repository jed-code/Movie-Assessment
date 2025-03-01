import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '../Lib/hooks/useAppSelector';
import { searchMovieByName } from '../Redux/Slices/movieSlice';
import { Container } from '~/components/Container';
import SearchInput from '~/components/SearchInput';
import MovieList from '~/components/MovieList';
import { dummyMovies } from '~/data/dummyMovies';
import { formatData } from '../Lib/formatData';
import Loading from '../../components/Loading';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchedMovies, status, error } = useAppSelector((state: any) => state.movies);
  let newSearchData = formatData(searchedMovies);
  // console.log('newSearchData', JSON.stringify(newSearchData, null, 2));

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
        {status === 'loading' ? (
          <View className="h-full w-full flex-row items-center justify-center">
            <Loading />
          </View>
        ) : (
          <View className="mt-4 h-full w-full">
            {searchValue && <MovieList movies={newSearchData} />}
            {!searchValue && <MovieList movies={dummyMovies} />}
          </View>
        )}
      </View>
    </Container>
  );
};

export default Home;
