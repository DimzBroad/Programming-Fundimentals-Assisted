// CALL TO HTML VARIABLES 

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

function generatePw() {
    var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '1234567890';
    var sym = '!@#$%)^&*(|/?.,_+=-';
    var password = '';
    var i = 0;
    
 //if numbr checkbox is checked, generated password will include both characters and symbols! 
    
    if(numBox.checked){
	   char += num  
    }
    
//if symbol checkbox is checked, generated password will include both characters and symbols! 

    if(symBox.checked){
        char += sym
    }
    
    //if symbol checkbox is checked, generated password will include both characters and symbols!
        
    for(var i = 0; i < charNum.value; i++) {

        password += char.charAt(Math.floor(Math.random() * char.length));
    }
    
    yourPw.value = password;
}

