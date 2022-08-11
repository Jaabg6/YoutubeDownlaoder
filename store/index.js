var format = require("format-duration");

export const state = () => ({
    videoInfo: "",
    downloadLink: "",
});

export const getters = {
    getThumbnails: state => state.videoInfo.thumbnails,
    getTitleVideo: state => state.videoInfo.title,
    getVideoDuration: state => format(Number(state.videoInfo.duration) * 1000),
};

export const mutations = {
    setVideoInfo(state, videoInfo) {
        state.videoInfo = videoInfo;
    },
    setDownloadLink(state, downloadLink) {
        state.downloadLink = downloadLink;
    }

};

export const actions = {};
