<template>
    <div class="tours-scroll" v-for="tour in tours" :key="tour.tour_id">
        <h2> {{ tour.guide }}</h2>
        <p> {{ tour.tour_description}}</p>
        <router-link to="/tour">Details</router-link>
    </div>
    <router-view />
</template>

<script>
export default {
    name: 'ToursScroll',
    data(){
        return{
            tours: [{'guide':'Anna',
            'guide_photo':'..assets/avatar.png',
            'tour_description': "fklflkflkflk",
            'tour_map':'../assets/map1.png',
            'tour_id':1},
            {'guide':'Masha',
            'guide_photo':'..assets/avatar.png',
            'tour_description': "kd,dm,mdmsdflk",
            'tour_map':'../assets/map1.png',
            'tour_id':2},
        ]
        } 
    },
    methods: {
    }
  }
</script>

<style>
/* .tours-scroll{
    
} */
</style>