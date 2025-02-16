import { View, Text } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';

interface ReviewSummaryProps {
  reviewBody: any;
  reviewRating: any;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({ reviewBody, reviewRating }) => {
  return (
    <View className="bg-darkColor mx-auto mb-4 mt-2 w-full rounded-lg p-3">
      <Text numberOfLines={4} className="text-base text-secondary">
        {reviewBody}
      </Text>
      <View className="h-10 w-full flex-row items-center gap-2">
        {reviewRating?.bestRating && (
          <View className="mx-2 flex-row items-center gap-2">
            <Foundation name="like" size={24} color="#4750FC" />
            <Text className="text-main font-semibold">{reviewRating?.bestRating}</Text>
          </View>
        )}
        {reviewRating?.worstRating && (
          <View className="mx-2 flex-row  items-center gap-2">
            <Foundation name="dislike" size={24} color="#6B6B6B" />
            <Text className="font-semibold text-secondary">{reviewRating?.worstRating}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReviewSummary;
