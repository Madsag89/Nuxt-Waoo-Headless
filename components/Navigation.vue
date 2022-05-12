<template>
  <header class="nav__container">
    <AnnouncementBar />

    <!-- Naw wrapper mobile -->
    <div class="nav__wrapper-mobile">
      <!-- <div class="nav__burger-mobile">
        <span></span>
        <span></span>
        <span></span>
      </div> -->
      <!-- <Bruger></Bruger> -->
      <div>
        <img class="nav__logo-mobile" src="~/assets/icons/logo.svg" />
      </div>

      <div class="nav__cart-mobile">
        <img class="nav__cart-icon" src="~/assets/icons/shopping-cart.svg" />
      </div>
<!-- 
      <Sidebar>
     <ul class="sidebar-panel-nav">
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
   </Sidebar> -->

    </div>

    <!-- Nav wrapper Laptop -->
    <div class="nav__wrapper">
      <div>
        <img class="nav__logo" src="~/assets/icons/logo.svg" />
      </div>

      <ul class="nav__list">
        <li v-for="item in items" :key="item.navLink">
          <a class="nav__anchor"> {{ item.navLink }} </a>
        </li>
      </ul>

      <div class="nav__cart-wrapper">
        <span>Menu</span>
        <div class="nav__cart">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="nav__cart">
          <img class="nav__cart-icon" src="~/assets/icons/cart.svg" />
        </div>
      </div>
    </div>

    
  </header>
</template>

<script>
// import Burger from "~/components/Burger.vue";
// import Sidebar from "~/components/Sidebar.vue";
import AnnouncementBar from "~/components/AnnouncementBar.vue";




export default {
  name: "Navigation",
  components: {
    AnnouncementBar,
  },

  data() {
    return {
      items: [
        { navLink: "Fibernet" },
        { navLink: "TV" },
        { navLink: "Streaming" },
        { navLink: "Telefoni" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.nav {
  /* --- Mobile nav --- */

  &__container {
    background-color: $primary-color;
    align-items: center;
  }

  &__wrapper-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.7rem 0.5rem 1.7rem 0.5rem;
  }

  &__burger-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }

  &__burger-mobile > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 3px;
    background-color: $bg-primary-color;
  }

  &__cart-wrapper-mobile {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 90;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    color: $bg-primary-color;
    transition: opacity 0.2s ease-in-out;
  }

  &__cart-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    margin-right: 8px;
    margin-left: 8px;
  }

  &__cart-mobile > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 2px;
    background-color: $bg-tertiary-color;
  }

  /* --- Laptop nav --- */

  &__wrapper {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 0.5rem 1.7rem 0.5rem;
  }

  &__burger-icon {
    width: 26px;
  }

  &__logo {
    width: 75px;
  }

  &__logo-mobile {
    width: 50px;
  }

  &__list {
    display: flex;
    list-style-type: none;
    margin-left: 44px;
  }

  &__anchor {
    padding: 1rem;
    color: $bg-primary-color;
    font-weight: bold;
    margin: 0 10px;

    &:hover {
      color: $secondary-color;
    }
  }

  &__cart-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 90;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    color: $bg-primary-color;
    transition: opacity 0.2s ease-in-out;
  }

  &__cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: $bg-primary-color;
  }

  &__cart > span {
    display: block;
    width: 20px;
    height: 2px;
    margin: 2px;
    background-color: $bg-tertiary-color;
  }

  &__cart-icon {
    width: 40px;
  }

  &__cart-icon {
    width: 26px;
  }
}

@media screen and (min-width: 850px) {
  .nav {
    &__wrapper-mobile {
      display: none;
    }
  }
}

@media screen and (max-width: 850px) {
  .nav {
    &__wrapper {
      display: none;
    }
  }
}
</style>
