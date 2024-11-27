<template>
  <div class="main_card_details">
    <v-card
      :loading="loading"
      class="mx-auto my-3"
      width="95%"
      height="600"
    >
      <v-card-title>
        <h4>HOPPY</h4>
      </v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip>reading</v-chip>
          <v-chip>playing guitar</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-title>
        <h4>FAVORITE SPORT</h4>
      </v-card-title>
      <v-card-text>
        <v-chip-group>
          <v-chip class="custom-chip">Petanque</v-chip>
          <v-chip>basketball</v-chip>
          <v-chip>table tennis</v-chip>
          <v-chip>swimming</v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Add custom styles if needed */
</style>
