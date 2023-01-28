<div class="min-h-screen flex">
	<main class="flex-1 min-w-0 overflow-auto ...">
		<slot />
	</main>
	<aside class="w-56 flex-none">Right sidebar<slot name="sidebar" /></aside>
</div>
