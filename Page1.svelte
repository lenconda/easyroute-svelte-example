<script>
  import useCurrentRoute from "@easyroute/svelte/useCurrentRoute";

  const currentRoute = useCurrentRoute();

  $: console.log($currentRoute);
</script>

<h1>Page One is here!</h1>