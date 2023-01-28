<script>
	export let data;
	let cms = data.cms;
</script>

<svelte:head>
	<title>{cms?.pageTitle}</title>
</svelte:head>

<fieldset>
	<legend>Slug Layer</legend>

	{cms?.content}
</fieldset>

<slot />
