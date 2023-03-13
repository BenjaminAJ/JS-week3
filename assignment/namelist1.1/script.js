const table = document.getElementById('tbody');
const studentname = document.getElementById('name');
const studentPhoneNumber = document.getElementById('pNumber');
let studentArray = [];
let studentInfo = {
    name: "ben",
    phoneNumber : '07010129246',
};

function add() {
    studentInfo.name = studentname.value
    studentInfo.phoneNumber = studentPhoneNumber.value

    // console.log(studentInfo);

    studentArray.push(studentInfo);
    // console.log(studentArray);

    loop();
}
function loop() {
    table.innerHTML = '';
    for (let index = 0; index < studentArray.length; index++) {
         table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${studentArray[index].name}</td>
                <td>${studentArray[index].phoneNumber}</td>
                <td><button class='btn btn-primary' onclick='deleteItem(${index})'>Del</button><td>
            </tr>
         `
        
    }  
}
function deleteItem(index) {
    if (index == '0'){
        studentArray.shift();
        loop();

    }
    else{
        studentArray.splice((+index), 1);
        loop();
    }
    
    
}


