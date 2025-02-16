import { View, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface actorProps {
  actor: any;
  index: any;
}

const ActorItem: React.FC<actorProps> = ({ actor, index }) => {
  return (
    <View className="mt-2 h-36 w-36" key={index}>
      <View className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-secondary">
        <FontAwesome6 name="user-large" size={24} color="#6B6B6B" />
      </View>
      <View className="mt-2">
        <Text className="text-wrap text-xs font-semibold text-secondary">{actor.name}</Text>
      </View>
    </View>
  );
};

export default ActorItem;
