'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const btnOpenModal = document.querySelectorAll('[data-modal]'),
		btnOpenCart = document.querySelectorAll('[data-cart]'),
		btnClose = document.querySelectorAll('[data-close]'),
		btnOpenMenu = document.querySelector('[data-menu]'),
		inputs = document.querySelectorAll('.inputs_modal'),
		modal = document.querySelector('.modal'),
		menu = document.querySelector('.menu'),
		windowCart = document.querySelector('.cart'),
		cartWrapper = document.querySelector('.cart_wrapper');

	function toggleCartStatus() {
		const cartWrapper = document.querySelector('.cart_wrapper'),
			titlePrice = document.querySelector('[data-cart-empty]'),
			blockPrice = document.querySelector('[data-cart-full]');

		if (cartWrapper.children.length > 0) {
			titlePrice.style.display = 'none';
			blockPrice.style.display = 'flex';
		} else {
			titlePrice.style.display = 'block';
			blockPrice.style.display = 'none';
			closeCart();
		}
	}

	function calcCartPrice() {
		const itemsCart = document.querySelectorAll('.product');


		let counterTotalPrice = document.querySelector('.current_price'),
			totalPrice = 0;

		itemsCart.forEach(item => {
			const amountEl = item.querySelector('[data-counter]').innerText,
				priceEl = item.querySelector('[data-price]').innerText;

			const currentPrice = +amountEl * +priceEl;

			totalPrice += currentPrice;
		});

		counterTotalPrice.innerText = Number(totalPrice).toFixed(2);
	}

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

	function openCart() {
		windowCart.style.left = 30 + 'px';
		windowCart.style.opacity = 100 + '%';
	}

	function closeCart() {
		windowCart.style.left = -570 + 'px';
		windowCart.style.opacity = 0 + '%';
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

	btnOpenCart.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			if (menu.style.display === 'block') {
				closeMenu();
				openCart();
			} else {
				openCart();
			}
		});
	});

	btnClose.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			closeMenu();
			closeModal();
			clearInputs();
			closeCart();
		});
	});

	window.addEventListener('click', (e) => {
		let counter;

		if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
			const counterWrapper = e.target.closest('.block-btns_counter');
			counter = counterWrapper.querySelector('[data-counter]');
		}

		if (e.target.dataset.action === 'plus' && counter.innerText < 10) {
			counter.innerText = ++counter.innerText;
			calcCartPrice();
		}

		if (e.target.dataset.action === 'minus') {

			counter.innerText = --counter.innerText;

			if (e.target.closest('.product') && parseInt(counter.innerText) === 0) {
				let answer = confirm('Do you really wanna delete this pizza from your cart?');
				if (answer === true) {
					e.target.closest('.product').remove();
					toggleCartStatus();
				} else {
					counter.innerText = 1;
				}
			}

			calcCartPrice();
		}

		if (e.target === modal && modal.style.display === 'block') {
			closeModal();
			clearInputs();
		}

		if (e.target === menu && menu.style.display === 'block') {
			closeMenu();
		}

		if (e.target.hasAttribute('data-add')) {

			const card = e.target.closest('.tiles');

			const tileInfo = {
				id: card.dataset.id,
				imgSrc: card.querySelector('.tile_img').getAttribute('src'),
				title: card.querySelector('.tile_text').innerText,
				price: card.querySelector('[data-price]').innerText,
			};

			const itemInCart = cartWrapper.querySelector(`[data-id='${tileInfo.id}']`);

			if (itemInCart) {
				const counterElement = itemInCart.querySelector('[data-counter]');
				counterElement.innerText++;
			} else {
				let cardItemHtml = `<div data-id="${tileInfo.id}" class="product">
				<img class="product_img" src="${tileInfo.imgSrc}" alt="product" class="product_img">
				<div class="block-name_btns">
					<p class="product_name">${tileInfo.title}</p>
					<div class="block-btns_counter">
						<button data-action="minus" class="current_btns">-</button>
						<div data-counter class="product_counter">1</div>
						<button data-action="plus" class="current_btns">+</button>
					</div>
				</div>
					<div class="block-cart_price">
					<p class="price"><span data-price>${tileInfo.price}</span>$</p>
					</div>
			</div>`;

				cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml);
				openCart();
			}
			toggleCartStatus();
			calcCartPrice();
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
});