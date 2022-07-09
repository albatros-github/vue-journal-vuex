<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10}})"
    >

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fs-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Eu labore do culpa dolore fugiat amet magna dolor esse irure labore. Velit elit amet excepteur in qui id reprehenderit veniam aute Lorem et incididunt. Nisi laboris ipsum tempor pariatur mollit. Qui amet ullamco officia qui ullamco magna mollit dolor fugiat non. Ipsum officia aliqua ex aliquip officia officia amet pariatur pariatur ut.
        </div>
    </div>
</template>


<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    
    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
}

.entry-description{
    font-size: 12px;
}


</style>