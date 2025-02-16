import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import MovieCard from './MovieCard';

interface moviesProps {
  movies: any;
}
const movieList: React.FC<moviesProps> = ({ movies }) => {
  return (
    <View className="W-full h-full">
      <FlashList
        data={movies}
        numColumns={2}
        renderItem={({ item }: any) => <MovieCard movie={item} />}
        estimatedItemSize={150}
        contentContainerStyle={{ paddingBottom: 135 }}
      />
    </View>
  );
};
export default movieList;
