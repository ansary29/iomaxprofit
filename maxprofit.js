let arr=[0,0,0]
let time=[4,5,10]

function maxprofit(n){
    let profitarr=[0,0,0]

    if(n<4)return 0
    profitarr[0]=(n-4)*1000

    if(n>=5){
        profitarr[1]=(n-5)*1500
        if(n>=10){
            profitarr[2]=(n-10)*3000
        }
    }
    let maxindex=getmaxindex(profitarr)
    arr[maxindex]++

    return profitarr[maxindex] + maxprofit(n-time[maxindex])

}

function getmaxindex(a){
    let max=a[0],maxindex=0
    for(let i=0;i<a.length;i++){
        if(max<=a[i]){
            max=a[i]
            maxindex=i
        }
    }
    return maxindex
}
function printsol(){
    return `T: ${arr[1]} P: ${arr[0]} C: ${arr[2]}\n`
}

console.log(maxprofit(7),printsol())
