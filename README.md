# HapYak Javascript Embed API

## Viewer API

### Example 

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
### Options

**player**

Reference to the player DOM node, Javascript object, Flash file. 
HapYak will attempt to auto discover the type of the video from this parameter.

**playerType**

Gives HapYak a hint as to what type of **player** was passed in.

  

## Editor API

### Example 

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
### Options

  

## Demos

* http://hapyak.github.com/hapyak-embed-api/examples/youtube-viewer.html
