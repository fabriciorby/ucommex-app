<template>
  <v-row justify="center" ref="stats">
    <v-col cols="11" sm="8" md="8" lg="6">
      <v-card>
        <v-card-title class="headline justify-center">Cliente</v-card-title>
        <v-card-text>
          <v-form ref="form" :lazy-validation="true" @submit.prevent="submit">
            <v-radio-group
              dense
              label="1. Como foi seu atendimento em relação a sua última compra conosco?"
              v-model="infoAtendimento"
            >
              <v-radio label="Melhor" value="melhor"></v-radio>
              <v-radio label="Pior" value="pior"></v-radio>
              <v-radio label="Igual" value="igual"></v-radio>
            </v-radio-group>
            <v-radio-group
              dense
              label="2. Como foi seu atendimento em relação a sua última compra em outra loja?"
              v-model="infoAtendimentoOutraLoja"
              class="mb-4"
            >
              <v-radio label="Melhor" value="melhor"></v-radio>
              <v-radio label="Pior" value="pior"></v-radio>
              <v-radio label="Igual" value="igual"></v-radio>
            </v-radio-group>
            <v-label>3. Qual a chance de você recomendar a nossa empresa para um amigo?</v-label>
            <v-slider
              v-model="nps"
              :tick-labels="['0','1','2','3','4','5','6','7','8','9','10']"
              ticks="always"
              tick-size="2"
              persistent-hint
              max="10"
              thumb-label
            ></v-slider>
          </v-form>
        </v-card-text>
        <v-row>
          <v-col cols="6" class="pa-0 pl-3">
            <v-btn block tile large color="primary" :disabled="loading" @click="voltar">Voltar</v-btn>
          </v-col>
          <v-col cols="6" class="pa-0 pr-3">
            <v-btn block tile large color="primary" :loading="loading" @click="submit">Submeter</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Cliente",
  props: ["cpf"],
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
    infoAtendimento: "melhor",
    infoAtendimentoOutraLoja: "melhor",
    nps: "5"
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    },
    submit() {
      this.loading = true;
      let data = {
        cpf: this.cpf,
        infoAtendimento: this.infoAtendimento,
        infoAtendimentoOutraLoja: this.infoAtendimentoOutraLoja,
        nps: this.nps
      };
      axios
        .post(`${process.env.VUE_APP_API}/feedback/customer`, data, {
          crossdomain: true
        })
        .then(() => {
          this.loading = false;
          this.voltar();
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    }
  }
};
</script>