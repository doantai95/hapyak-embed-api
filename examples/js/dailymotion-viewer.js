(function() {
    var elem = document.createElement("video"),
        htmlMode = !!(elem.canPlayType && elem.canPlayType("video/mp4"),
        player;

    player = DM.player("player", {
        "video": "xvttqn",
        "width": 660,
        "height": 415,
        "params": {
            "info": 0,
            "related": 0,
            "html": htmlMode
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
