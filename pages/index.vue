<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { passwordValidation } from '~/shared/helpers'
import { Gender } from '~/shared/validators/gender'
// import { zipCode } from '~/shared/validators/zipCode'
// import zipCodeDecorator from '~/shared/validators/zipCodeDecorator'
// import { capitalize } from '~/shared/helpers'
export default Vue.extend({
  data: () => ({
    sex: '' as Gender,
  }),

  mounted() {
    // this.sex = 2
    // this.sex = 'U'
    // this.sex = []
    // console.log(capitalize('ola mundo'))
    // const cep = zipCode(2)
    // const cep = zipCode('12312')
    // console.log(cep)
    // const cepWithValidator = zipCodeDecorator.isValid('79410000')
    // const cepWithValidator = zipCodeDecorator.randomMethod('79410000')
    // console.log(cepWithValidator)

    const password = '12312312'
    console.log(passwordValidation(password))
  },
  methods: {},
})
</script>
