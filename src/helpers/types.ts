export type ParamsType = {
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

type VideoType = {
  id: string;
  kind: string;
  title: string;
  publishedAt: string;
  description: string;
  channelTitle: string;
};

export type VideosState = {
  videos: VideoType[];
};
