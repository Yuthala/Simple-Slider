
window.addEventListener('DOMContentLoaded', function() { //загрузка кода после того как загружены элементы DOM-дерева

'use strict';

	let slideIndex = 1,  //Индекс слайда
	// получаем элементы со страницы
	slides = document.querySelectorAll('.slider-item'), //<div> с фото
	prev = document.querySelector('.prev'), //назад
	next = document.querySelector('.next'),//вперед
	dotsWrap = document.querySelector('.slider-dots'),//div с точками
	dots = document.querySelectorAll('.dot'); //точки

	showSlides(slideIndex); //вызываем функцию, которая перелистывает слайдер

	function showSlides() { //функция, показывающая и скрывающая слайды и точки

			if (slideIndex > slides.length) { //если мы дошли до последнего слайда
				slideIndex = 1; //показываем первый слайд
			}
			if (slideIndex < 1) { //если мы на первом слайде нажимаем стрелку "назад"
				slideIndex = slides.length; //показываем последний слайд
			}

		slides.forEach((item) => item.style.display = 'none'); //скрываем все слайды
		dots.forEach((item) => item.classList.remove('dot-active')); //скрываем точки

		slides[slideIndex - 1].style.display = 'block';  //показываем первый слайд (slideIndex = 0). Изначально slideIndex = 1, поэтому уменьшаем на единицу
		dots[slideIndex - 1].classList.add('dot-active'); //показываем первую точку
	}

	//функция, показывающая следующий слайд
	function plusSlides() {
		slideIndex ++; //увеличиваем slideIndex на единицу
		showSlides();//запускаем функцию showSlides
	}

	//показываем предыдущий слайд по клику "назад" по событию click
	prev.addEventListener('click', function() {
		slideIndex -= 2; //уменьшаем slideIndex на 2 единицы (одна единица компенсирует slideIndex++ в функции plusSlides)
		plusSlides(); //запускаем функцию plusSlides
	});

	//показываем следующий слайд по клику "вперед" по событию click
	next.addEventListener('click', function() {
		plusSlides(1);
	});

	//делегируем событие click обертке точек; показываем слайд, который соответствует нажатой точке
	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
		//i < dots.length + 1, потому что нам нужно сделать дополнительный проход цикла (если нажата седьмая точка, то i = 6, и проход цикла закончится
			
				//проверяем, что пользователь кликнул именно на точку (event.target имеет класс .dot) и нажата соответствующая точка
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				slideIndex = i;
				showSlides(); //показываем соответствующий слайд (i)
			}
		}
	});

});