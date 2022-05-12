<template>
    <div id="burger" :class="{
        'active': active
    }" @click="toggleActive">
        <button type="button" class="burger-button" title="Menu">
            <span class="burger-bar burger-bar--1"></span>
            <span class="burger-bar burger-bar--2"></span>
            <span class="burger-bar burger-bar--3"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Burger',
        props: {
            active: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        methods: {
            toggleActive () {
                this.$emit('toggle-menu')
            }
        }
    }
</script>