<template>
  <v-row justify="center" ref="stats">
    <v-col cols="12" sm="10" md="12" lg="10">
      <v-card>
        <v-card-title class="headline justify-center">Cliente</v-card-title>
      </v-card>
      <v-btn block color="primary" @click="voltar">Voltar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Cliente",
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    }
  }
};
</script>