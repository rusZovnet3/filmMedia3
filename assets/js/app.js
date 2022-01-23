//const arrow = document.querySelector(".arrow");


	const arrows = document.querySelectorAll(".arrow");
	const listaPeli = document.querySelectorAll(".movie-list");

	arrows.forEach((arrows,i)=>{

		const itemNumber = listaPeli[i].querySelectorAll("img").length;
		let clickCounter = 0;
		arrows.addEventListener("click",()=>{
			clickCounter++;
			if (itemNumber - (4 + clickCounter) >= 0) {
					listaPeli[i].style.transform = `translateX(${
					listaPeli[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
			}else {
				listaPeli[i].style.transform = "translateX(0)";
				clickCounter = 0;
			}
			//console.log("Tu Click es: " +i)
			//console.log(listaPeli[i]);
			//listaPeli[i].style.backgroundColor = 'red';
			//listaPeli[i].style.transform = "translateX(-100%)";

		});
		//console.log(listaPeli[i].computedStyleMap().get("transform")[0].x.value);
		//console.log(listaPeli[i].querySelectorAll("img").length);
		console.log(Math.floor(window.innerWidth / 270));
	});



	//Control de toggle
	const ball = document.querySelector(".toggle-ball");
	const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");

	ball.addEventListener("click", () => {
	  items.forEach((item) => {
	    item.classList.toggle("active");
	  })
	  ball.classList.toggle("active");
	});