<script>

    import { page } from "$app/stores";

    const nav = [
        {title: "Data Viz", path: "/viz"}
    ];

</script>



<div class="flex flex-col justify-between h-screen py-4 px-4 bg-grayLight border-gray border-r drop-shadow-md">

    <!-- Home -->
    <div class="text-md">
        <a class:font-bold={$page.url.pathname === "/"} href="/">Home</a>
    </div>

    <!-- Pages -->
    <div class="basis-5/6 text-lg">
        {#each nav as item}
            <a class:font-bold={$page.url.pathname === item.path} href={item.path}>{item.title}</a>
        {/each}
    </div>
    
    <!-- Footer -->
    <div class="text-md">
        <a class:font-bold={$page.url.pathname === "/about"} href="/about">About</a>
    </div>

</div>
