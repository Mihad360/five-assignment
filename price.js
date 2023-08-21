let money = 0;
let totalendtaka = 0;
function allcard(target){
    const itemhead = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemhead;
    const appendbox = document.getElementById('append-box')
    appendbox.appendChild(li)

    const totalmoney = target.childNodes[3].childNodes[5].childNodes[1].innerText;

    money = parseFloat(money) + parseFloat(totalmoney)
    
    document.getElementById('total-price').innerText = money.toFixed(2);

    enablebutton('enable')

    document.getElementById('total').innerText = money.toFixed(2);

    if(money >= 200){
        enablebutton('btn-apply')
        return;
    }

    // const enablebtn = document.getElementById('enable')
    // enablebtn.disabled = false;
    
}

document.getElementById('go-home').addEventListener('click', function(){
    const appendempty = document.getElementById('append-box')
    const appendtext = appendempty.innerText;
    
    const totalpriceempty = document.getElementById('total-price')
    const totalpricetext = totalpriceempty.innerText;
    // const totalpricenumber = parseFloat(totalpricetext)

    const totalempty = document.getElementById('total')
    const totalemptytext = totalempty.innerText;
    // const totalemptynumber = parseFloat(totalemptytext)

    const discountempty = document.getElementById('discount')
    const discountemptytext = discountempty.innerText;
    // const discountemptynumber = parseFloat(discountemptytext)
    
    totalempty.innerText = '';
    appendempty.innerText = '';
    totalpriceempty.innerText = '';
    discountempty.innerText = '';
    
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const inputsell = document.getElementById('input-sell')
    const inputselltext = inputsell.value;

    inputsell.value = '';

    if(inputselltext !== 'SELL200'){
        alert('Invalid code. Please provide a valid code')
        return;
    }

    const totalpricediscount = document.getElementById('total-price')
    const totalpricedistext = totalpricediscount.innerText;
    const totalpricedisnumber = parseFloat(totalpricedistext)

    const discountamount = (totalpricedisnumber * 20) / 100;

    const discount = document.getElementById('discount')
    const discounttext = discount.innerText;
    const discountnumber = parseFloat(discounttext)

    discount.innerText = discountamount.toFixed(2);

    const totalamount = document.getElementById('total')
    const totalamounttext = totalamount.innerText;
    const totalamountnumber = parseFloat(totalamounttext)

    const amounttotal = totalpricedisnumber - discountamount;
    totalamount.innerText = amounttotal.toFixed(2);

})

function enablebutton(enabtn){
    const letenable = document.getElementById(enabtn)
    letenable.disabled = false;
}