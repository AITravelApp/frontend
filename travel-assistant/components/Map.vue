<template>
  <div :id="mapId" class="h-[500px] w-[900px] mt-10"></div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
const config = useRuntimeConfig();

export default {
  props: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    mapId: {
      type: String,
      default: "map",
    },
  },
  mounted() {
    const map = tt.map({
      key: config.public.tomKey,
      container: this.mapId,
      center: { lat: this.lat, lng: this.lng },
      zoom: 15,
    });

    const marker = new tt.Marker({ color: "#afc125" })
      .setLngLat({ lat: this.lat, lng: this.lng })
      .addTo(map);

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
  },
};
</script>

