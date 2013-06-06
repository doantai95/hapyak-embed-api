(function() {
    var vjs = videojs('video');
    vjs.ready(function() {
        hapyak.viewer({
            gzip: true,
            environment: 'feature',
            player: vjs,
            videoType: "videojs",
            trackId: 648,
            autoplay: false
        });
    });
})();
