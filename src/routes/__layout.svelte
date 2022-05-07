<script>
  import "../app.css";

  import Navbar from "$lib/Navbar.svelte"

</script>

<div class="flex flex-row">

  <div class="basis-40">
    <Navbar></Navbar>
  </div>
  

  <div class="basis-96 grow">
    <slot/>
  </div>

</div>
