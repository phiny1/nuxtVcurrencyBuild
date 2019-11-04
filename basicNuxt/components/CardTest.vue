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
      v-card-text
        h1 Social Sharing Buttons
        social-sharing(
          :url="socialSharing.url"
          :title="socialSharing.title"
          :description="socialSharing.description"
          :quote="socialSharing.quote"
          :hashtags="socialSharing.hashtags"
          :twitter-user="socialSharing.twitterUser"
          inline-template
        )
          div
            network(network="twitter")
              VBtn.light-blue--text(small light text fab)
                VIcon(medium)
                  | mdi mdi-twitter
            network(network="facebook")
              VBtn.blue--text.text--darken-4(small light text fab)
                VIcon(medium)
                  | mdi mdi-facebook
            network(network="linkedin")
              VBtn.blue--text.text--darken-3(small light text fab)
                VIcon(medium)
                  | mdi mdi-linkedin
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
      preferences: 0,
      socialSharing: {
        url: 'google.com',
        title: 'testing',
        description: 'just test',
        quote: 'quoting',
        hashtags: '#test',
        twitterUser: 'hohoho'
      }
    }
  }
}
</script>

<style>

</style>