import { data } from "./site-data.js";

let prev = null;

function randomRecipes() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * data.length);
    } while (randomIndex === prev);

    prev = randomIndex;
    return data[randomIndex];
}

document.querySelector(".button").addEventListener("click", () => {
	update(randomRecipes());
    console.log(recipe.food_image);
});

function update(recipe){
	document.querySelector(".left img").src = recipe.food_image
	updateGeneralInfo(recipe);
	updateTags(recipe);
	updateTitle(recipe);
	updateReviews(recipe);
	updateIngredients(recipe);
	updateInstructions(recipe);
	updateNutration(recipe);
	updateHints(recipe);

}

function updateReviews(recipe){
	document.querySelector(".left .reviews span").textContent = recipe.extra_info.rate;
	document.querySelector(".left .reviews p").textContent = recipe.extra_info.people;
}

function updateGeneralInfo(recipe){
	document.querySelector(".further-info .prep").textContent =
    recipe.extra_info.prep_time;

	document.querySelector(".further-info .cook-time").textContent =
    recipe.extra_info.cook_time;

	document.querySelector(".further-info .serving").textContent =
    recipe.extra_info.servings;
}

function updateTags(recipe){
	var query = document.querySelector(".right .head .tags");
	query.innerHTML=""
	for(var i = 1 ; i<=recipe.tags.length ; i++){
		const span = document.createElement("span");
		span.className = "p-2 rounded-pill text-white";
		if(i%2 == 0){
			span.className += "p-2 rounded-pill red";
		}
		else{
			span.className += "p-2 rounded-pill green";
		}
		span.textContent = recipe.tags[i-1]
		query.appendChild(span);
	}
}
function updateTitle(recipe){
	document.querySelector(".right .head .title h2").textContent = recipe.recipe_name;
	document.querySelector(".right .head .title p").textContent = recipe.recipe_desc;
}

function updateIngredients(recipe) {
    const query = document.querySelector(".right .ingredient ul");

    query.innerHTML = "";

    recipe.ingredients.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "d-flex align-items-center gap-2";

        li.innerHTML = `
            <div class="d-flex justify-content-center align-items-center">
                <span>${index + 1}</span>
            </div>
            <span>${item}</span>
        `;

        query.appendChild(li);
    });
}
function updateInstructions(recipe){
	const query = document.querySelector(".right .instruction ul");

    query.innerHTML = "";

    recipe.ingredients.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "d-flex align-items-center gap-2";

        li.innerHTML = `
			<div
				class="d-flex justify-content-center align-items-center rounded-3">
				<span>${index}</span>
			</div>
			<span>${item}</span>
        `;

        query.appendChild(li);
    });
}

function updateNutration (recipe){
	document.querySelector(".right .nutrition .calories .amount").textContent = recipe.nutrition.calories
	document.querySelector(".right .nutrition .protein .amount").textContent = recipe.nutrition.protein
	document.querySelector(".right .nutrition .carb .amount").textContent = recipe.nutrition.carbohydrates
	document.querySelector(".right .nutrition .fiber .amount").textContent = recipe.nutrition.fiber
	document.querySelector(".right .nutrition .fat .amount").textContent = recipe.nutrition.fat
	document.querySelector(".right .nutrition .sodium .amount").textContent = recipe.nutrition.sodium
}

function updateHints (recipe){
	var query = document.querySelector(".right .hints");
	query.innerHTML="";
	recipe.hints.forEach((item , index)=>{
		const div = document.createElement("div");
		div.className = "item d-flex align-items-center gap-3";
		div.innerHTML=`
		<i
			class="fa-solid fa-circle-check"></i>
		<span>${item}</span>
		`;
		query.appendChild(div)
	})
}