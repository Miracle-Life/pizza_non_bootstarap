function toData(){
    const ret = {};
    ret.sizes=[];
    ret.ingredients = [];
    const cbx = document.getElementsByTagName("input");

    for (let i=0; i < cbx.length; i++) {
        if ((cbx[i].type === "checkbox" || cbx[i].type === "radio" ) ) {
            var span = document.querySelector('#'+cbx[i].id+' ~ span');
            let obj= {
                  name:span.textContent,
                  checked:cbx[i].checked,
                   value:cbx[i].value,
            };
            if (cbx[i].name==='size'){
                ret.sizes.push(obj);
            }
            else{
                ret.ingredients.push(obj);
            }
        }
    }
    ret.sum=getAllSum();
    ret.delivery={
        name:document.getElementById('name').value,
        phone:document.getElementById('mobile').value,
        street:document.getElementById('street').value
    };

    return ret;
}

function writeData() {
    localStorage.setItem('data',JSON.stringify(toData()));
}


function kod1()
{
    document.getElementById('im').className = 'img1';
}
function kod2()
{
    document.getElementById('im').className = 'img2';
}
function kod3()
{
    document.getElementById('im').className = 'img3';
}

// function test_checkbox()
// {
//     const ch = document.getElementsByTagName("input");
//     let error = 1;
//     for (let i=0; i<ch.length; i++)
//     {
//         if (ch[i].checked) { error = 0; break; }
//     }
//     if (error) alert('Что бы продолжить: Выберите пиццу и её ингредиенты!');
//
// }


window.addEventListener("change", writeAllSum);
window.addEventListener("change", writeData);
window.addEventListener("load", writeData);

function getAllSum() {
    const cbx = document.getElementsByTagName("input");
    let sum = 0;
    for (let i=0; i < cbx.length; i++) {
        if ((cbx[i].type === "checkbox" || cbx[i].type === "radio") && cbx[i].checked) {
            sum += parseInt(cbx[i].value);
        }
    }
    return sum;

}

function writeAllSum() {

    let sum = getAllSum();
    const result = document.getElementById("result");
    result.innerHTML=sum.toFixed(2) + ' грн.' ;

    if(sum>200){
        document.querySelector('.loader-cola').classList.add('loader-cola1');
        result.innerHTML=sum.toFixed(2) + ' грн.'+'<BR>'+' + Coca-Cola Free';

        let value =sum.toFixed(2) + ' грн.'+'+ Coca-Cola Free' ;
        localStorage.setItem("testKey", value);
    }
    else {
        document.querySelector('.loader-cola').classList.remove('loader-cola1')
        let value =sum.toFixed(2) + ' грн.' ;
        localStorage.setItem("testKey", value);
    }

}





