# HapYak Javascript Embed API

Include the following javascript reference in your project. If embedding
into an HTTP page, not HTTPS, use

```html
<script src="http://cdn-assets.hapyak.com/js/hapyak.gz.js"></script>
```

If embedding into an HTTPS enabled page, use.

```html
<script src="https://d2qrdklrsxowl2.cloudfront.net/js/hapyak.gz.js"></script>
```



## Global Options

**apiKey**

If you have a HapYak API key, pass it in to each API call with this parameter. HapYak typically issues
a read API key, and a write API key. The read key should be passed to .viewer, and the write key to .editor.


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
    apiKey: readKey,
    player: ytPlayer,
    playerType: "youtube",
    css: "http://modernizr.com/i/css/modernizr-2.1.1.css?v=1",
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

Tells HapYak what sort of _player_ was passed in. Valid values are "videojs", "youtube", "vimeo", "html5", "jplayer", "wistia", "dailymotion", "brightcove"

**width (optional)**

Tells HapYak the width of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**height (optional)**

Tells HapYak the height of the player object. Optional, but the viewer may not always be
able to figure out the right sizing.

**css (optional)**

The location of a CSS file to load.

**trackId**

The ID of the HapYak commentary track to load. A HapYak "track" is the container
for popup, drawing, audio, etc, commentary.

**autoplay (optional)**

If set to true, the video with commentary will start to play once the video is loaded, and the track
has been downloaded from hapyak.com.

**minWidth (optional)**

Minimum width of player in pixels to show annotations. If the player width is below this value, all annotatinos will be hidden.  Optional, defaults to 300px.

**minHeight (optional)**

Minimum height of player in pixels to show annotations. If the player height is below this value, all annotatinos will be hidden.  Optional, defaults to 200px.

**onLoad (optional)**

A function to be called when the viewer has loaded. Will be passed one argument, a `HapyakViewer` object (see below).

**onLoadAnnotations (optional)**

A function to be called when all annotations have been loaded.

**resetVariables (optional)**

If set to true, all track variables set by quizzes, clicks or iframe scripts will be cleared before loading.

### Advanced Options

**userId (optional, requires api key)**

When using an api key, you can optionally pass in a userId. The userId should be some
string identifier for the user currently viewing the video.

**groupId (optional, requires api key)**

When using an api key, you can optionally pass in a groupId. The groupId should
represent some subgroup of your end users.

**environment (optional, for debugging)**

Valid values are "production", "staging" or "feature". Only used when attempting to test against a specific environment.

```javascript
hapyak.viewer({
    environment: 'production'
});
```


### Event callbacks

The viewer API triggers a number of event callbacks related to both video and data. An event callback may be registered by passing the event name to `addEventListener` (see below) or including the event callback as an option, with the name of the event preceeded by `on` as the key.

For example, the `play` event, which fires whenever the video starts playing may be registered as an option:

    hapyak.viewer({
        /* ...other options here... */
        onplay: function() {
            console.log('video started playing');
        }
    });

Another way to accomplish the same thing:

    hapyak.viewer({
        /* ...other options here... */
        onload: function(viewer) {
            viewer.addEventListener('play', function () {
                console.log('video started playing');
            });
        }
    });

The advantages of using `addEventListener` are that multiple callback functions can be registered and that a listener can be removed with the `removeEventListener` method.

The following events are available:

**load**

The `load` event fires when the viewer has loaded. The callback function receives one argument, which is the `HapyakViewer` object. (This event cannot be registered on with `addEventListener`.)

**loadannotations**

This event fires when all annotations have been loaded

**durationchange**

This event fires when the duration of the video is available to the API.

**loadedmetadata**

This event fires when the dimensions (height and width) and duration of the video are available to the API.

**pause**

This event fires when the video pauses.

**play**

This event fires when the video plays.

**data**

This event fires every time a data variable is changed. The callback function receives two arguments: an object hash of all data variables, and an object hash of all data variables that have changed since the last time the event fired.

### HapyakViewer

A HapyakViewer object will be passed to the `onLoad` callback and supports the following methods and properties.

#### Methods ####

**getTrackId()**

Returns the id (an integer) of the currently loaded track.

**resize(width, height)**

Resizes the player to the desired `height` and `width`.

**play()**

Plays the video.

**pause()**

Pauses the video.

**resetVariables()**

Reset all track variables set by quizzes, clicks or iframe scripts.

**getData(name)**

Returns the value of the variable by `name`. If the method is called without any argument, it returns an object hash of all variable values.

**setData(name, value)**

Sets the value of the variable by `name`. If the second argument is omitted, the key value is cleared.

If the first argument is `null` or if there is one parameter that is an object, that object is used as a hash of multiple variable values to be set.

**destroy()**

Tells the editor to shutdown and cleanup.

#### Properties ####

**duration**

