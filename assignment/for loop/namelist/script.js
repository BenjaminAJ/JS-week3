let studentList = [];
const listElement = document.getElementById('list');
const nameTag = document.getElementById('name');

function add() {
    let name2 = nameTag.value;

    if (studentList.includes(name2)) {
        console.log('Already Listed');
    }
    else{
        studentList.push(name2);
        loop()
    }
}

function loop() {
    listElement.innerHTML = '';
    for (let i = 0; i < studentList.length; i++) {
        let element = studentList[i];
        listElement.innerHTML += `<li> ${element} </li>`;
        console.log('hey');
    }    
}
