<div class="flex h-screen flex-col items-center justify-center">
	<div class="card bg-base-100 card-md w-96 shadow-sm">
		<div class="card-body">
			<h2 class="card-title">Create</h2>
			<form>
				<fieldset class="fieldset">
					<legend class="fieldset-legend">Image</legend>
					<input type="file" class="file-input" required />
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="fieldset-label">Max size 5MB</label>
				</fieldset>
				<input type="text" class="input mt-2 w-full" placeholder="Title (optional)" />
			</form>
			<div class="card-actions mt-5">
				<button class="btn btn-primary w-full">Create</button>
			</div>
		</div>
	</div>
</div>
