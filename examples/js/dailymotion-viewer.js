(function() {
    var player = DM.player("player", {
        "video": "xvttqn",
        "width": 660,
        "height": 415,
        "params": {
            "info": 0,
        "related": 0
        }
    });

    hapyak.viewer({
        gzip: true,
        player: player,
        videoType: "dailymotion",
        trackId: 1627,
        autoplay: false
    });
})();
