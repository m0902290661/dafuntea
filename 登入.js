function enter(){
    let password = '0492652656';
    let input = document.getElementById('input').value;
    if(password===input){
        alert('登入成功，關閉此訊息後跳轉');
        location.href='資訊網/資訊網.htm';
    }
    else{
        alert('登入失敗，密碼錯誤，再試一次');
    }
}