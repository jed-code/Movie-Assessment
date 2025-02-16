import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from '~/components/Container';
import MoviePoster from '~/components/MoviePoster';
import ActorItem from '~/components/ActorItem';
import ReviewSummary from '~/components/ReviewSummary';
import KeywordsItem from '~/components/KeywordsItem';

const MovieDetails = () => {
  const { movieDetails } = useSelector((state: any) => state.movies);

  return (
    <Container>
      <View className="w-full flex-1">
        <MoviePoster movieDetails={movieDetails} />
        <View className="w-full px-4 pt-4">
          <Text className="text-main text-bold text-2xl">{movieDetails?.short?.name}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'center', padding: 15 }}
          className="w-full flex-1 pb-20">
          <View className="w-full">
            <Text className="w-full text-wrap text-justify text-base font-semibold text-secondary ">
              {movieDetails?.short?.description}
            </Text>
            <Text className="text-main mt-2 w-full text-wrap py-2 text-2xl font-semibold">
              Actors
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: 15 }}>
              {movieDetails?.short?.actor?.map((item: any, i: any) => {
                return <ActorItem actor={item} index={i} key={i} />;
              })}
            </ScrollView>

            {movieDetails?.short?.review?.reviewBody && (
              <View className="w-full">
                <Text className="text-main text-2xl">Reviews</Text>
                <ReviewSummary
                  reviewBody={movieDetails?.short?.review?.reviewBody}
                  reviewRating={movieDetails?.short?.review?.reviewRating}
                />
              </View>
            )}

            <View className="w-full">
              <Text className="text-main text-2xl">Keywords</Text>
              <KeywordsItem keywords={movieDetails?.short?.keywords} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default MovieDetails;
