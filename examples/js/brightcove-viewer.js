window.BCL = (function() {
    var brightcovePlayer,
        player,
        APIModules,
        experience,
        videoModule;

    return {
        onTemplateLoad: function(experienceID) {
            APIModules = brightcove.api.modules.APIModules;
            brightcovePlayer = brightcove.api.getExperience( experienceID );
        },
        onTemplateReady: function() {
            player = brightcovePlayer.getModule( APIModules.VIDEO_PLAYER );

            hapyak.viewer({
                gzip: true,
                environment: 'staging',
                player: player,
                playerType: 'brightcove',
                trackId: 3253,
                autoplay: false
            });
        }
    };
})();
