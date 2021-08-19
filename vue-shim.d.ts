declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare namespace JSX {
  interface IntrinsicElements {
    foo: any
  }
}
