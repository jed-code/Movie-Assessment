export const formatData = (apiData: any) => {
  if (apiData?.length > 0) {
    const data = apiData?.map((item: any) => ({
      TITLE: item['#TITLE'],
      YEAR: item['#YEAR'],
      IMDB_ID: item['#IMDB_ID'],
      RANK: item['#RANK'],
      ACTORS: item['#ACTORS'],
      IMDB_URL: item['#IMDB_URL'],
      AKA: item['#AKA'],
      IMDB_IV: item['#IMDB_IV'],
      IMG_POSTER: item['#IMG_POSTER'],
      photo_width: item['photo_width'],
      photo_height: item['photo_height'],
    }));
    return data;
  } else {
    return [];
  }
};
