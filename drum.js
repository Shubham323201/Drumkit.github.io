
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
    var buttonInnerHTML=this.innerHTML;
    mkaeSound(buttonInnerHTML);
    buttonAAnimation(buttonInnerHTML);

    
});
}   

document.addEventListener("keypress", function(event)
{
mkaeSound(event.key);

buttonAAnimation(event.key);
}

); 


function mkaeSound(key)
{
    switch ( key) {
        case "w":
            var tom1 = new Audio("s/tom-1.mp3");
           tom1.play();
            break;

            case "a":
                var tom2 = new Audio("s/tom-2.mp3");
               tom2.play();
                break;

                case "s":
                    var tom3 = new Audio("s/tom-3.mp3");
                   tom3.play();
                    break;

                      case "d":
                        var tom4 = new Audio("s/tom-4.mp3");
                       tom4.play();
                        break;   
                        
                        case "j":
                            var snare= new Audio("s/snare.mp3");
                           snare.play();
                            break;

                            case "k":
                                var crash = new Audio("s/crash.mp3");
                               crash.play();
                                break;

                                case "l":
                                    var kick = new Audio("s/kick-bass.mp3");
                                   kick.play();
                                    break;
        default:
           
    }
}


function buttonAAnimation(currentkey){
   var activeButton= document.querySelector("."+ currentkey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
}

