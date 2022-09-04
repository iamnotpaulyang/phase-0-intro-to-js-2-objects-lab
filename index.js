// Write your solution in this file!
const employee = { name: "Paul", streetAddress: "502 Central Park", };

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value){
    obj[key] = value;
    return obj;

};

function deleteFromEmployeeByKey (obj, key, value) {
    return {...obj, 
        [key]: value,
    };
};

// function destructivelyDeleteFromEmployeeByKey(obj, key, value){
//     return {...obj,
//         [key]: value,
//     };
// };

function destructivelyDeleteFromEmployeeByKey(employee, key) { 
    delete employee[key]; 
    return employee; 
    };