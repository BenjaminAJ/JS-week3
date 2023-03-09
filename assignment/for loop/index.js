const lists = document.getElementById('lists');

function generateTimesTable() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    if (+from > +to){
        alert('Insert valid numbers');
    }
    else if(lists.innerText != ''){
        lists.innerHTML= '';
    }
    for (+from; +from <= +to; +from++) {
        for (let index = 1; index < 13; index++) {
            lists.innerHTML+= `<p> ${+from} * ${index} = ${+from * index}</p>`;
        }
        lists.innerHTML+= `<hr><br>`;
    }
}