async function getFood() {
    const response = await fetch("https://trackapi.nutritionix.com/v2/search/instant", {
        method: 'GET',
        headers: {
            'x-app-id': '76b7362a',
            'x-app-key': '49d670b5e52cd7fc5cf4cfd48cd5762e',
            'x-remote-user-id': '0',
        },
    })
    const data = await response.json()
    console.log(data)
}
getFood()