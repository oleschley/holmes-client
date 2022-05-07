<script lang="ts">

    export let title: string;

</script>

<div class="m-5 bg-grayVeryLight border-primaryLight border-r-2 rounded-sm drop-shadow-md text-right">
    <!-- Put card layout here -->

    <h3 class="mt-2 ml-2 px-10 pb-2 border-primaryLight border-b-2 text-grayDark font-semibold">{title}</h3>
    
    <slot></slot>
</div>
