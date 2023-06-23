<script>
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import Sidebar from "./Sidebar.svelte";
    import { Button } from 'flowbite-svelte';
    import { Card } from "flowbite-svelte";
</script>

<svelte:head>
	<title>Revolution Cycle</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>
  

<Navbar></Navbar>

<Sidebar />
<section class="text-center">

  <div class="py-10">
    <h2 class="text-4xl p-10">Dashboard</h2>
      <div class="flex justify-center py-10">
        <div class="mx-10">
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Access current and pasts projects
            </p>
          </Card>
        </div>

        <div class="mx-10">
          <Card>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current Tasks</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
              Create and manage a list of tasks
            </p>
          </Card>
        </div>

      </div>

      <div class="flex justify-center py-10">
        <Card class="text-center" padding='xl'>
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Dummy data </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Dummy UI element
          </p>
        </Card>
      </div>

      <h2 class="text-2xl p-10">Login to access dashboard features</h2>
      <Button href="/login" color="blue">Login</Button>

  </div>
</section>
<Footer></Footer>