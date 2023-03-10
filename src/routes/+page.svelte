<script lang="ts">
</script>

<title>Blog</title>
<div class="prose text-content prose-h1:text-2xl prose-h1:text-content">
	<h1>What's the main purpose of this blog?</h1>
	<p>
		This serves as a test for me to try fetching data from a database, then dynamically render it on
		the page.
	</p>

	<h1>What's the stack?</h1>
	<li>
		UI:
		<ul>Sveltekit</ul>
		<ul>Tailwindcss</ul>
	</li>
	<li>
		Backend:
		<ul>Supabase</ul>
		<ul>Prisma</ul>
		<ul>mdsvex (to compile markdown content)</ul>
	</li>
	<h1>Limitations</h1>
	<p>Most notable is the speed at which the data loads.</p>
	<p>
		This is because the site is deployed on vercel, and for some reason it takes a while to load the
		pages. Just vercel things?
	</p>
	<p>
		It could also be because I'm rendering the post content as markdown for each individual
		post...but in honesty, the site runs fine locally.
	</p>
	<p>
		If you wanted to you could try it out by cloning the repo. Though you'd have to fill up the env
		variables yourself.
	</p>

	<p class="text-link">Click on the posts page to see some cool styling? Maybe?</p>
</div>
