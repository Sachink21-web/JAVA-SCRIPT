let Mydate = new Date();
// console.log(Mydate.toString());
// console.log(Mydate.toISOString());
// console.log(Mydate.toJSON());
// console.log(Mydate.toLocaleString());
// console.log(Mydate.toUTCString());
// console.log(Mydate.toLocaleTimeString());
// console.log(Mydate.setMilliseconds(500));
// // let newdate = Number(Mydate);
// console.log([typeof newdate]);

let createdate = new Date('2005-7-21'); 
let newcreatedate = new Date('07-22-2005'); 
// console.log(createdate.toLocaleString());
// console.log(newcreatedate.toLocaleString());

// let timestamp = Date.now();
// console.log(timestamp);
// console.log(new Date(timestamp).toLocaleString());
// console.log(createdate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now() / 1000)); // convert milliseconds to seconds orr comaprison mee kmm atta hee choti value easy calculate ho jati

const mynewdate = new Date(2005 , 7 , 21 , 10 , 33 , 30 , 10); // year , month , day , hour , minute , second , millisecond
console.log(mynewdate.getDay());
console.log(mynewdate.getDate());
console.log(mynewdate.getMilliseconds());
console.log(`${mynewdate.getFullYear()}-${mynewdate.getMonth()}-${mynewdate.getDate()} ${mynewdate.getHours()}:${mynewdate.getMinutes()}:${mynewdate.getSeconds()}.${mynewdate.getMilliseconds()} This is birth day`)

console.log(createdate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , timeZone:'Asia/Kolkata' , timeZoneName: 'short' }));

