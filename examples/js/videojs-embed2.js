(function() {
    var hapyakEditor = hapyak.editor({
        elementId: 'hapyak-editor',
        environment: 'feature',
        width: 640,
        videoType: 'html5',
        videoUrl: 'http://mirrorblender.top-ix.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg',
        playerType: 'videojs',
        trackId: 2701,
        playerParameters: {
            version: 4
        },
        onLoadTrack: function (p) {
            console.log('hapyak.editor.onLoadTrack reported to parent page [' + p.videoId + ', ' + p.trackId + ']');
        },
        onLoadCurrentUser: function (p) {
            console.log('hapyak.editor.onLoadCurrentUser reported to parent page [' + p.userId + ', ' + p.username + ']');
        },
        onNewTrack: function (trackId) {
            console.log('hapyak.editor.onNewTrack reported to parent page [' + trackId + ']');
        },
        onSave: function (trackId) {
            console.log('hapyak.editor.onSave reported to parent page [' + trackId + ']');
        },
        onLoad: function () {
            console.log('hapyak.editor.onLoad reported to parent page');
        }
    });
})();
