
let Guest_List :string[] = ['jahanzain','ali','salman','mehran'];
// for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'imran khan' ;
let new_Guest :string = 'kamran tessori' ;
Guest_List[0] = new_Guest ;

//for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Mr.${absent_Guest}is not coming to the party.`);
console.log('Good News! we find big Table so we are inviting 3 more guests.')

Guest_List.unshift('sir zia khan') ;
Guest_List.splice(2 , 0 , 'Asad ali') ;
Guest_List.push('Nawaz sharif') ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
console.log(`sorry Mr.${remove_Guest}, you are not invited for Dinner.`);
}

for(let i=0; i<Guest_List.length; i++){
console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited .\n\n')
}

Guest_List.splice(0, 2);

console.log(Guest_List);