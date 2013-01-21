# HapYak Javascript Embed API

Include the following javascript reference in your project.

```html
<script src="http://cdn-assets.hapyak.com/js/hapyak.gz.js"></script>
```

## Global Options

**apiKey**

If you have a HapYak API key, pass it in to each API call with this parameter.


## Viewer API

The HapYak annotation viewer supports viewing annotations for an existing video
element on a page. The existing video javascript object, iframe, html element, etc
is passed into the viewer API method call.

### Example 

```javascript
ytPlayer = new YT.Player('video', {
  height: '390',
  width: '640',
  videoId: 'u1zgFlCw8Aw',
  playerVars: {
    html: 1,
    wmode: 'opaque'
  }
});

hapyak.viewer({
    player: ytPlayer,
    playerType: "youtube",
    width: 640,
    height: 360,
    trackId: 640,
    autoplay: true
});
```


### Options

**player**

Reference to the player DOM node, Javascript object, Flash file. 

**playerType**

Tells HapYak what sort of **player** was passed in. Valid values are "videojs", "youtube", "vimeo", "html5", "jplayer"

**width (optional)**

Tells HapYak the width of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**height (optional)**

Tells HapYak the height of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**trackId**

The ID of the HapYak commentary track to load. A HapYak "track" is the container
for popup, drawing, audio, etc, commentary.

**autoplay (optional)**

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
	width: 560,
	videoType: 'html5',
	videoUrl: 'http://cloudfront.net/videos/video.mp4',
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

**width (optional)**

The width of the IFRAME editor element to create.

**videoType**

The type of video to load. Valid values can be "youtube", "vimeo", "html5", "jplayer"

**videoId**

The ID of the video to load. If **videoType** is set to "youtube" for example,
this parameter would be the YouTube video id.

**videoUrl**

The URL of the video to load. If **videoType** is set to "html5", this would be
the URL to the video.

**save (optional)**

Tells the editor to commit the changes the user has made.

**onSave (optional)**

When a save successfully finishes, this callback is called.

**onNewTrack (optional)**

If a new track is created by the editor, this callback will be passed the new trackId.
This allows you to store this trackId and use it with **.viewer** API calls.

### Advanced Options

**userId (optional, requires api key)**

When using an api key, you can optionally pass in a userId. The userId should be some
string identifier for one of your end users.

**groupId (optional, requires api key)**

When using an api key, you can optionally pass in a groupId. The groupId should
represent some subgroup of your end users.

## Definitions

**video**

A reference to the video to be annotated. It might reference a YouTube video, an html5 video,
or a video behind a partners firewall. Tracks are attached to the video object. Any one video
may have any number of tracks attached.

**track**

A HapYak track is the container that holds a set of video annotations. A track also
may contain metadata about the annotation content such as language data,
security restrictions, and basic statistics about the annotations.

**annotation**

An annotation is a single drawing, popup comment, image, etc, added to a video track.
It has the annotation data, as well as video time synchronization information.


## FAQ

**Do you host and serve videos?**

No, we integrate with your existing solutions or partner to provide a complete solution as needed.

**Will this work behind a ﬁrewall?**

As long as the ﬁrewall can allow access to our HTTPS cloud service, yes.

**How can I customize the look and feel of the player and annotations?**

All styles can be controlled via CSS giving you absolute power over styling.

**Does this work on mobile?**

Annotations will work in any browser that allows HTML to be overlaid on video. iPads and other tablets are able to view and create
annotations using our solution. Android phones are generally compliant with our system, however iPhones do not allow HTML to be overlaid
on video.

## Demos

* [YouTube viewer demo](http://hapyak.github.com/hapyak-embed-api/examples/youtube-viewer.html)
* [jPlayer viewer demo](http://hapyak.github.com/hapyak-embed-api/examples/jplayer-viewer.html)
