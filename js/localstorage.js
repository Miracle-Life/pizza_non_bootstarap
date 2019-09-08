// (function(selector) {
//     // не дублируем код
//     function save(data) {
//         localStorage.setItem(selector, JSON.stringify(data));
//     }
//     // и не создаем тысячи функций в цикле
//     // а используем одну общую
//     function onChange(event) {
//         var element = event.target,
//             name = element.name,
//             value = element.value;
//         data[name] = value;
//         save(data);
//     }
//     var elements = document.querySelectorAll(selector),
//         data = localStorage.getItem(selector);
//     if(data) { // если в сторадже что-то есть
//         // то можем и распарсить
//         data = JSON.parse(data);
//     } else {
//         // иначе парсить нельзя, будет ошибка
//         // присвоим дефолтное значение и сохраним
//         save(data = {});
//     }
//     // вместо ненужного создания массива
//     // обратимся напрямую к прототипу
//     Array.prototype.forEach.call(elements, function(element) {
//         var name = element.name,
//             value = element.value;
//         if(data[name] === value) { // если текущий элемент отмечен в сторадже
//             // то отметим и на странице
//             element.checked = true;
//         }
//         // навесим созданый вне цикла хандлер на событие
//         element.addEventListener("change", onChange);
//     });
// })(/* ".stat_inp_r"
//   А еще к селектору вопрос, мы только с этим классом радио будем запоминать?
//   или же у нас каждый будет помнится?
//   если каждый, то может имеет смысл обработать их все за раз:
// */ "input[type=radio]");

// let ds = document.forms[0];
//  ds.onchange = ()=> {
//     let json = JSON.stringify(Array.from(new FormData(ds)));
//     localStorage.setItem(ds.name, json);
// };
// document.addEventListener("DOMContentLoaded", () => {
//     let values = JSON.parse(localStorage.getItem(ds.name));
//     for (let i = 0; i < values; ++i) {
//         let el = ds[values[i][0]];
//         if (el.type === "checkbox")
//             el.setAttribute("checked", "1");
//         else
//             el.value = values[i][1];
//     }
// });


function readData() {
    let data= localStorage.getItem('data');
    return JSON.parse(data);
}
onload=htmlData;
function htmlData() {
    let obj=readData();
    if (obj && obj.ingredients){

        let ingredientsDiv =document.getElementById('ingredients');
        for (let i=0;i<obj.ingredients.length;i++){
            if (!obj.ingredients[i].checked){
                continue;
            }
           let p=document.createElement('p');
           p.innerHTML=obj.ingredients[i].name+': '+obj.ingredients[i].value;
           ingredientsDiv.appendChild(p);
        }
    }

    if (obj && obj.sizes){
        for (let i=0;i<obj.sizes.length;i++){

        }
    }
    if (obj && obj.sum){

    }
     console.log(obj.delivery);
    // const el = document.createElement('div');
    // el.innerHTML =
    //document.getElementById('write').appendChild(el);
}

//localStorage.clear();

////////////////////////////////////////////////////
