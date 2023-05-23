const spaceStr = "` \\ / \" '"
const arr = [4,"2"]
const obj = {string:"bonjour",number:2,boolean:true}

neasted = {
    arr: [4,"2"],
    obj: {string:"bonjour",number:2,boolean:true}
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(neasted)