// TODO: Change id='app' to something descriptive
// FIXME: Slows down over time..
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Design')
   // .pauseFor(1000)
    .deleteAll()
    .typeString('Development')
    //.pauseFor(1000)
    .deleteAll()
    .typeString('Deployment')
    //.pauseFor(1000)
    .start();