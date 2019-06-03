!function(e,t,r){r.un,r.uns;var a=r.static,s=r.class,l=r.getset,i=(r.__newvec,laya.resource.Bitmap),c=laya.utils.Browser,o=(laya.events.Event,laya.events.EventDispatcher),d=(laya.utils.Handler,laya.layagl.LayaGL,laya.maths.Rectangle,laya.renders.Render),h=laya.display.Sprite,u=(laya.display.Stage,laya.resource.Texture),v=laya.utils.Utils,m=laya.webgl.WebGL,g=laya.webgl.WebGLContext,p=(function(){function i(){}s(i,"laya.device.geolocation.Geolocation"),i.getCurrentPosition=function(t,n){i.navigator.geolocation.getCurrentPosition(function(e){i.position.setPosition(e),t.runWith(i.position)},function(e){n.runWith(e)},{enableHighAccuracy:laya.device.geolocation.Geolocation.enableHighAccuracy,timeout:laya.device.geolocation.Geolocation.timeout,maximumAge:laya.device.geolocation.Geolocation.maximumAge})},i.watchPosition=function(t,n){return i.navigator.geolocation.watchPosition(function(e){i.position.setPosition(e),t.runWith(i.position)},function(e){n.runWith(e)},{enableHighAccuracy:i.enableHighAccuracy,timeout:i.timeout,maximumAge:i.maximumAge})},i.clearWatch=function(e){i.navigator.geolocation.clearWatch(e)},i.PERMISSION_DENIED=1,i.POSITION_UNAVAILABLE=2,i.TIMEOUT=3,i.enableHighAccuracy=!1,i.maximumAge=0,a(i,["navigator",function(){return this.navigator=c.window.navigator},"position",function(){return this.position=new n},"supported",function(){return this.supported=!!i.navigator.geolocation},"timeout",function(){return this.timeout=1e10}])}(),function(){function e(){this.x=NaN,this.y=NaN,this.z=NaN}return s(e,"laya.device.motion.AccelerationInfo"),e}()),n=function(){function e(){this.pos=null,this.coords=null}s(e,"laya.device.geolocation.GeolocationInfo");var t=e.prototype;return t.setPosition=function(e){this.pos=e,this.coords=e.coords},l(0,t,"heading",function(){return this.coords.heading}),l(0,t,"latitude",function(){return this.coords.latitude}),l(0,t,"altitudeAccuracy",function(){return this.coords.altitudeAccuracy}),l(0,t,"longitude",function(){return this.coords.longitude}),l(0,t,"altitude",function(){return this.coords.altitude}),l(0,t,"accuracy",function(){return this.coords.accuracy}),l(0,t,"speed",function(){return this.coords.speed}),l(0,t,"timestamp",function(){return this.pos.timestamp}),e}(),f=function(){function e(){}return s(e,"laya.device.media.Media"),e.supported=function(){return!!c.window.navigator.getUserMedia},e.getMedia=function(e,t,n){c.window.navigator.getUserMedia&&c.window.navigator.getUserMedia(e,function(e){t.runWith(c.window.URL.createObjectURL(e))},function(e){n.runWith(e)})},e.__init$=function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia},e}(),y=function(){function e(){this.absolute=!1,this.alpha=NaN,this.beta=NaN,this.gamma=NaN,this.compassAccuracy=NaN}return s(e,"laya.device.motion.RotationInfo"),e}(),E=function(o){function n(e){n.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}s(n,"laya.device.motion.Accelerator",o);var e=n.prototype;return e.on=function(e,t,n,i){return o.prototype.on.call(this,e,t,n,i),c.window.addEventListener("devicemotion",this.onDeviceOrientationChange),this},e.off=function(e,t,n,i){return void 0===i&&(i=!1),this.hasListener(e)||c.window.removeEventListener("devicemotion",this.onDeviceOrientationChange),o.prototype.off.call(this,e,t,n,i)},e.onDeviceOrientationChange=function(e){var t=e.interval;n.acceleration.x=e.acceleration.x,n.acceleration.y=e.acceleration.y,n.acceleration.z=e.acceleration.z,n.accelerationIncludingGravity.x=e.accelerationIncludingGravity.x,n.accelerationIncludingGravity.y=e.accelerationIncludingGravity.y,n.accelerationIncludingGravity.z=e.accelerationIncludingGravity.z,n.rotationRate.alpha=-1*e.rotationRate.gamma,n.rotationRate.beta=-1*e.rotationRate.alpha,n.rotationRate.gamma=e.rotationRate.beta,c.onAndroid?(n.onChrome&&(n.rotationRate.alpha*=180/Math.PI,n.rotationRate.beta*=180/Math.PI,n.rotationRate.gamma*=180/Math.PI),n.acceleration.x*=-1,n.accelerationIncludingGravity.x*=-1):c.onIOS&&(n.acceleration.y*=-1,n.acceleration.z*=-1,n.accelerationIncludingGravity.y*=-1,n.accelerationIncludingGravity.z*=-1,t*=1e3),this.event("change",[n.acceleration,n.accelerationIncludingGravity,n.rotationRate,t])},l(1,n,"instance",function(){return n._instance=n._instance||new n(0)},laya.events.EventDispatcher._$SET_instance),n.getTransformedAcceleration=function(e){(n.transformedAcceleration=n.transformedAcceleration||new p).z=e.z,90==c.window.orientation?(n.transformedAcceleration.x=e.y,n.transformedAcceleration.y=-e.x):-90==c.window.orientation?(n.transformedAcceleration.x=-e.y,n.transformedAcceleration.y=e.x):c.window.orientation?180==c.window.orientation&&(n.transformedAcceleration.x=-e.x,n.transformedAcceleration.y=-e.y):(n.transformedAcceleration.x=e.x,n.transformedAcceleration.y=e.y);var t=NaN;return-90==r.stage.canvasDegree?(t=n.transformedAcceleration.x,n.transformedAcceleration.x=-n.transformedAcceleration.y,n.transformedAcceleration.y=t):90==r.stage.canvasDegree&&(t=n.transformedAcceleration.x,n.transformedAcceleration.x=n.transformedAcceleration.y,n.transformedAcceleration.y=-t),n.transformedAcceleration},n._instance=null,n.transformedAcceleration=null,a(n,["acceleration",function(){return this.acceleration=new p},"accelerationIncludingGravity",function(){return this.accelerationIncludingGravity=new p},"rotationRate",function(){return this.rotationRate=new y},"onChrome",function(){return this.onChrome=-1<c.userAgent.indexOf("Chrome")}]),n}(o),L=(function(o){function t(e){t.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}s(t,"laya.device.motion.Gyroscope",o);var e=t.prototype;e.on=function(e,t,n,i){return o.prototype.on.call(this,e,t,n,i),c.window.addEventListener("deviceorientation",this.onDeviceOrientationChange),this},e.off=function(e,t,n,i){return void 0===i&&(i=!1),this.hasListener(e)||c.window.removeEventListener("deviceorientation",this.onDeviceOrientationChange),o.prototype.off.call(this,e,t,n,i)},e.onDeviceOrientationChange=function(e){t.info.alpha=e.alpha,t.info.beta=e.beta,t.info.gamma=e.gamma,e.webkitCompassHeading&&(t.info.alpha=-1*e.webkitCompassHeading,t.info.compassAccuracy=e.webkitCompassAccuracy),this.event("change",[e.absolute,t.info])},l(1,t,"instance",function(){return t._instance=t._instance||new t(0)},laya.events.EventDispatcher._$SET_instance),t._instance=null,a(t,["info",function(){return this.info=new y}])}(o),function(e){function t(){this.throushold=0,this.shakeInterval=0,this.callback=null,this.lastX=NaN,this.lastY=NaN,this.lastZ=NaN,this.lastMillSecond=NaN,t.__super.call(this)}s(t,"laya.device.Shake",o);var n=t.prototype;n.start=function(e,t){this.throushold=e,this.shakeInterval=t,this.lastX=this.lastY=this.lastZ=NaN,E.instance.on("change",this,this.onShake)},n.stop=function(){E.instance.off("change",this,this.onShake)},n.onShake=function(e,t,n,i){if(isNaN(this.lastX))return this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z,void(this.lastMillSecond=c.now());var o=Math.abs(this.lastX-t.x),a=Math.abs(this.lastY-t.y),r=Math.abs(this.lastZ-t.z);this.isShaked(o,a,r)&&(c.now()-this.lastMillSecond>this.shakeInterval&&(this.event("change"),this.lastMillSecond=c.now()));this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z},n.isShaked=function(e,t,n){return e>this.throushold&&t>this.throushold||e>this.throushold&&n>this.throushold||t>this.throushold&&n>this.throushold},l(1,t,"instance",function(){return t._instance=t._instance||new t},laya.events.EventDispatcher._$SET_instance),t._instance=null}(),function(e){function t(){this.video=null,this._source=null,t.__super.call(this),this._width=1,this._height=1,this.createDomElement()}s(t,"laya.device.media.HtmlVideo",i);var n=t.prototype;return n.createDomElement=function(){var e=this;this._source=this.video=c.createElement("video");var t=this.video.style;t.position="absolute",t.top="0px",t.left="0px",this.video.addEventListener("loadedmetadata",function(){this._w=e.video.videoWidth,this._h=e.video.videoHeight}.bind(this))},n.setSource=function(e,t){for(;this.video.childElementCount;)this.video.firstChild.remove();t&w.MP4&&this.appendSource(e,"video/mp4"),t&w.OGG&&this.appendSource(e+".ogg","video/ogg")},n.appendSource=function(e,t){var n=c.createElement("source");n.src=e,n.type=t,this.video.appendChild(n)},n.getVideo=function(){return this.video},n._getSource=function(){return this._source},t.create=function(){return new t},t}()),w=function(i){function n(e,t){this.htmlVideo=null,this.videoElement=null,this.internalTexture=null,void 0===e&&(e=320),void 0===t&&(t=240),n.__super.call(this),d.isConchApp||d.isWebGL?this.htmlVideo=new x:this.htmlVideo=new L,this.videoElement=this.htmlVideo.getVideo(),(this.videoElement.layaTarget=this).internalTexture=new u(this.htmlVideo),this.videoElement.addEventListener("abort",n.onAbort),this.videoElement.addEventListener("canplay",n.onCanplay),this.videoElement.addEventListener("canplaythrough",n.onCanplaythrough),this.videoElement.addEventListener("durationchange",n.onDurationchange),this.videoElement.addEventListener("emptied",n.onEmptied),this.videoElement.addEventListener("error",n.onError),this.videoElement.addEventListener("loadeddata",n.onLoadeddata),this.videoElement.addEventListener("loadedmetadata",n.onLoadedmetadata),this.videoElement.addEventListener("loadstart",n.onLoadstart),this.videoElement.addEventListener("pause",n.onPause),this.videoElement.addEventListener("play",n.onPlay),this.videoElement.addEventListener("playing",n.onPlaying),this.videoElement.addEventListener("progress",n.onProgress),this.videoElement.addEventListener("ratechange",n.onRatechange),this.videoElement.addEventListener("seeked",n.onSeeked),this.videoElement.addEventListener("seeking",n.onSeeking),this.videoElement.addEventListener("stalled",n.onStalled),this.videoElement.addEventListener("suspend",n.onSuspend),this.videoElement.addEventListener("timeupdate",n.onTimeupdate),this.videoElement.addEventListener("volumechange",n.onVolumechange),this.videoElement.addEventListener("waiting",n.onWaiting),this.videoElement.addEventListener("ended",this.onPlayComplete.bind(this)),this.size(e,t),c.onMobile&&(this.onDocumentClick=this.onDocumentClick.bind(this),c.document.addEventListener("touchend",this.onDocumentClick))}s(n,"laya.device.media.Video",i);var e=n.prototype;return e.onPlayComplete=function(e){this.event("ended"),d.isConchApp&&this.videoElement.loop||r.timer.clear(this,this.renderCanvas)},e.load=function(e){0==e.indexOf("blob:")?this.videoElement.src=e:this.htmlVideo.setSource(e,laya.device.media.Video.MP4)},e.play=function(){this.videoElement.play(),r.timer.frameLoop(1,this,this.renderCanvas)},e.pause=function(){this.videoElement.pause(),r.timer.clear(this,this.renderCanvas)},e.reload=function(){this.videoElement.load()},e.canPlayType=function(e){var t;switch(e){case laya.device.media.Video.MP4:t="video/mp4";break;case laya.device.media.Video.OGG:t="video/ogg";break;case laya.device.media.Video.WEBM:t="video/webm"}return this.videoElement.canPlayType(t)},e.renderCanvas=function(){0!==this.readyState&&((d.isConchApp||d.isWebGL)&&this.htmlVideo.updateTexture(),this.graphics.clear(),this.graphics.drawTexture(this.internalTexture,0,0,this.width,this.height))},e.onDocumentClick=function(){this.videoElement.play(),this.videoElement.pause(),c.document.removeEventListener("touchend",this.onDocumentClick)},e.size=function(e,t){if(i.prototype.size.call(this,e,t),d.isConchApp){var n=v.getTransformRelativeToWindow(this,0,0);this.videoElement.width=e*n.scaleX}else this.videoElement.width=e/c.pixelRatio;return this.paused&&this.renderCanvas(),this},e.destroy=function(e){void 0===e&&(e=!0),i.prototype.destroy.call(this,e),this.videoElement.removeEventListener("abort",n.onAbort),this.videoElement.removeEventListener("canplay",n.onCanplay),this.videoElement.removeEventListener("canplaythrough",n.onCanplaythrough),this.videoElement.removeEventListener("durationchange",n.onDurationchange),this.videoElement.removeEventListener("emptied",n.onEmptied),this.videoElement.removeEventListener("error",n.onError),this.videoElement.removeEventListener("loadeddata",n.onLoadeddata),this.videoElement.removeEventListener("loadedmetadata",n.onLoadedmetadata),this.videoElement.removeEventListener("loadstart",n.onLoadstart),this.videoElement.removeEventListener("pause",n.onPause),this.videoElement.removeEventListener("play",n.onPlay),this.videoElement.removeEventListener("playing",n.onPlaying),this.videoElement.removeEventListener("progress",n.onProgress),this.videoElement.removeEventListener("ratechange",n.onRatechange),this.videoElement.removeEventListener("seeked",n.onSeeked),this.videoElement.removeEventListener("seeking",n.onSeeking),this.videoElement.removeEventListener("stalled",n.onStalled),this.videoElement.removeEventListener("suspend",n.onSuspend),this.videoElement.removeEventListener("timeupdate",n.onTimeupdate),this.videoElement.removeEventListener("volumechange",n.onVolumechange),this.videoElement.removeEventListener("waiting",n.onWaiting),this.videoElement.removeEventListener("ended",this.onPlayComplete),this.pause(),this.videoElement.layaTarget=null,this.videoElement=null,this.htmlVideo.destroy()},e.syncVideoPosition=function(){var e,t=r.stage;e=v.getGlobalPosAndScale(this);var n=t._canvasTransform.a,i=t._canvasTransform.d,o=e.x*t.clientScaleX*n+t.offset.x,a=e.y*t.clientScaleY*i+t.offset.y;this.videoElement.style.left=o+"px",this.videoElement.style.top=a+"px",this.videoElement.width=this.width/c.pixelRatio,this.videoElement.height=this.height/c.pixelRatio},l(0,e,"buffered",function(){return this.videoElement.buffered}),l(0,e,"videoWidth",function(){return this.videoElement.videoWidth}),l(0,e,"currentSrc",function(){return this.videoElement.currentSrc}),l(0,e,"currentTime",function(){return this.videoElement.currentTime},function(e){this.videoElement.currentTime=e,this.renderCanvas()}),l(0,e,"ended",function(){return this.videoElement.ended}),l(0,e,"volume",function(){return this.videoElement.volume},function(e){this.videoElement.volume=e}),l(0,e,"videoHeight",function(){return this.videoElement.videoHeight}),l(0,e,"readyState",function(){return this.videoElement.readyState}),l(0,e,"duration",function(){return this.videoElement.duration}),l(0,e,"error",function(){return this.videoElement.error}),l(0,e,"loop",function(){return this.videoElement.loop},function(e){this.videoElement.loop=e}),l(0,e,"x",i.prototype._$get_x,function(e){if(r.superSet(h,this,"x",e),d.isConchApp){var t=v.getTransformRelativeToWindow(this,0,0);this.videoElement.style.left=t.x}}),l(0,e,"y",i.prototype._$get_y,function(e){if(r.superSet(h,this,"y",e),d.isConchApp){var t=v.getTransformRelativeToWindow(this,0,0);this.videoElement.style.top=t.y}}),l(0,e,"playbackRate",function(){return this.videoElement.playbackRate},function(e){this.videoElement.playbackRate=e}),l(0,e,"muted",function(){return this.videoElement.muted},function(e){this.videoElement.muted=e}),l(0,e,"paused",function(){return this.videoElement.paused}),l(0,e,"preload",function(){return this.videoElement.preload},function(e){this.videoElement.preload=e}),l(0,e,"seekable",function(){return this.videoElement.seekable}),l(0,e,"seeking",function(){return this.videoElement.seeking}),l(0,e,"width",i.prototype._$get_width,function(e){if(d.isConchApp){var t=v.getTransformRelativeToWindow(this,0,0);this.videoElement.width=e*t.scaleX}else this.videoElement.width=this.width/c.pixelRatio;r.superSet(h,this,"width",e),this.paused&&this.renderCanvas()}),l(0,e,"height",i.prototype._$get_height,function(e){if(d.isConchApp){var t=v.getTransformRelativeToWindow(this,0,0);this.videoElement.height=e*t.scaleY}else this.videoElement.height=this.height/c.pixelRatio;r.superSet(h,this,"height",e)}),n.onAbort=function(e){e.target.layaTarget.event("abort")},n.onCanplay=function(e){e.target.layaTarget.event("canplay")},n.onCanplaythrough=function(e){e.target.layaTarget.event("canplaythrough")},n.onDurationchange=function(e){e.target.layaTarget.event("durationchange")},n.onEmptied=function(e){e.target.layaTarget.event("emptied")},n.onError=function(e){e.target.layaTarget.event("error")},n.onLoadeddata=function(e){e.target.layaTarget.event("loadeddata")},n.onLoadedmetadata=function(e){e.target.layaTarget.event("loadedmetadata")},n.onLoadstart=function(e){e.target.layaTarget.event("loadstart")},n.onPause=function(e){e.target.layaTarget.event("pause")},n.onPlay=function(e){e.target.layaTarget.event("play")},n.onPlaying=function(e){e.target.layaTarget.event("playing")},n.onProgress=function(e){e.target.layaTarget.event("progress")},n.onRatechange=function(e){e.target.layaTarget.event("ratechange")},n.onSeeked=function(e){e.target.layaTarget.event("seeked")},n.onSeeking=function(e){e.target.layaTarget.event("seeking")},n.onStalled=function(e){e.target.layaTarget.event("stalled")},n.onSuspend=function(e){e.target.layaTarget.event("suspend")},n.onTimeupdate=function(e){e.target.layaTarget.event("timeupdate")},n.onVolumechange=function(e){e.target.layaTarget.event("volumechange")},n.onWaiting=function(e){e.target.layaTarget.event("waiting")},n.MP4=1,n.OGG=2,n.CAMERA=4,n.WEBM=8,n.SUPPORT_PROBABLY="probably",n.SUPPORT_MAYBY="maybe",n.SUPPORT_NO="",n}(h),x=function(e){function t(){this.gl=null,this.preTarget=null,this.preTexture=null,t.__super.call(this),!d.isConchApp&&c.onIPhone||(this.gl=d.isConchApp?LayaGLContext.instance:m.mainContext,this._source=this.gl.createTexture(),g.bindTexture(this.gl,3553,this._source),this.gl.texParameteri(3553,10242,33071),this.gl.texParameteri(3553,10243,33071),this.gl.texParameteri(3553,10240,9729),this.gl.texParameteri(3553,10241,9729),g.bindTexture(this.gl,3553,null))}s(t,"laya.device.media.WebGLVideo",L);var n=t.prototype;return n.updateTexture=function(){!d.isConchApp&&c.onIPhone||(g.bindTexture(this.gl,3553,this._source),this.gl.texImage2D(3553,0,6407,6407,5121,this.video),t.curBindSource=this._source)},n.destroy=function(){this._source&&(this.gl=d.isConchApp?LayaGLContext.instance:m.mainContext,t.curBindSource==this._source&&(g.bindTexture(this.gl,3553,null),t.curBindSource=null),this.gl.deleteTexture(this._source)),laya.resource.Resource.prototype.destroy.call(this)},l(0,n,"_glTexture",function(){return this._source}),t.curBindSource=null,t}();r.__init([f])}(window,document,Laya);