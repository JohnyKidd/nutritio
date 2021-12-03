async function getFood(searchKey) {
    const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchKey}`, {
        method: 'GET',
        headers: {
            'x-app-id': '76b7362a',
            'x-app-key': '49d670b5e52cd7fc5cf4cfd48cd5762e',
            'x-remote-user-id': '0',
        },
    })
    const data = await response.json()
    return data
}
async function getNutrition() {
    const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
        method: 'POST',
        headers: {
            'x-app-id': '76b7362a',
            'x-app-key': '49d670b5e52cd7fc5cf4cfd48cd5762e',
            'x-remote-user-id': '0',
        },
        body: JSON.stringify({
            'query':'apple'
        }),
    })
    const data = await response.json()
    return data
}

console.log(getFood("apple"))
console.log(getNutrition())