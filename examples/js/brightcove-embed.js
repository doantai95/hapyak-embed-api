(function() {
    var hapyakEditor = hapyak.editor({
        elementId: 'hapyak-editor',
        environment: 'staging',
        width: 560,
        videoType: 'brightcove',
        videoId: '2379199626001',
        trackId: 3253,
        videoParameters: {
            bcpid: '2338078137001'
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
