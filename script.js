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

    $("#switch").on("click", () => {
        if($("#switch").prop("checked")) {
            $("body").addClass("dark");
            $("main").addClass("dark-text");
            $(".mail-btn").addClass("dark-btn");
            $(".jordakoes").addClass("dark-portfolio-bg");
            $(".flickpick").addClass("dark-portfolio-bg");
            $(".Typewriter__cursor").addClass("dark-cursor");
        } else {
          $("body").removeClass("dark");
          $("main").removeClass("dark-text");
          $(".mail-btn").removeClass("dark-btn");
          $(".jordakoes").removeClass("dark-portfolio-bg");
          $(".flickpick").removeClass("dark-portfolio-bg");
          $(".Typewriter__cursor").removeClass("dark-cursor");
        }
      })