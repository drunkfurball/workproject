function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    };

    return arr;
}

function sum(x) {
    var result = 0;
    for (var i = 0; i < x.length; i++) {
        result += x[i];
    };
    return result;
}

function forEach(array, action) {
    for (var i = 0 ; i < array.length; i++) {
        action(array[i]);
    };
}

function fizzBuzz(x, action) {
    for (var num = 1; num <= x; num ++) {
        if (num % 3 === 0 && num % 5 != 0) {
            action("Fizz");
        } else if (num % 5 === 0 && num % 3 != 0) {
            action("Buzz");
        } else if (num % 3 === 0 && num % 3 === 0) {
            action("FizzBuzz");
        } else {
            action(num);
        };
    };
}

function helloWorld() {
    document.getElementById("hello").innerHTML = "World!";
    //$('#hello').text("Hello!");
}

function whenAmI() {
    document.getElementById("today").innerHTML = Date();
    //$('#today').text(Date());
}

function tryInput() {
    document.getElementById("printer").innerHTML = document.getElementById("printer").innerHTML + document.getElementById("incoming").value;
}

function clear_printer() {
    document.getElementById("hello").innerHTML = "";
    //$('#hello').text("");
    document.getElementById("today").innerHTML = "";
    //$('#today').text("");
    document.getElementById("printer").innerHTML = "";
    //$('#printer').text("");
}

function goButton() {
    document.getElementById("window").src = document.getElementById("address").value;
}

function colorButton() {
    document.getElementById("woot").style.backgroundColor = document.getElementById("colorbox").value;
}

function colorButton2() {
    var new_color = document.getElementById("colorbox2").value;
    document.getElementById("printer").style.backgroundColor = new_color;
    document.getElementById("hello").style.backgroundColor = new_color;
    document.getElementById("today").style.backgroundColor = new_color;
}

function card(x) {
    this.value = x % 13;
    this.suit = x % 4;
    this.held = false;
    this.klass = "";
    this.faceSuit = "";
    this.faceValue = "";
    this.dispHTML = "";

    switch (this.suit) {
        case 0:
            this.faceSuit = "\&spades\;";
            this.klass = "blackCard";
            break;
        case 1:
            this.faceSuit = "\&hearts\;";
            this.klass = "redCard";
            break;
        case 2:
            this.faceSuit = "\&clubs\;";
            this.klass = "blackCard";
            break;
        case 3:
            this.faceSuit = "\&diams\;";
            this.klass = "redCard";
            break;
    }
	
    switch (this.value) {
        case 0:
       			this.faceValue="A";
			break;
		case 10:
			this.faceValue="J";
			break;
		case 11:
			this.faceValue="Q";
			break;
		case 12:
			this.faceValue="K";
			break;
		default:
			this.faceValue=this.value + 1;
	}
	
	this.dispHTML = function(m) {
		return " <div id='card"+m+"' class='"+this.klass+"' onclick='hand["+m+"].toggleHeld('card"+m+"')'>"+this.faceValue+"<br>"+this.faceSuit+"<br><input type='checkbox' id='hold"+m+"'></input></div>";
	}
	
	this.toggleHeld=function(x) {
		if (this.held==false) {
			this.held=true;				
		} else if (this.held==true) {
			this.held=false;
		}
		
	}
	
}

function dealGame() {
	var dispHand = "";
	var hand= new Array();
	//deal 10 cards
	for (var i=0; i<10; i++) {
		hand[i]= new card(dealCard());
	}
	
	for (var n=0; n<5; n++) {
		dispHand = dispHand + hand[n].dispHTML(n);
	}
	document.getElementById("printer").innerHTML = dispHand;		
}

function dealCard() {
	x = Math.round((Math.random()) *52 +1);
	return x 
};

function stateSelect() {
    var x = document.getElementById("in_state").value;
    document.getElementById("out_state").innerHTML = x;
};

function changeFirstName() {
    var x = document.getElementById("in_firstName").value;
    document.getElementById("out_firstName").innerHTML = x.toUpperCase();
};

function changeLastName() {
    var x = document.getElementById("in_lastName").value;
    document.getElementById("out_lastName").innerHTML = x.toUpperCase();
};

function changeAddress1() {
    var x = document.getElementById("in_address1").value;
    document.getElementById("out_address1").innerHTML = x.toUpperCase();
};

function changeAddress2() {
    var x = document.getElementById("in_address2").value;
    if (x === ""){
        $('#teehee').hide();
        document.getElementById("out_address2").innerHTML = "";
    }
    else {
        $('#teehee').show();
        document.getElementById("out_address2").innerHTML = x.toUpperCase();
    }
};

function changeCity() {
    var x = document.getElementById("in_city").value;
    document.getElementById("out_city").innerHTML = x.toUpperCase();
};

function changeZipCode() {
    var x = document.getElementById("in_zipCode").value;
    document.getElementById("out_zipCode").innerHTML = x.toUpperCase();
};

$(document).ready(function(){
    //$('#schedule').draggable();
    $('#contactInfo').hide();
    $('#faq').hide();
    $('#resources').hide();
    $('#script').show();
	
	//here todo
    $('#add').click(function(){
        var new_task = document.getElementById("task").value;
        $('#schedule').append("<p class=\"job\">"+ new_task +"</p>");
    });
    $(document).on('dblclick', '.job', function(){
        $(this).remove();
    });

    $('#menu_open').click(function(){
        $('#contactInfo').show();
    });

    $('#menu_close').click(function(){
        $('#contactInfo').hide();
    });

    $('#script_tab').click(function(){
        $('#faq').hide();
        $('#resources').hide();
        $('#script').show();
    });
    $('#faq_tab').click(function(){
        $('#script').hide();
        $('#resources').hide();
        $('#faq').show();
    });
    $('#resources_tab').click(function(){
        $('#script').hide();
        $('#faq').hide();
        $('#resources').show();
    });

});
