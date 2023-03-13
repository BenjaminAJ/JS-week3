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
        listElement.innerHTML += `<div> <p> ${i +1}. ${element} </p> <button class='btn btn-primary' onclick='deleteItem(${i})'>Del</button> </div>`;
    }    
}

function deleteItem(index) {
    if (index == '0'){
        studentList.shift();
        loop();

    }
    else{
        studentList.splice((+index), 1);
        loop();
    }
}

let array = [1, 2, 2, 3, 4, 5, 4, 6, 10]
function truncate(array) {
    let oldarray = array;
    let newarray = [];
    for (let index = 0; index < oldarray.length; index++) {
        if (!newarray.includes(`${oldarray[index]}`)) {
            newarray.push(`${oldarray[index]}`);
        }
        
    }
    console.log(oldarray);
    console.log(newarray);
}

truncate(array)