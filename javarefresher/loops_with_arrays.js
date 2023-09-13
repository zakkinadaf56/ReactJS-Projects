let num=[12,312,344,6567,768,90,1]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
    
}
//for each loop
num.forEach((element)=>{
    console.log(element*element)
})

//array . from
let name="Zakki"
let arr=Array.from(name)
console.log(arr)

//for of
for(let i of num){
    console.log(num)
}

//for in
for(let i in num){
    console.log(num)
}

//map-creates new arr and return

let m=num.map((val,index,array)=>{
    console.log(val,index,array)
    return val+1
})
console.log(m)

//filter

let arr2=[12,13,23,89,8,7,6]
a2=arr2.filter((a)=>{
    return a<20
})
console.log(a2)

//reduce
let arr3=[2,3,54,5,6,7,8,8,9]
let c=arr3.reduce((b,c)=>{
    return b+c
})
console.log(c)