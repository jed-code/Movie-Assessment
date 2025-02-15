import { View, TouchableOpacity, TextInput } from 'react-native';
import { useAppDispatch } from '../src/Lib/hooks/useDispatch';
import { Ionicons } from '@expo/vector-icons';

interface searchPros {
  searchValue: string;
  setSearchValue: any;
  searchMovieByName: any;
}
const SearchInput: React.FC<searchPros> = ({ searchMovieByName, searchValue, setSearchValue }) => {
  let dispatch = useAppDispatch();

  const handleSearch = async () => {
    if (searchValue) {
      let nameOrKey = searchValue.trim();
      await dispatch(searchMovieByName(nameOrKey));
    } else {
      setSearchValue('');
    }
  };

  return (
    <View className="bg-bgLight flex-row items-center rounded-full  px-4 py-1">
      <TextInput
        className="flex-1 text-base text-white"
        placeholder="Search Movie..."
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={handleSearch}
        placeholderTextColor="#A7A5A5"
        returnKeyType="search"
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
