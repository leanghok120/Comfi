<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import { createUploader } from '$lib/utils/uploadthing';
	import { UploadDropzone } from '@uploadthing/svelte';
	export let form: any;

	let title = '';
	let imageUrl = '';

	const uploader = createUploader('imageUploader', {
		onClientUploadComplete: (res) => {
			if (res && res.length > 0) {
				imageUrl = res[0].appUrl;
			}
		},
		onUploadError: (error: Error) => {
			console.error(error);
		}
	});
</script>

<div class="flex h-full flex-col items-center justify-center">
	<div>
		<SignedIn>
			<div class="card bg-base-100 card-md w-96 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Create</h2>
					<form method="post">
						<UploadDropzone {uploader}>
							<span slot="button-content" let:state>
								{state.isUploading ? 'Uploading...' : 'Pick an image'}
							</span>
						</UploadDropzone>

						<input type="hidden" name="imageUrl" bind:value={imageUrl} />

						<input
							name="title"
							bind:value={title}
							type="text"
							class="input mt-2 w-full"
							placeholder="Title (optional)"
						/>

						<div class="card-actions mt-5">
							<button class="btn btn-primary w-full" type="submit" disabled={uploader.disabled}>
								Create
							</button>
						</div>
					</form>

					{#if form?.error}
						<p class="mt-2 text-red-500">{form.error}</p>
					{/if}
				</div>
			</div>
		</SignedIn>

		<SignedOut>
			<h1 class="text-2xl font-black">You need to be logged in to post!</h1>
		</SignedOut>
	</div>
</div>
