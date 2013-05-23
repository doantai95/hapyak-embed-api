(function() {
    var hapyakEditor = hapyak.editor({
        elementId: 'hapyak-editor',
        apiKey: '0ea6010d29d04ddea02cc5aba95b6c36',
        userId: 'group',
        groupId: 'group',
        environment: 'feature',
        width: 560,
        videoId: 607560,
        trackId: 2652,
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
