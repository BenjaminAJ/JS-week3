let studentList = [];
const listElement = document.getElementById('list');
const nameTag = document.getElementById('name');
const listed = document.getElementById('listed');

function add() {
    let name2 = nameTag.value;

    if (studentList.includes(name2)) {
        listed.innerText = '* Already Listed';
    }
    else{
        listed.innerText = '';
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
