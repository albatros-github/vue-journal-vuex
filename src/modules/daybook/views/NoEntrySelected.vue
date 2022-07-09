<template>
  <div class="d-flex justify-content-center">
    <h2 class="align-self-center">No hay nada seleccionado</h2>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Fab: defineAsyncComponent(
            () => import('../components/FabVue.vue')
        )
    }
}
</script>

<style lang="scss" scoped>

div {
    height: 100%;
}

</style>