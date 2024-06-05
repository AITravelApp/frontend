<template>
  <div>
    <h1>Recommendations List</h1>
    <div v-if="recommendations.length">
      <div v-for="recommendation in recommendations" :key="recommendation.id">
        <h2>{{ recommendation.activity_name }}</h2>
        <p>{{ recommendation.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getRecommendations, type Recommendation } from '~/server/graphqlService';

export default defineComponent({
  setup() {
    const recommendations = ref<Recommendation[]>([]);

    onMounted(async () => {
      console.log('Component mounted, calling getRecommendations'); // Console log for testing
      try {
        const response = await getRecommendations();
        recommendations.value = response;
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    });

    return {
      recommendations,
    };
  },
});
</script>
