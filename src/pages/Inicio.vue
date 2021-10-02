<template>
  <q-page>
    <div>
      <iframe
        width="420"
        height="215"
        src="https://www.youtube.com/embed/zZQkRiv7E38"
        title="Video EXPLICANDO"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="q-ml-sm">
      <label class="text-h6 text-white">Galeria</label>
    </div>
    <div class="q-pa-md">
      <q-carousel height="125px" animated arrows v-model="slide" infinite :autoplay="autoplay">
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',
  data() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    };
  },
};
</script>
