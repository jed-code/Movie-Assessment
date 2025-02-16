import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useAppDispatch } from '../src/Lib/hooks/useDispatch';
import { resetMovieDetails } from '../src/Redux/Slices/movieSlice';
import AntDesign from '@expo/vector-icons/AntDesign';

interface moviePosterProps {
  movieDetails: any;
}
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const MoviePoster: React.FC<moviePosterProps> = ({ movieDetails }) => {
  let dispatch = useAppDispatch();
  const handleGoBack = async () => {
    await dispatch(resetMovieDetails());
    router.back();
  };
  return (
    <View className="relative h-72 w-full">
      <TouchableOpacity
        onPress={() => {
          handleGoBack();
        }}
        className="bg-main absolute left-4 top-8 z-50 h-10 w-10 flex-row items-center justify-center rounded-full">
        <AntDesign name="left" size={18} color="white" />
      </TouchableOpacity>
      <Image
        source={`https://imdb.iamidiotareyoutoo.com/photo/${movieDetails?.imdbId}`}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MoviePoster;
