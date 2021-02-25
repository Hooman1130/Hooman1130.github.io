var set = prompt("Please enter a set of values, separated by spaces.", "0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k");
if (set != null) {
    document.querySelector("#list").innerText = set;
}
var running = false;
function flip(){
    var list = document.querySelector('#list').innerText.split(' ');
    var list2 = document.querySelector('#list').innerText.split(' ');
    list.reverse();
    var count = 0;
    var replacer = setInterval(()=>{
        var string = '';
        for(let i = 0;i < count;i++){
            list2[i] = list[i];
        }
        string= list2.join();
        document.querySelector('#list').innerText = string.replaceAll(',',' ');
        count++;
        if(count == list.length+1){
            clearInterval(replacer);
            running = false;
        }
    },1000);
            
}