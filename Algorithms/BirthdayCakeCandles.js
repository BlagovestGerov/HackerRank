function birthdayCakeCandles(n, ar) {
    let maxHight = Number(Math.max.apply(null, ar))
    let arMaxHight = []

    for (let num = 0; num < n; num++){
        if(ar[num] === Number(maxHight)){
            arMaxHight.push(ar[num])
        }
    }
    return arMaxHight.length

}

console.log(birthdayCakeCandles(4,[3,1,3, 2]))