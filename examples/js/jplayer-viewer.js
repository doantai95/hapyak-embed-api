(function() {
    var player,
        popcorn;

$( "#jquery_jplayer_1" ).jPlayer({
    "ready": function() {
        $( this ).jPlayer( "setMedia", {
            "webmv": "http://video.webmfiles.org/elephants-dream.webm"
        });
        hapyak.viewer({
            gzip: true,
            player: $( this ),
            videoType: "jplayer",
            width: 560,
            height: 315,
            trackId: 1068,
            autoplay: false
        });
    },
    "solution": "html, flash",
    "supplied": "webmv"
});
})();
