<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pizza La Vuelta</title>
	<link rel="stylesheet" href="css/secondStyles/header.css">
	<link rel="stylesheet" href="css/secondStyles/content.css">
	<link rel="stylesheet" href="css/secondStyles/footer.css">
	<link rel="icon" href="img/header/logotype.png">
</head>

<body>
	<div class="wrapper">
		<header class="header_page">
			<div class="left_part-header">
				<button data-menu class="btn_menu">
					<img src="img/header/menu.png" alt="menu">
				</button>
				<button data-modal class="btns_header">Contact us</button>
				<button data-cart class="btns_header">
					<img src="img/header/shopping-cart.png" alt="cart">
				</button>
			</div>
			<div class="right_part-header">
				<div class="tagline">
					<p>Pizza la Vuelta.<br> Quickly and Tasty!</p>
				</div>
				<a class="logotype_block" href="index.html">
					<div>
						<img class="picture_pizza" src="img/header/logotype.png" alt="Pizza">
					</div>
				</a>
			</div>
		</header>
		<main class="content">
			<div class="line">
				<span>
					Our menu
				</span>
			</div>
				<div class="block_tiles">
					<div data-id="1" class="tiles">
						<img class="tile_img" src="img/tiles/pepperoni_tile.jpg" alt="Pizza Pepperoni">
						<p class="tile_text">Pizza Pepperoni</p>
						<p class="price"><span data-price>6.38</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="2" class="tiles">
						<img class="tile_img" src="img/tiles/vegan-pizza_tile.jpg" alt="Pizza Vegan">
						<p class="tile_text">Pizza Vegan</p>
						<p class="price"><span data-price>7.73</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="3" class="tiles">
						<img class="tile_img" src="img/tiles/margherita_tile.jpg" alt="Pizza Margherita">
						<p class="tile_text">Pizza Margherita</p>
						<p class="price"><span data-price>5.41</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="4" class="tiles">
						<img class="tile_img" src="img/tiles/pizza-mix_tile.jpg" alt="Pizza Mix">
						<p class="tile_text">Pizza Mix</p>
						<p class="price"><span data-price>8.99</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="5" class="tiles">
						<img class="tile_img" src="img/tiles/pizza-hawaiian_tile.jpg" alt="Hawaiian pizza">
						<p class="tile_text">Hawaiian pizza</p>
						<p class="price"><span data-price>7.13</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="6" class="tiles">
						<img class="tile_img" src="img/tiles/pizza-olives_tile.jpg" alt="Pizza with olives">
						<p class="tile_text">Pizza with olives</p>
						<p class="price"><span data-price>5.44</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="7" class="tiles">
						<img class="tile_img" src="img/tiles/kids-pizza_tile.jpg" alt="Meat Kids pizza">
						<p class="tile_text">Meat Kids pizza</p>
						<p class="price"><span data-price>4.59</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="8" class="tiles">
						<img class="tile_img" src="img/tiles/veg-kidspizza_tile.jpg" alt="Veg Kids pizza">
						<p class="tile_text">Veg Kids pizza</p>
						<p class="price"><span data-price>3.67</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
					<div data-id="9" class="tiles">
						<img class="tile_img" src="img/tiles/double-cheesepizza_tile.jpg" alt="Double Cheese">
						<p class="tile_text">Quadruple Cheese</p>
						<p class="price"><span data-price>6.05</span>$</p>
						<button data-add class="tile_add">Add	to cart</button>
					</div>
				</div>
			</div>
		<div class="cart">
			<button data-close class="img_close"><img src="img/close.png" alt="close"></button>
			<h1 data-cart-empty style="text-align: center;">Your Cart is empty...</h1>
			<div data-cart-full class="block-total_price">
				<p class="text-total_price">Your total price: </p>
				<span class="current_price">0</span>$
			</div>
			<br>
			<div class="cart_wrapper">
			
			</div>
		</div>
		</main>
		<footer class="footer_page">
			<div class="phone_numbers">
				<p>You can also contact with us:
					<br> +1 234 567-89-00
					<br> 717-231-1115
					<br>918-447-2010
				</p>
			</div>
			<div>
				<img class="pizza" src="img/footer/pizza__footer.png" alt="pizza">
			</div>
			<div class="social_networks">
				<p>We are in social networks:
					<br>
					<a href="https://vk.com/">VK</a>
					<br>
					<a href="https://instagram.com/">Instagram</a>
				</p>
			</div>
		</footer>
		<div class="modal">
		<div class="modal_content">
			<form action="#">
				<button data-close class="img_close-modal"><img src="img/close.png" alt="close"></button>
				<h1 class="modal_title">
					Enter your data, please!
				</h1>
				<input required class="inputs_modal" name="name" placeholder="Enter your name..."
					type="text">
				<input required class="inputs_modal" name="phone_number"
					placeholder="Enter your phone number..." type="tel">
				<input required type="email" class="inputs_modal" name="email"
					placeholder="Enter your email...">
				<button data-send type="submit" class="btn_modal">Send</button>
			</form>
		</div>
	</div>
		<div class="menu">
			<div class="menu_content">
			<button data-close class="img_close"><img src="img/close.png" alt="close"></button>
			<div class="line">
				<span>
					Sign in please
				</span>
			</div>
			<div class="menu_items">
				<button data-modal class="item">
					Contact with us >
				</button>
				<button data-cart class="item">
					Check your cart >
				</button>
				<a href="index.html" class="item">
					Back to main page >
				</a>
			</div>
		</div>
	</div>
	</div>
	<script src="js/second.js"></script>
</body>

</html>