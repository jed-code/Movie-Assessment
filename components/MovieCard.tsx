import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useAppDispatch } from '../src/Lib/hooks/useDispatch';
import { getMovieById } from '../src/Redux/Slices/movieSlice';

interface movieCardProps {
  movie: any;
}
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const MovieCard: React.FC<movieCardProps> = ({ movie }) => {
  let dispatch = useAppDispatch();
  const handleMovieDetails = async (id: string) => {
    await dispatch(getMovieById(id));
    router.push(`/movieDetails`);
  };
  return (
    <TouchableOpacity
      onPress={() => handleMovieDetails(movie.IMBD_ID)}
      className="mx-auto mb-4 h-[252px] w-[170px]">
      <Image
        style={styles.image}
        source={movie?.IMG_POSTER}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: '#46404C',
    borderRadius: 20,
  },
});

export default MovieCard;
