<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`euler.json`).then(r => r.json()).then(problems => {
			return { problems };
		});
	}
</script>

<script>
	export let problems;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Project Euler</title>
</svelte:head>

<h1>Recent problems</h1>

<ul>
	{#each problems as problem}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='euler/{problem.slug}'>{problem.title}</a></li>
	{/each}
</ul>