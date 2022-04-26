<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <PageComponent>
      <template v-slot:header>
        <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add new Survey
        </router-link>
        </div>
      </template>
      <div>
        <pre>{{surveys}}</pre>
      </div>
    </PageComponent>
</template>
<script>
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
//
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]
//
// export default {
//   components: {
//     Disclosure,
//     DisclosureButton,
//     DisclosurePanel,
//     Menu,
//     MenuButton,
//     MenuItem,
//     MenuItems,
//     BellIcon,
//     MenuIcon,
//     XIcon,
//   },
//   setup() {
//     return {
//       user,
//       navigation,
//       userNavigation,
//     }
//   },
// }
</script>
<script setup>
  import store from "../store";
  import { computed } from "vue";
  import PageComponent from "../components/PageComponent.vue";

  const surveys = computed(() => store.state.surveys);

</script>
