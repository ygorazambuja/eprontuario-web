<template>
  <v-responsive max-width="300">
    <v-autocomplete
      v-model="select"
      :items="documentos"
      :search-input.sync="search"
      item-text="titulo"
      item-value="symbol"
      cache-items
      class="mx-4"
      hide-no-data
      hide-details
      dense
      flat
      label="Procedimentos"
      solo-inverted
      return-object
    ></v-autocomplete>
  </v-responsive>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VAutoCompleteInput',
  data: () => ({
    search: '',
    select: null,
    documentos: [],
  }),
  watch: {
    select(val) {
      this.search = ''
      if (this.$route.path !== `/home/documento/${val.id}`) {
        this.$router.push(`/home/documento/${val.id}`)
      }
    },
  },
})
</script>

<style></style>
