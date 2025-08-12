
function count(n){
    if(n === 0) return
    console.log(n);

    count(--n)
}

count(5)