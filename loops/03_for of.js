//  For off loop

// iss loop mee basicaly array,string,set,map chalte hee

let runs = "ABD scored 100 run"
for (const score of runs) {
    if( score === ' ')
    continue 
//  console.log(score); // ye string ka eg
    
}
let array = [2,4,6,8,10]
for (const score of array) {
    if(score === 8)
        break;
// console.log(score); // ye array ka eg
    }


    ////////// MAPS 

    const map = new Map()
    map.set ('in' , 'India')
    map.set ('in' , 'India') // yha pe duplicate value print hi nhi krega
    map.set ('RS' , 'Russia')
    map.set ('us' , 'united sates of america')

    // console.log(map);
    // console.log(map.get('in'));
    for (const countries of map) {
        // console.log(countries); // ye pura map array mee print krega    
    }
    for (const [countries , element] of map) {
        // console.log(countries , ':-'  , element); //  ye syntax se normal form mee print kr skte hee map
         }

        //  let games = {
        //  'game1' : 'GTA',
        //  'game2' :'GOD'
        //  }
    
        //  for (const GAMES of games) {
        //   console.log(GAMES); //  ye nhi chalega kyu ki object iterablr nhi he
            
        //  }