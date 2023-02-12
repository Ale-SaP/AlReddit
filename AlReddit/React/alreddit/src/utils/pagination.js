const pagination = (listOfObjects, limit) => {
    let list = []
    for (let i = 0; i < ((listOfObjects.length)/limit); i ++) {
        let iteration = listOfObjects.slice((i*limit), (i*limit + limit))
        list.push( iteration )
    }
    return list
}

export default pagination