<template>
  <div>
    <Hero />
    <main>
      <div class="posts">
        <div class="posts__container">
          <div
            class="post"
            v-for="post in posts.slice().reverse()"
            :key="post.id"
          >
            <div class="post__wrapper">
              <div class="post__content">
                <h2 class="post__title" v-html="post.title.rendered"></h2>
                <div class="post__text" v-html="post.content.rendered"></div>
              </div>
              <div class="post__image-container">
                <img class="post__image" :src="post.acf.image.url" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </main>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Form from "~/components/Form.vue";

export default {
  components: {
    Hero,
    Form,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.figure {
  display: none;
}

.posts {
  width: 100%;
  &__container {
    margin: 0 auto;
  }
}

.post {
  //Background-colors of posts
  &:nth-of-type(1) {
    background-color: $bg-secondary-color;
  }

  &:nth-of-type(7) {
    background-color: $bg-tertiary-color;
    color: white;
  }

  &__wrapper {
    padding: $base-space;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
  }

  &__content {
    &__text {
      &:nth-of-type(7) {
        color: $bg-primary-color;
      }
    }
  }

  &__title {
    font-size: $primary-heading-xl;
    &:nth-of-type(7) {
      background-color: $bg-primary-color;
    }
    &p{
      color: #FA4C06;
    }
  }

  &__text {
    figure {
      display: none;
    }

    ul > li {
      font-weight: 600;
    }
  }

  &__image-container {
    max-width: 800px;
  }

  &__image {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    list-style: none;
  }

  ul li::before {
    content: "\2022";
    color: $secondary-color;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
}

@media screen and (min-width: 800px) {
  .post {
    &__wrapper {
      flex-direction: row;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;

      &:nth-child(2n) {
        flex-direction: row-reverse;
      }
    }

    &__content {
      width: 50%;
    }

    &__image-container {
      width: 43%;
    }
  }
}

@media screen and (min-width: 1100px) {
  .post {
    // &__wrapper {
    //   justify-content: space-between;
    //   flex-direction: row;
    //   align-items: flex-start;
    //   margin-left: auto;
    //   margin-right: auto;

    //   &:nth-child(2n) {
    //     flex-direction: row-reverse;
    //   }
    // }
    &__content {
      &:nth-child(2n) {
        margin-left: 50px;
      }
    }

    &__image-container {
      width: 43%;
    }
  }
}
</style>
