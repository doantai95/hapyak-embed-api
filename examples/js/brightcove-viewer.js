window.BCL = (function() {
    var brightcovePlayer,
        player,
        APIModules;

    return {
        onTemplateLoad: function(experienceID) {
            brightcovePlayer = brightcove.api.getExperience( experienceID );
            APIModules = brightcove.api.modules.APIModules;
        },
        onTemplateReady: function() {
            player = brightcovePlayer.getModule( APIModules.VIDEO_PLAYER );

            hapyak.viewer({
                gzip: true,
                environment: 'feature',
                player: player,
                videoType: 'brightcove',
                trackId: DemoUtils.getParameterByName('trackid') || 2652,
                autoplay: false
            });
        }
    };
})();
