<div class="min-h-screen flex flex-col">
	<header class="bg-red-50">Realty "Main", exported as RealtyDefault</header>

	<div class="flex-1 flex flex-col sm:flex-row">
		<main class="flex-1 bg-indigo-100">
			<slot />
		</main>

		<nav class="order-first sm:w-32 bg-purple-200">Sidebar</nav>

		<aside class="sm:w-32 bg-yellow-100"><slot name="sidebar" /></aside>
	</div>

	<footer class="bg-gray-100">Footer</footer>
</div>

<style>
	div {
		border: 1px solid black;
	}
</style>
