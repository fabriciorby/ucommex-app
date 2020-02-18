<template>
  <v-row class="text-center" justify="center">
    <v-col col="10" sm="8" md="8" lg="6">
      <v-form ref="form" :lazy-validation="true" @submit.prevent="submit">
        <v-text-field
          hint="Digite apenas números."
          class="inputNumber"
          type="number"
          outlined
          clearable
          v-model="cpf"
          counter
          :rules="cpfRules"
          label="CPF"
          required
        ></v-text-field>
        <v-btn color="primary" class="mr-4" @click="submit">Submit</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  model: {
    prop: "data",
    event: "change"
  },
  data: () => ({
    cpf: "",
    cpfRules: [
      v => !!v || "CPF é obrigatório"
      //   v => (v && v.length >= 11) || "O CPF deve ter 11 caracteres."
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .get(
            "https://ucommex-resource-server.herokuapp.com/customer/stats?cpf=" +
              this.cpf,
            {
              crossdomain: true
            }
          )
          .then(response => {
            this.$emit("change", response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  watch: {
    data: function() {
      this.$nextTick(function() {
        this.$vuetify.goTo(this.$refs.menu, {
          duration: 400,
          offset: 0,
          easing: "easeInOutCubic"
        });
      });
    }
  }
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>