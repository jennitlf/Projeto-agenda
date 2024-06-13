
    // use oninput="return formatPhone(this)" in the input in question
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = '(' + value;
    }
    if (value.length > 3) {
        value = value.substring(0, 3) + ')' + value.substring(3);
    }
    if (value.length > 8) {
        value = value.substring(0, 8) + '-' + value.substring(8);
    }
    input.value = value.substring(0, 14);
}

















    //use onkeypress="return validateNumber(event)" in the input in question
function validateNumber(event) {                                          // receives the click event
    let key = event.keyCode ? event.keyCode : event.which;                // If the browser is old, the key variable will be assigned to the code of the clicked key, using keyCode, if it is more current, it will be assigned using which
    if (key < 48 || key > 57) {                                           // If the keys clicked are not between 47 and 58 (numbers that correspond to 0 to 9 in the ascii table), "preventDefault()" will be triggered, preventing the key from being inserted into the input
        event.preventDefault();
    }
}