The duration in seconds of the video. This value will be `NaN` until the `onlaodedmetadata` event has fired. This property is read-only.

**currentTime**

The current time in the video of the play head, in seconds. This property can be set to cause the video to seek. If `currentTime` is set to a negative number or is greater than the `duration`, seeking will not happen.

**paused**

A boolean value indicating the play/pause state of the video. A video may not be playing even though `paused` is false if the video is stalled while loading from the network. This property is read-only.

### Custom CDN support

HapYak supports an optional configuration directive to turn on a custom CDN prefix for serving assets, or api
responses.

```javascript
hapyak.viewer({
    plugins: {
        cdn: {
            api: {
                prefix: [urlprefix]
            }
            assets: {
                prefix: [urlprefix]
            }
        }
    }
});
```

Complete details of the custom CDN support can be found at [this link](https://docs.google.com/document/d/1WVxaxQd1LzYpR-ew-Gd8qMIzJqAXD1vXEgzsGLRUffI/edit?usp=sharing).


## Editor API

The HapYak annotation editor will drop an IFRAME based embedded editor into
the page, under the element passed in with elementId.

### Example 

```javascript
var editor = hapyak.editor({
    apiKey: writeKey,
	elementId: 'hapyak-editor-test',
	width: 560,
	css: 'http://modernizr.com/i/css/modernizr-2.1.1.css?v=1',
	videoType: 'html5',
	videoUrl: 'http://cloudfront.net/videos/video.mp4',
	onNewTrack: function (trackId) {
		console.log('hapyak.editor.onNewTrack reported to parent page [' + trackId + ']');
	},
	onSave: function (trackId) {
		console.log('hapyak.editor.onSave reported to parent page [' + trackId + ']');
	}
});

editor.save(function() {
	console.log('saved');
})
```

### Options

**elementId**

The ID of the element to drop the HapYak editor iframe into.

**element**

The DOM element to drop the HapYak editor iframe into. This can be used instead
of passing _elementId_.

**width (optional)**

The width of the IFRAME editor element to create.

**css (optional)**

The location of a CSS file to load.

**videoType**

The type of video to load. Valid values can be "youtube", "vimeo", "html5", "jplayer", "wistia", "dailymotion"

**videoId**

The ID of the video to load. If _videoType_ is set to "youtube" for example,
this parameter would be the YouTube video id.

**videoUrl**

The URL of the video to load. If _videoType_ is set to "html5", this would be
the URL to the video.

**videoWidth (optional)**

The actual width of the video passed in. Used to compute aspect ratio.

**videoHeight (optional)**

The actual height of the video passed in. Used to compute aspect ratio.

**videoParameters**

Additional parameters passed through to the specific player based on videoType.

```javascript
hapyak.editor({
    videoType: 'brightcove',
    videoId: 'bctitleid'
    videoParameters: {
        bcpid: 'bcpid',
        bckey: 'bckey'
    }
});
```

**trackId (optional)**

The ID of the HapYak commentary track to edit. A HapYak "track" is the container
for popup, drawing, audio, etc, commentary. If you do not pass in a track id, a new
track will be created, and the onNewTrack callback is fired. Developers can then
save that track id to be passed in in the future.

**onSave (optional)**

When a save successfully finishes, this callback is called.

**onNewTrack (optional)**

If a new track is created by the editor, this callback will be passed the new trackId.
This allows you to store this trackId and use it with _.viewer_ API calls.

**resetVariables (optional)**

**getData(name)**

Returns the value of the variable by `name`. If the method is called without any argument, it returns an object hash of all variable values.

**setData(name, value)**

Sets the value of the variable by `name`. If the second argument is omitted, the key value is cleared.

If the first argument is `null` or if there is one parameter that is an object, that object is used as a hash of multiple variable values to be set.

If set to true, all track variables set by quizzes, clicks or iframe scripts will be cleared before loading.

Note that on `HapyakEditor`, this method is asynchronous, so values that are set will not be  reflected by `getData` until the `data` event is triggered.

### Advanced Options

**userId (optional, requires api key)**

When using an api key, you can optionally pass in a userId. The userId should be some
string identifier for the user currently editing the video.

**groupId (optional, requires api key)**

When using an api key, you can optionally pass in a groupId. The groupId should
represent some subgroup of your end users.

**minWidth (optional)**

Minimum width of player in pixels to show annotations. If the player width is below this value, all annotatinos will be hidden.  Optional, defaults to 300px.

**minHeight (optional)**

Minimum height of player in pixels to show annotations. If the player height is below this value, all annotatinos will be hidden.  Optional, defaults to 200px.

**onTrackingEvent (optional)**

Used to intercept playback statistics. Can be used, for example, to track playback statistics in MixPanel.

```javascript
hapyak.viewer({
    onTrackingEvent: function(data) {
        console.log('HapYak / ' + data.event, data.properties);
    }
});
```

There is a built in MixPanel tracking event function that will push the tracking events into your MixPanel instance.

```javascript
hapyak.viewer({
    onTrackingEvent: hapyak.mixpanelTrackingEventListener({mixpanel: window.mixpanel})
});
```

**environment (optional, for debugging)**

Valid values are "production", "staging" or "feature". Only used when attempting to test against a specific environment.

```javascript
hapyak.editor({
    environment: 'production'
});
```

### Event callbacks

The editor API triggers a number of event callbacks related to both video and data. An event callback may be registered by passing the event name to `addEventListener` (see below) or including the event callback as an option, with the name of the event preceeded by `on` as the key.

For example, the `play` event, which fires whenever the video starts playing may be registered as an option:

    hapyak.editor({
        /* ...other options here... */
        onplay: function() {
            console.log('video started playing');
        }
    });

Another way to accomplish the same thing:

    var editor = hapyak.editor({
        /* ...other options here... */
    });
    
    editor.addEventListener('play', function () {
        console.log('video started playing');
    });

The advantages of using `addEventListener` are that multiple callback functions can be registered and that a listener can be removed with the `removeEventListener` method.

The following events are available:

**load**

The `load` event fires when the editor has loaded. The callback function receives one argument, which is the `HapyakViewer` object. (This event cannot be registered on with `addEventListener`.)

**loadannotations**

This event fires when all annotations have been loaded

**durationchange**

This event fires when the duration of the video is available to the API.

**loadedmetadata**

This event fires when the dimensions (height and width) and duration of the video are available to the API.

**pause**

This event fires when the video pauses.

**play**

This event fires when the video plays.

**data**

This event fires every time a data variable is changed. The callback function receives two arguments: an object hash of all data variables, and an object hash of all data variables that have changed since the last time the event fired.

### HapyakEditor

hapyak.editor({}) will return a new editor object.

#### Methods ####

**save(callback)**

Tells the editor to commit the changes the user has made. Takes an optional callback
argument which will be passed the trackId that was saved.

**newTrack(callback)** (premium feature)

Creates a new track for the current video. Takes an optional callback
argument which will be passed the trackId that was saved.

**copyTrack(callback)** (premium feature)

Copies the current track. Takes an optional callback
argument which will be passed the trackId that was saved.

**editTrack(data, callback)** (premium feature)

Can be used to change the title or description of the current track. The `data` argument
is an object with properties `title` and `description`. Also takes an optional callback
argument which will be passed the trackId of the track that was modified.

**resize(width, height)**

Resizes the player to the desired `height` and `width`.

**play()**

Plays the video.

**pause()**

Pauses the video.

**resetVariables()**

Reset all track variables set by quizzes, clicks or iframe scripts.

**destroy()**

Tells the editor to shutdown and cleanup.

#### Properties ####

**duration**

The duration in seconds of the video. This value will be `NaN` until the `onlaodedmetadata` event has fired. This property is read-only.

**currentTime**

The current time in the video of the play head, in seconds. This property can be set to cause the video to seek. If `currentTime` is set to a negative number or is greater than the `duration`, seeking will not happen.

**paused**

A boolean value indicating the play/pause state of the video. A video may not be playing even though `paused` is false if the video is stalled while loading from the network. This property is read-only.

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

## Examples

* [Brightcove viewer example](http://hapyak.com/examples/brightcove-viewer.html)
* [Brightcove editor example](http://hapyak.com/examples/brightcove-embed.html)
* [Dailymotion viewer example](http://hapyak.com/examples/dailymotion-viewer.html)
* [Dailymotion editor example](http://hapyak.com/examples/jplayer-embed.html)
* [JPlayer viewer example](http://hapyak.com/examples/jplayer-viewer.html)
* [JPlayer editor example](http://hapyak.com/examples/jplayer-embed.html)
* [JWPlayer viewer example](http://hapyak.com/examples/jwplayer-viewer.html)
* [JWPlayer editor example](http://hapyak.com/examples/jwplayer-embed.html)
* [Kaltura viewer example](http://hapyak.com/examples/kaltura-viewer.html)
* [Kaltura editor example](http://hapyak.com/examples/kaltura-embed.html)
* [MediaElement viewer example](http://hapyak.com/examples/mediaelement-viewer.html)
* [MediaElement editor example](http://hapyak.com/examples/mediaelement-embed.html)
* [VideoJS viewer example](http://hapyak.com/examples/videojs-viewer.html)
* [VideoJS editor example](http://hapyak.com/examples/videojs-embed.html)
* [Wistia viewer example](http://hapyak.com/examples/wistia-viewer.html)
* [Wistia editor example](http://hapyak.com/examples/wistia-embed.html)
* [YouTube viewer example](http://hapyak.com/examples/youtube-viewer.html)
* [YouTube editor example](http://hapyak.com/examples/youtube-embed.html)
