# HapYak Javascript Embed API

Include the following javascript reference in your project.

```html
<script src="http://assets.hapyak.com/js/hapyak.gz.js"></script>
```

## Global Options

**apiKey**

If you have a HapYak API key, pass it in to each API call in this parameter.


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

The HapYak annotation editor will drop an IFRAME based embedded editor into
the page, under the element passed in with elementId.

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

**playerWidth (optional)**

The width of the IFRAME editor element to create.

**videoSource**

The type of video to load. Valid values can be "youtube", "vimeo", "html5".

**videoSourceId**

The ID/URL of the video to load. If **videoSource** is set to "youtube" for example,
this parameter would be the YouTube video id. If set to "html5", this would be
the URL to the video.

**onNewTrack**

If a new track is created by the editor, this callback will be passed the new trackId.
This allows you to store this trackId and use it with **.viewer** API calls.

## Demos

* http://hapyak.github.com/hapyak-embed-api/examples/youtube-viewer.html
