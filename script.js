// var app = document.getElementById('heading-accentcolor');
// var typewriter = new Typewriter(heading-accentcolor, {
//     loop: false
// });

// typewriter.typeString('Designer')
// .pauseFor(1500)
// .deleteAll()
// .typeString('Developer')
// .pauseFor(1500)
// .deleteAll()
// .typeString('Prototyper')
// .pauseFor(1500)
// .start()

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Design')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Development')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Deployment')
    .pauseFor(2500)
    .start();