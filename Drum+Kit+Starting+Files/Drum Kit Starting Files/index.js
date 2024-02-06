var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.InnerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new audio("tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var audio = new audio("tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var audio = new audio("tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var audio = new audio("tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var audio = new audio("snare.mp3");
        snare.play();
        break;

      case "k":
        var audio = new audio("crash.mp3");
        crash.play();
        break;
      case "l":
        var audio = new audio("kick-bass.mp3");
        kick.play();
        break;
      default:
    }
  });
}
