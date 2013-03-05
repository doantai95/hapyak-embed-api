(function() {
    var hapyakEditor = hapyak.editor({
        elementId: 'hapyak-editor',
        width: 560,
        videoId: 356566,
        trackId: 1068,
        css: 'http://hapyak.github.com/hapyak-embed-api/examples/youtube-embed.css',
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
