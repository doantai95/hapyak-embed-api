window.onYouTubeIframeAPIReady = function () {
    var ytPlayer = new YT.Player('video', {
        height: '390',
        width: '640',
        videoId: 'u1zgFlCw8Aw',
        playerVars: {
            html: 1,
        wmode: 'opaque'
        }
    });

    // HapYak Viewer
    hapyak.viewer({
        gzip: true,
        player: ytPlayer,
        playerType: "youtube",
        width: 640,
        height: 360,
        trackId: 1068,
        autoplay: true
    });
};
