// stack is used in PRIMITIVE datatypes
// heap is used in NON PRIMITIVE datatypes

let schoolname = "Kv2indore"
let newSchoolName = schoolname
newSchoolName = "Kv1gwalior"
console.log(newSchoolName) 
console.log(schoolname) 


let  sachin = {

    rollno: 113,
    
    mail: "sachin@google.com"
}

let klaus = sachin
klaus.mail = "klaus@google.com"
klaus.rollno = 114
console.table([sachin, klaus]) 
