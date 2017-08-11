// variables and call to html 

var charNum = document.getElementById("charNum");
var capBox = document.getElementById("cap");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

    //generate password function and conditions

function generatePw() {
    var char = 'abcdefghijklmnopqrstuvwxyz';
    var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '1234567890';
    var sym = '!@#$%)^&*(|/?.,_+=-';
    var password = '';
    var i = 0;
    
    //checkbox for numbers
    
    if(numBox.checked){ 
	   char += num  
    } 
    
    // checkbox for symbols

    if(symBox.checked){ 
        char += sym
    }
    
    // checkbox for capital letters
    
   if(capBox.checked){ 
        char += cap
   }
    
    // generate password
   
    for(var i = 0; i < charNum.value; i++) {

        password += char.charAt(Math.floor(Math.random() * char.length));
    }
    
    yourPw.value = password; 
}

