let resultField = $("#result");

const insertnumber = (number) => {
    let existingNumber = resultField.val();
    resultField.val(existingNumber + number);
}

const clearResult = () =>{
    resultField.val('');
}

const calculate= () => {
   let result = eval(resultField.val());
   resultField.val(result);
}

const deleteNumber = () => {
    let presentValue = resultField.val();
    if( presentValue != ''){
        resultField.val(presentValue.slice(0,-1));
    }

}