import React, { memo } from 'react';
import { View, Text } from 'react-native';

interface keywordProps {
  keywords: string | null;
}

const KeywordsItem: React.FC<keywordProps> = ({ keywords }) => {
  const newkeywords = keywords?.trim()
    ? keywords
        .split(',')
        .map((word) => word.trim())
        .filter((word) => word.length > 0)
    : [];

  return (
    <View className="mt-4 flex-row flex-wrap gap-3">
      {newkeywords.map((keyword, index) => (
        <View key={index} className="rounded-2xl bg-bgLight px-2 py-1 ">
          <Text className="text-gray-400">{keyword}</Text>
        </View>
      ))}
    </View>
  );
};

export default memo(KeywordsItem);
