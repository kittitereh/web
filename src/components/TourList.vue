<template>
    <div class="tour-list" v-if="tours.length"> >
        <div v-for="tour in tours" :key="tour.id">
            <SingleTour :tour="tour"/>
        </div>
    </div>

</template>

<script>
import SingleTour from './SingleTour.vue'
export default{
    props: [tours]
}

</script>

