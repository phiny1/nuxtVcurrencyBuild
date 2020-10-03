<template lang="pug">
  v-card(color="secondary")
    client-only
      v-card-text
        h1 v-currency-field
        v-currency-field(
            v-bind="currency_config"
            v-model="preferences"
            hide-details
        )
</template>

<script>
export default {
  data() {
    return {
      currency_config: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false,
        allowBlank: false,
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER
      },
      preferences: 0
    }
  }
}
</script>

<style>

</style>