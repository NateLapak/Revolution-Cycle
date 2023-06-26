<script>
  import Navbar from "../Components/Navbar.svelte"
  import Sidebar from "../Components/Sidebar.svelte"
  import { Button, Card, Avatar } from 'flowbite-svelte';

  import {faker} from '@faker-js/faker';
</script>

<svelte:head>
  <title>Revolution Cycle</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />

<!-- Dashboard section -->
<div>
  <section>
    <Sidebar />
    <div class="py-10 text-center">
      <h2 class="text-4xl py-10">Welcome to your Dashboard</h2>
      <div class="flex justify-center my-4">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center p-5">
              <h5 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white mb-5">{faker.person.fullName()}</h5>
              <Avatar />
              <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight mt-2">
                Access your profile and view other users
              </p>
              <div class="flex mt-4 space-x-3 md:mt-6">
                  <a href="/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View profile</a>
                  <a href="/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Users</a>
              </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center m-3">
          <div class="m-10">
            <Card padding="xl">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Access any current or past projects
              </p>
              <Button type="button" class="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Projects
              </Button>
            </Card>
          </div>
  
          <div class="m-10">
            <Card padding="xl">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tasks</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
                Create and manage a list of tasks
              </p>
              <Button type="button" class="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Tasks
              </Button>
            </Card>
          </div>
        </div>
      </div>
  </section>
</div>

