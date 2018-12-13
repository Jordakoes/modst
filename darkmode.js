// Dark mode
$("#switch").on("click", () => {
    if($("#switch").prop("checked")) {
      $("body").addClass("dark");
      $("main").addClass("dark-text");
      $(".mail-btn").addClass("dark-btn");
      $(".jordakoes").addClass("dark-portfolio-bg");
      $(".flickpick").addClass("dark-portfolio-bg");
      $(".paperpool").addClass("dark-portfolio-bg");
      $(".Typewriter__cursor").addClass("dark-cursor");
    } 
    else {
      $("body").removeClass("dark");
      $("main").removeClass("dark-text");
      $(".mail-btn").removeClass("dark-btn");
      $(".jordakoes").removeClass("dark-portfolio-bg");
      $(".flickpick").removeClass("dark-portfolio-bg");
      $(".paperpool").removeClass("dark-portfolio-bg");
      $(".Typewriter__cursor").removeClass("dark-cursor");
    }
  })