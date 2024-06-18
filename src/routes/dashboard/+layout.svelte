<script lang="ts">
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { ChartPieSolid, CartSolid } from 'flowbite-svelte-icons';

	$: activeUrl = $page.url.pathname;
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	let site = {
		name: 'RemotedLess',
		href: '/dashboard',
		img: '/remotedless.png'
	};
</script>

<svelte:head>
	<title>Home - RemotedLess</title>
</svelte:head>

<div class="flex min-h-screen">
	<div class="min-h-screen w-1/5">
		<Sidebar asideClass="w-full min-h-full">
			<SidebarWrapper divClass="h-72 p-4 bg-gray-100 w-full h-screen">
				<SidebarGroup>
					<SidebarBrand {site} />
					<SidebarItem label="Dashboard">
						<svelte:fragment slot="icon">
							<ChartPieSolid
								class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
							/>
						</svelte:fragment>
					</SidebarItem>
					<SidebarDropdownWrapper label="E-commerce">
						<svelte:fragment slot="icon">
							<CartSolid
								class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
							/>
						</svelte:fragment>
						<SidebarDropdownItem label="Products" />
						<SidebarDropdownItem label="Billing" />
						<SidebarDropdownItem label="Invoice" />
					</SidebarDropdownWrapper>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</div>
	<div class="w-full">
		<slot></slot>
	</div>
</div>
