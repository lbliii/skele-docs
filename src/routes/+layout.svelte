<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import '../prism.css'

	import {
		Drawer,
		drawerStore,
		AppShell,
		AppBar,
		Modal,
		storePopup
	} from '@skeletonlabs/skeleton';

	import Navigation from '$lib/Navigation/Navigation.svelte';


	function drawerOpen(): void {
		drawerStore.open({});
	}

	export let data 
	console.log(data)
</script>

<AppShell 
regionPage="relative" 
slotPageHeader="sticky top-0 z-10 p-2"
slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64"
slotSidebarRight="p-2">
	<svelte:fragment slot="header">
		<AppBar background="variant-ghost-surface">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">The Docs</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				link link link

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- <Navigation pages={data.pages}/> -->
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<!-- <Navigation /> -->
</Drawer>