(function() {
    var vjs = VideoJS('video');
    vjs.ready(function() {
        hapyak.viewer({
            gzip: true,
            player: vjs,
            videoType: "videojs",
            trackId: 2701,
            autoplay: false
        });
    });
})();
