<template>
  <div class="form">
    <h2 class="form__heading">{{ tagline }}</h2>

    <img class="form__image" src="~/assets/images/waoo-guide.png" />

    <form class="form__container">
      <div class="form__input-container">
        <label class="form__label">Fornavn*</label>
        <input placeholder="Indtast fornavn" type="text" class="form__input" />
      </div>

      <div class="form__input-container">
        <label class="form__label">E-mail*</label>
        <input placeholder="Indtast fornavn" type="text" class="form__input" />
      </div>
    </form>
    <div class="concent">
      <div class="form__button-container">
        <div class="form__checkbox">
          <input type="checkbox" />
          <p>Ja tak, jeg giver samtykke*</p>
        </div>

        <div class="form__show-more">
          <p>Læs mere</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      tagline: "FÅ 5 TIPS TIL DEN ULTIMATIVE HJEMMEARBEJDSPLADS",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.form {
  margin-top: $spacer-m;
  padding: $base-space;
  font-family: Arial, Helvetica, sans-serif;

  &__heading {
    text-align: center;
  }
  &__image {
    display: block;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-top: $spacer-m;
    margin-bottom: $spacer-l;
    max-width: 600px;
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding-bottom: 1rem;
  }

  &__label {
    margin-bottom: $spacer-s;
    color: $paragraph-color;
  }

  &__input {
    background-color: $bg-secondary-color;
    border: none;
    padding: 0.8rem;
    width: 100%;

    margin: 0 auto;
  }

  &__button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    & p {
      margin: 10px;
    }

    input[type="checkbox"] {
      margin-right: $spacer-s;
      background-color: $secondary-color;
    }
  }

  &__checkbox{
    display: flex;
    align-items: center;
  }

  &__show-more > p {
    margin: 0;
    color: $secondary-color;
    text-decoration: underline;
  }
}

@media screen and (min-width: 600px) {
  .form {
    &__container {
      flex-direction: row;
      max-width: 1000px;
      margin: 0 auto;
    }

    &__input-container {
      max-width: 400px;
    }
  }
}
</style>
