<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte'
  import Logo from "$lib/images/RevolutionLogo.png"
</script>

<Navbar class="bg-black" let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src={Logo}
      class="mr-3 h-6 sm:h-9"
      alt="Revolution Cycle Logo"
    />
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-black border-none" {hidden}>
    <NavLi class="text-white" href="/customers">Customers</NavLi>
    <NavLi class="text-white" href="/orders">Orders</NavLi>
    <NavLi class="text-white" href="/login">Login</NavLi>
  </NavUl>
</Navbar>