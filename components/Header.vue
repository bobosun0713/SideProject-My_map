<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark h-25">
    <div class="container-fluid">
      <a class="navbar-brand fs-2 p-4" href="#">BoBo</a>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style></style>
