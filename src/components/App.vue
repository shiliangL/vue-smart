<template>
    <div id="app">
        <div class="wrapper">
            <side-menu></side-menu>
            <vue-tabs></vue-tabs>
        </div>
    </div>
</template>
<script>
import SideMenu from './components/SideMenu'

export default {
    name: 'app',
    components: {
        SideMenu
    },
    methods: {
        dd(tab) {
            console.log(tab)
        }
    }
}
</script>
<style scoped lang="scss">
</style>
