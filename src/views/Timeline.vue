<template>
    <h1>Timeline João & Myn ♥</h1>
    <div class="container">
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
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
    async setup() {           
        const images = ref()
        const images_size = ref()
        const data = ref("data:image/")

        return {
            images,
            images_size,
            data,
        }
    },    
    methods: {
        async getImages() {
            try {
                const response = await fetch('./content.json')
                const data = await response.json()
                this.images_size = data.length
                this.images = data;
            } catch (error) {
                console.error(error);
            }
        }
    }, 
    beforeMount() {
        this.getImages()
    }
})
</script>
  