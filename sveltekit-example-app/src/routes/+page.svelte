<script>
  export let data;

  $: ({ students } = data);
</script>

<h1>Pocketbase users</h1>

<div>
  <h2>Students</h2>
  <ul>
    {#each students as student}
      <li>{student.name}</li>
    {/each}
  </ul>
</div>
