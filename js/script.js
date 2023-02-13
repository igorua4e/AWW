$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__body_menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
});



const tabButtons = document.querySelectorAll('.open_tab');
const contentBoxes = document.querySelectorAll('[data-tab_content]');

tabButtons.forEach(function (item){
	item.addEventListener('click', function(){
		
		const tabContent = document.querySelector('#' + this.dataset.tab);
		contentBoxes.forEach(function(item){
			item.classList.add('hidden');
		})


		tabContent.classList.remove('hidden');
	})
})
