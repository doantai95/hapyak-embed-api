(function() {
    var player = Wistia.embed( "8b5zb0lvxs", {
        "platformPreference": "flash",
        "container": "video"
    });

    player.ready(function() {
        hapyak.viewer({
            gzip: true,
            player: player,
            width: 560,
            height: 315,
            videoType: "wistia",
            trackId: 2101,
            autoplay: false
        });
    });
})();
