# HapYak API

## Javascript API

### Viewer API
```javascript
hapyak.viewer({
    player: vjs,
    playerType: "videojs",
    playerWidth: 640,
    playerHeight: 360,
    trackId: ,
    autoplay: true
});
```

### Editor API

```javascript
hapyak.editor({
    // rootUrl: 'http://dev.hapyak.com',
	elementId: 'hapyak-editor-test',
	playerWidth: 560,
	videoSource: 'html5',
	videoSourceId: 'http://cloudfront.net/videos/video.mp4',
	onNewTrack: function (trackId) {
		console.log('hapyak.editor.onNewTrack reported to parent page [' + trackId + ']');
	},
	onSave: function (trackId) {
		console.log('hapyak.editor.onSave reported to parent page [' + trackId + ']');
	}
});
```
