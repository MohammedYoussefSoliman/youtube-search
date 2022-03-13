type ParamsType = {
  part: "snippet";
  order:
    | "searchSortUnspecified"
    | "date"
    | "rating"
    | "viewCount"
    | "relevance"
    | "title"
    | "videoCount";
  type: "channel" | "playlist" | "video";
  q: string;
};

export default ParamsType;
