'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const btnOpenModal = document.querySelectorAll('[data-modal]'),
		btnClose = document.querySelectorAll('[data-close]'),
		btnOpenMenu = document.querySelector('[data-menu]'),
		inputs = document.querySelectorAll('.inputs_modal'),
		modal = document.querySelector('.modal'),
		menu = document.querySelector('.menu'),
		slideNext = document.querySelector('[data-next]'),
		slidePrev = document.querySelector('[data-prev]'),
		sliderLine = document.querySelector('.slider-line'),
		tabs = document.querySelectorAll('.text__options-tabs'),
		pictureTabs = document.querySelectorAll('.pictures_tabs'),
		tabsParent = document.querySelector('.tabs-parent');

	function slider(next, prev, line) {

		let offset = 0;

		function slideLeft() {
			offset += 935.17;
			if (offset > 2805.51) {
				offset = 0;
			}
			line.style.left = -offset + 'px';
		}

		function slideRight() {
			offset -= 935.17;
			if (offset < 0) {
				offset = 2805.51;
			}
			line.style.left = -offset + 'px';
		}

		next.addEventListener('click', () => {
			slideLeft();
		});

		window.addEventListener('keydown', (e) => {
			if (e.code === 'ArrowLeft') {
				slideRight();
			}
		});

		prev.addEventListener('click', () => {
			slideRight();
		});

		window.addEventListener('keydown', (e) => {
			if (e.code === 'ArrowRight') {
				slideLeft();
			}
		});
	}

	function hideTabs() {
		pictureTabs.forEach(item => item.style.display = 'none');
		tabs.forEach(item => item.classList.remove('text__options_tabs-active'));
	}

	function showTabs(i = 0) {
		pictureTabs[i].style.display = 'block';
		tabs[i].classList.add('text__options_tabs-active');
	}

	tabsParent.addEventListener('click', (e) => {

		const target = e.target;

		if (target && target.classList.contains('text__options-tabs')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});

	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	function clearInputs() {
		inputs.forEach(item => {
			item.value = '';
		});
	}

	function openMenu() {
		menu.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeMenu() {
		menu.style.display = 'none';
		document.body.style.overflow = '';
	}

	btnOpenMenu.addEventListener('click', (e) => {
		e.preventDefault();
		openMenu();
	});

	btnOpenModal.forEach(item => {
		item.addEventListener('click', (e => {
			e.preventDefault();
			if (menu.style.display === 'block') {
				closeMenu();
				openModal();
			} else {
				openModal();
			}
		}));
	});

	btnClose.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			closeMenu();
			closeModal();
			clearInputs();
		});
	});

	window.addEventListener('click', (e) => {
		if (e.target === modal && modal.style.display === 'block') {
			closeModal();
			clearInputs();
		}

		if (e.target === menu && menu.style.display === 'block') {
			closeMenu();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.style.display === 'block') {
			closeModal();
			clearInputs();
		}

		if (e.code === "Escape") {
			closeMenu();
		}
	});

	hideTabs();
	showTabs();
	slider(slideNext, slidePrev, sliderLine);
});