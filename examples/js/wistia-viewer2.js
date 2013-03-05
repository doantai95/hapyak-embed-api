(function() {
    var player2 = Wistia.embed( "8b5zb0lvxs", {
        "platformPreference": "html5",
        "container": "video2",
        "plugin": {
            "hapyak": {
                "src": "http://cdn-assets.hapyak.com/js/hapyak.gz.js"
            }
        }
    });

    Wistia.plugin( "hapyak", function( video, options ) {
        hapyak.viewer({
            gzip: true,
            player: player2,
            width: 560,
            height: 315,
            videoType: "wistia",
            trackId: 2101,
            autoplay: false
        });
    });
})();
