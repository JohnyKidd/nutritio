// global variables
breakfastCalories = 0
lunchCalories = 0
dinnerCalories = 0
totalCalories = 0
// function for search the food's image by nutritionix API
async function getFoodImage(searchKey, target) {
    const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchKey}`, {
        method: 'GET',
        headers: {
            'x-app-id': '76b7362a',
            'x-app-key': '49d670b5e52cd7fc5cf4cfd48cd5762e',
            'x-remote-user-id': '0',
        },
    })
    const data = await response.json()
    target.src = data.common[0].photo.thumb
}
// function for searching nutrition data on calorieninjas by food name and serving size in grams
async function getNutrition(food, servingSize, target, type) {
    const response = await fetch (`https://api.calorieninjas.com/v1/nutrition?query=${servingSize}+${food}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'WJVzODYkvBszMFkfKz5KBlrXg3hGgQOWabacvrlw'
        },
    })
    if(type == "breakfast"){
        const data = await response.json()
        breakfastCalories += data.items[0].calories
        totalCalories += data.items[0].calories
        target.innerText = Math.floor(breakfastCalories)
        document.getElementById("intake").innerText = Math.floor(totalCalories)
    }
    else if(type == "lunch"){
        const data = await response.json()
        lunchCalories += data.items[0].calories
        totalCalories += data.items[0].calories
        target.innerText = Math.floor(lunchCalories)
        document.getElementById("intake").innerText = Math.floor(totalCalories)
    }
    else if(type == "dinner"){
        const data = await response.json()
        dinnerCalories += data.items[0].calories
        totalCalories += data.items[0].calories
        target.innerText = Math.floor(dinnerCalories)
        document.getElementById("intake").innerText = Math.floor(totalCalories)
    }
}

// add event listeners to submit buttons
document.getElementById("breakfastSubmit").addEventListener("click", ()=>{
    // adding food image to container
    let foodImage = document.createElement("img")
    foodImage.src = getFoodImage(document.getElementById("breakfastName").value, foodImage)
    foodImage.className = "foodImgs"
    document.getElementById("breakfastDone").appendChild(foodImage)
    // adding calorie information to container
    console.log(document.getElementById("breakfastName").value)
    console.log(document.getElementById("breakfastServing").value)
    getNutrition(document.getElementById("breakfastName").value, document.getElementById("breakfastServing").value, document.getElementById("breakfastCalories"), "breakfast")
})
document.getElementById("lunchSubmit").addEventListener("click", ()=>{
    // adding food image to container
    let foodImage = document.createElement("img")
    foodImage.src = getFoodImage(document.getElementById("lunchName").value, foodImage)
    foodImage.className = "foodImgs"
    document.getElementById("lunchDone").appendChild(foodImage)
    // adding calorie information to container
    getNutrition(document.getElementById("lunchName").value, document.getElementById("lunchServing").value, document.getElementById("lunchCalories"), "lunch")
})
document.getElementById("dinnerSubmit").addEventListener("click", ()=>{
    // adding food image to container
    let foodImage = document.createElement("img")
    foodImage.src = getFoodImage(document.getElementById("dinnerName").value, foodImage)
    foodImage.className = "foodImgs"
    document.getElementById("dinnerDone").appendChild(foodImage)
    // adding calorie information to container
    getNutrition(document.getElementById("dinnerName").value, document.getElementById("dinnerServing").value, document.getElementById("dinnerCalories"), "dinner")
})

// add event listeners to clear buttons
document.getElementById("breakfastClear").addEventListener("click", ()=>{
    document.getElementById("breakfastDone").innerHTML = ""
    totalCalories-=breakfastCalories
    breakfastCalories = 0
    document.getElementById("intake").innerText = totalCalories
    document.getElementById("breakfastCalories").innerText = breakfastCalories
})
document.getElementById("lunchClear").addEventListener("click", ()=>{
    document.getElementById("lunchDone").innerHTML = ""
    totalCalories-=lunchCalories
    lunchCalories = 0
    document.getElementById("intake").innerText = totalCalories
    document.getElementById("lunchCalories").innerText = lunchCalories
})
document.getElementById("dinnerClear").addEventListener("click", ()=>{
    document.getElementById("dinnerDone").innerHTML = ""
    totalCalories-=dinnerCalories
    dinnerCalories = 0
    document.getElementById("intake").innerText = totalCalories
    document.getElementById("dinnerCalories").innerText = dinnerCalories
})