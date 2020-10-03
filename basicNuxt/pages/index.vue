<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <card-test/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import CardTest from "~/components/CardTest.vue";

export default {
  components: {
    Logo,
    VuetifyLogo,
    CardTest
  },
  data() {
    return {
      value: "1258"
    };
  }
};
</script>
