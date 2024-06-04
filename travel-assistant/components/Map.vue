<template>
  <div id="map" class="h-[500px] w-[900px] mt-10"></div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
const center = { lat: 43.769562, lng: 11.255814 };
export default {
  mounted() {
    const map = tt.map({
      key: "JstOGCglq4XYdxHK0KHBC5T68MTMb7ji",
      container: "map",
      center: center,
      zoom: 15,
    });

    const marker = new tt.Marker({ color: '#afc125'}).setLngLat(center).addTo(map);

    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
},
};
</script>
