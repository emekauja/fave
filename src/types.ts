export type CatType = {
  name: string;
  imageUrl: string;
};

export type ILikedCat = {
  cat: CatType;
  liked: boolean;
};
