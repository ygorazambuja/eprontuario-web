<template>
  <v-container>
    <h1>Vue Class Component</h1>

    <h4>{{ testGetter }}</h4>

    <v-btn @click="printHello"> Print hello </v-btn>

    <y-button content="Texto" :on-click="printHello"></y-button>
  </v-container>
</template>

<script lang="tsx">
import Component, { mixins } from 'vue-class-component'
import YButton from '~/shared/components/YButton.vue'
import { mediaQueryMixin, ciaoMixin, helloMixin } from '~/shared/mixins'

@Component({
  components: { YButton },
})
export default class VueClass extends mixins(
  mediaQueryMixin,
  ciaoMixin,
  helloMixin
) {
  get testGetter() {
    return 'getter'
  }

  printHello() {
    console.log(this.ciaoMessage)
    console.log(this.helloMessage)
    console.log('smallScreenAndDown: ', this.smallScreenAndDown)
  }
}
</script>
