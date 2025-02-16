import { FlashList } from '@shopify/flash-list';
import MovieCard from './MovieCard';

interface moviesProps {
  movies: any;
}
const movieList: React.FC<moviesProps> = ({ movies }) => {
  return (
    <FlashList
      data={movies}
      numColumns={2}
      renderItem={({ item }: any) => <MovieCard movie={item} />}
      estimatedItemSize={150}
      contentContainerStyle={{ paddingBottom: 135 }}
    />
  );
};
export default movieList;
