# HapYak Javascript Embed API

Include the following javascript reference in your project.

```html
<script src="http://assets.hapyak.com/js/hapyak.gz.js"></script>
```

## Viewer API

The HapYak annotation viewer supports viewing annotations for an existing video
element on a page. The existing video javascript object, iframe, html element, etc
is passed into the viewer API method call.

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

**apiKey**

If you have a HapYak API key, pass it in via this parameter.

**player**

Reference to the player DOM node, Javascript object, Flash file. 

**playerType**

Tells HapYak what sort of **player** was passed in. Valid values are "videojs", "youtube", "vimeo", "html5"

**playerWidth (optional)**

Tells HapYak the width of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**playerHeight (optional)**

Tells HapYak the height of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**trackId**

The ID of the HapYak commentary track to load. A HapYak "track" is the container
for popup, drawing, audio, etc, commentary.

**autoplay**

If set to true, the video with commentary will start to play once the video is loaded, and the track
has been downloaded from hapyak.com.


  

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

**elementId**

The ID of the element to drop the HapYak editor iframe into.

## Demos

* http://hapyak.github.com/hapyak-embed-api/examples/youtube-viewer.html
