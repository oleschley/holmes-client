<script>
    import ChartCard from "$lib/ChartCard.svelte";
    import Population from "./charts/population.svelte";
</script>

<div class=" flex grid grid-cols-2 gap-2">

    <ChartCard title="Population of random cities">
        <Population></Population>
    </ChartCard>

</div>
