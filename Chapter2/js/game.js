var game= {
 $(window).load(function() {
    game.init();
    });
 // start initislizing objects, preloading assets and display start screen
}
    init: function () {
        //initialize objects
        levels.init();
        // Hide all game layers and display the start screen
        $('.gamelayer').hide();
        $('#gamestartscreen').show();

        // get handler for game canvas and content
        game.canvas = $('#gamecanvas')[0];
        game.context = gamecanvas.getContext('2d');

    }
    //show level screen function
    showLevelScreen:function() {
        $('.gamelayer').hide();
        $('#levelselectscreen').show('slow');
    },
}

var levels= {
    //Level data
    data: [
        {   //First level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        },
        {   //Second level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        }
    ],

    // Initialize level selection screen

    init: function () {
        var html = "";
        for (var i = 0; i < levels.data.length; i++) {
            var level = levels.data[i];
            html += '<input type="button" value= "' + (i + i) + '">';
        }
        ;
        $('#levelselectscreen').html(html);

        //set the button click event handlers to load level
        $('#levelseclectscreen input'), click(function () {
            levels.load(this.value - 1);
            $('#levelselectscreen').hide();
        });
    },
//load all data and images for a specific level
    load: function (number) {
    }
}

var loader={
    loaded:true,
    loadedCount=0, //Assets that have been ;loaded so far
    totalCount:0, //Total number of assets to be loaded

    init:function(){
        //check for sound support
        var mp3Support, oggSupport;
        var audio=document.createElement('audio');
        if (audio.canPlayType) {
            // Currently canPlayType () returns: "", "maybe" or "probably"
            mp3Support = "" !=audio.canPlayType('audio/mpeg');
            oggSupport = "" !=audio.canPlayType('audio/ogg; codecs="vorbis"');
            }
            else{
            //the audio tag is not supported
            mp3Support=false
            oggSuppoer=false
        }
        //Check for ogg, then mp3, and finally set soundFileExtn to undefined
        loader.soundFileExtn=oggSupport?".ogg":mp3Support?".mp3":undefined;
    },

    loadImage:function(url){
        this.totalCount++;
        this.loaded=false;
        $('#loadingscreen').show();
        var image= new Image();
        image.src=url;
        image.onload=loader.itemLoaded;
        return image;
    },
    soundFileExtn:".ogg",
    loadSound:function(url){
        this.totalCount++;
        this.loaded=false;
        $('#loadingscreen').show();
        var audio=new Audio();
        audio.src=url+loader.SoundFileExtn;
        audio.addEventListener("canplaythrough", loader.itemloaded, false);
        return audio;
    },
    itemLoaded:function(){
        //called when an asset is loaded
        loader.loadedCount++;
        $('#loadingmessage').html('loaded ' +loader.loadedCount+ ' of '+loader.totalCount);
        if (loader.loaded.count === loader.totoalCount){
            //loader has loaded completely
            loader.loaded=true;
            //hide the loading screen
            $('#loadingscreen').hide();
            //and call the loader onload method if it exists
            if(loader.onload){
                loader.onload();
                loader.onload=undefined;
            }
        }
    }
}
