<script>
    import Navbar from "../Components/Navbar.svelte"
    import Sidebar from "../Components/Sidebar.svelte"
    import { Button } from 'flowbite-svelte';
    import { Card } from "flowbite-svelte";
</script>

<svelte:head>
  <title>Revolution Cycle</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />
<div>
  <section>
    <Sidebar />
    <div class="py-10 text-center">
      <h2 class="text-4xl p-10">Dashboard</h2>
        <div class="flex justify-center">
          <div class="mx-10">
            <Card padding="xl">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Access current and pasts projects
              </p>
              <Button type="button" class="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Projects
              </Button>
            </Card>
          </div>
  
          <div class="mx-10">
            <Card padding="xl">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current Tasks</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Create and manage a list of tasks
              </p>
              <Button type="button" class="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Current Tasks
              </Button>
            </Card>
          </div>
        </div>

        <div class="flex justify-center py-10">

          <div class="mx-5">
            <Card class="text-center" padding='xl'>
              <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Manage Products</h5>
              <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Access and manage a list of products and sales
              </p>
              <Button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Products
              </Button>
            </Card>
          </div>
        </div>
        
  
    </div>
  </section>
</div>

