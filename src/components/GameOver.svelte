<script>
	export let totalCorrect;
	export let totalWrong;

	$: finalScore = Math.round((totalCorrect - totalWrong) / 100);
</script>

<style>
	.game-over_container {
		width: 100%;
		height: 50vh;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.title {
		width: 100%;
		text-align: center;
	}

	.score-content {
		width: 100%;
		text-align: center;
	}
</style>

<div class="game-over_container">
	<h1 class="title">Game Over</h1>
	<h4 class="score-content">Total Correct: {totalCorrect}</h4>
	<h4 class="score-content">Total Wrong: {totalWrong}</h4>
	<h4 class="score-content">Final Score: {finalScore}</h4>
</div>
