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
        const div = document.createElement('div')
        div.id = +from + 'div'
        lists.appendChild(div)
        for (let index = 1; index < 13; index++) {
            div.innerHTML+= `<p> ${+from} * ${index} = ${+from * index}</p>`;
        }
        // lists.innerHTML+= `<hr><br>`;
    }
}