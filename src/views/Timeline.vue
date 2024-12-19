<template>
    <h1>Timeline João & Myn ♥</h1>
    <div v-if="!loading" class="container">
        <div class="scroll">
            <div class="timeline" id="timelineContainer" :style="{'width': `${(images_size + 1) * 240}px`}">
                <div class="timeline-item" v-for="(img, index) in images">
                    <div class="marker"></div>
                    <div class="timeline-content" :class="index % 2 == 0 ? 'top' : 'bottom'">
                        <div class="timeline-date">{{ img.date }}</div>
                        <img :src="data + img.content" alt="fevereiro">
                        <h5>{{ img.phrase }}</h5>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="marker"></div>
                    <div class="timeline-content" :class="images_size % 2 == 0 ? 'top' : 'bottom'">
                        <div class="timeline-date">...</div>
                        <h5>Que essa linha se estique muito muito muito ainda...</h5>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div v-else class="container">
        <div class="preloader">
            <Preloader />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue"
import Preloader from "../components/Preloader.vue"
import content from '../../content.json'

export default defineComponent({
    async setup() {           
        const images = ref()
        const images_size = ref()
        const data = ref("data:image/")
        const loading = ref(true)

        return {
            images,
            images_size,
            data,
            loading,
        }
    },    
    methods: {
        async getImages() {
            try {
                setTimeout(() => {
                    const data = content // Usando o JSON importado
                    this.images_size = data.length
                    this.images = data
                    this.loading = false
                }, 2000) // 2000ms = 2 seconds delay
            } catch (error) {
                console.error(error);
            }
        }
    }, 
    beforeMount() {
        this.getImages()
    },
    components: {
        Preloader
    }
})
</script>