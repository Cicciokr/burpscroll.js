// burpscroll.js v0.1
"use strict";

var burpscroll = (function () {
  var mp3 = {
    prefix: "data:audio/mp3;base64,",
    sound: [
	    "SUQzAwAAAAAHdlRDT04AAAAGAAAAT3RoZXJHRU9CAAAAGQAAAAAAU2ZNYXJrZXJzAAwAAABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tyAHEAAAAAS4AAAAgAAAlwAAABAAABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA=="
	  ]
  };

  var ogg = {
    prefix: "data:audio/ogg;base64,",
    sound: [
	    "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"
	  ]
  };

  return function (trigger_distance) {
    trigger_distance = trigger_distance || 400;
    var lastOffset;

    var fartHandler = function() {
      var scrollOffset = Math.floor(window.scrollY / trigger_distance);
      if (lastOffset !== scrollOffset) {
        playAudio();
        lastOffset = scrollOffset;
      }
    };

	window.addEventListener('scroll', fartHandler, false)
  };

  function playAudio(position){
    var player = getPlayer()
      , audio = getAudioFor(player)
      , rand = Math.floor(Math.random() * audio.sound.length);

    player.src = audio.prefix + audio.sound[position || rand];
    player.play();
  };

  function getAudioFor(player){
    if(player.canPlayType("audio/mp3")) {
      return mp3;
    } else if(player.canPlayType("audio/ogg")) {
      return ogg;
    }
  }

  function getPlayer() {
    var container = getContainer(), player
      , players = container.getElementsByTagName("audio");

    for (player in  players) {
      if (player.currentTime === 0 || player.ended) {
        return player;
      }
    }

    player = document.createElement("audio");
    container.appendChild(player);
    return player;
  };

  function getContainer() {
    var container = document.getElementById("burpscroll");

    if (container === null) {
      container = document.createElement("div");
      container.id = "burpscroll";
      document.getElementsByTagName('body')[0].appendChild(container);
    }

    return container;
  }
})();
