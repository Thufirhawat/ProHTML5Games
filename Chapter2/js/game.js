var game= {
 $(window).load(function() {
    game.init();
    });
 // start initislizing objects, preloading assets and display start screen
}
    init: function () {

        // Hide all game layers and display the start screen
        $('.gamelayer').hide();
        $('#gamestartscreen').show();

        // get handler for game canvas and content
        game.canvas = $('#gamecanvas')[0];
        game.context = gamecanvas.getContext('2d');
    }
}

var levels={
    //Level data
    data:[
        {   //First level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        },
        {   //Second level
            foreground: 'desert-foreground',
            background: 'clouds-background',
            entities: []
        },
        
}