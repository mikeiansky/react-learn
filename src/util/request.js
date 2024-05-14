

// api : https://api.vvhan.com/api/zhichang?type=json


function httpRequest(){
    fetch("https://api.vvhan.com/api/zhichang?type=json")
    .then(res => res.json())
    .then(data => console.log(data))
}

export function apiHello(){
    fetch("https://api.vvhan.com/api/zhichang?type=json")
}

export function apiQinghua(optional){
    console.log('api qing hua optional', optional)
    return fetch("https://api.uomg.com/api/rand.qinghua")
}