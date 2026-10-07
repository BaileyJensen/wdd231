import { videos } from "../data/videos.mjs";

const sortByViews = (videos) => {
    videos.sort((a, b) => b.views - a.views);
};

const sortByLikes = (video) => {
    videos.sort((a, b) => b.likes - a.likes);
};

export { sortByViews, sortByLikes };