var arr = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]

for(var i = 0; i<arr.length;i++){
    if(arr[i] == "laboris"){
        arr[i]= arr[i].toUpperCase()
    }
}

console.log(arr)