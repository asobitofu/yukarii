var myBtn = document.getElementById("myButton");

var clickTracker = {
count: 0,
getMessage: function () {
    var message;

    switch (this.count) {
        case 1:
            message = "i've always compared myself to others.."; 
            break;
        case 2:
            message = "but maybe i shouldn't be.";
            break;
        case 3:
            message = "afterall..";
            break;
        case 4:
            message = "we are all unique in our own different ways..";
            break;
        case 5:
            message = "but i just couldn't accept that..";
            break;
	    case 6:
            message = "i couldn't accept who i am..";
            break;
		case 7:
            message = "i couldn't accept my own vessel and skin..";
            break;
		case 8:
            message = "i hate that i am me..";
            break;
		case 9:
            message = "i hate how slow i am..";
			break;
	    case 10:
            message = "i hate..";
            break;
		case 11:
            message = "i hate...";
            break;
		case 12:
            message = "....";
            break;
		case 13:
            message = "no matter how much i try..";
			break;
		case 14:
            message = "no matter how much time..";
            break;
		case 15:
            message = "effort..";
            break;
		case 16:
            message = "and dedication i put into something..";
            break;
		case 17:
            message = "i just couldn't be as good as them..";
			break;
		case 18: 
		    message = "...";
			break;
		case 19: 
		    message = "i know i shouldn't feel this way..";
			break;
		case 20:
		    message = "but i can't help it..";
	        break;
		case 21: 
		    message = "i can be proud for others..."
		    break;
		case 22:
		    message = "but i can never be.."
			break;	
		case 23:
		    message = "proud of myself.."
			break;	
		case 24:
		    message = "..."
			break;	
		case 25:
		    message = "...."
			break;	
		case 26:
		    message = "but i can't think this way forever.."
			break;	
		case 27:
		    message = ".. i."
		case 28:
		    message = "i honestly don't know where to start.."
			break;	
		case 29:
		    message = "im still lost.."
			break;	
		case 30:
		    message = "and who knows when i'll get out of this hell i've gotten myself into.."
			break;
		case 31:
		    message = ".. but one day, i'll get better.."
			break;
		case 32:
		    message = ".. i know i will."
			break;
		case 33:
		    message = "if you are reading this, you mean a lot to me.."
			break;
		case 34:
		    message = "onoberse."
			break;
		case 35:
		    message = "fiore famiglia."
			break;
		case 36:
		    message = "trops."
			break;
		case 37:
		    message = "bebot baluyot."
			break;
		case 38:
		    message = "pinkerblue."
			break;
		case 39:
		    message = "and all them crazy motherfuckers that i love.."
			break;
		case 40:
		    message = "..."
			break;
		case 41:
		    message = "i will be back soon.."
			break;
		case 42:
		    message = "but for now.."
			break;
		case 43:
		    message = ".. please."
			break;
        default:
            message = "let me heal."
    }
    return message;
}
}

function processClick() {
   clickTracker.count++;
   document.getElementById("message").innerHTML = clickTracker.getMessage();
}

myBtn.addEventListener("click", processClick);