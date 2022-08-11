export const state = () => ({
    videoInfo: "",
});

export const getters = {
    getThumbnails: state => state.videoInfo.thumbnails,
    getTitleVideo: state => state.videoInfo.title,
    getVideoDuration: state => Number(state.videoInfo.duration) * 1000,
    getDownloadLink: state => state.videoInfo.link,
};

export const mutations = {
    setVideoInfo(state, videoInfo) {
        state.videoInfo = videoInfo;
    }
};

export const actions = {};
