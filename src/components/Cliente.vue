<template>
  <v-row justify="center" ref="stats">
    <v-col cols="11" sm="8" md="8" lg="6">
      <v-card>
        <v-card-title class="headline justify-center">Cliente</v-card-title>
        <v-card-text>
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
        </v-card-text>
      </v-card>
      <v-btn block color="primary" @click="voltar">Submeter</v-btn>
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
    infoAtendimento: "melhor",
    infoAtendimentoOutraLoja: "melhor",
    nps: '5'
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    }
  }
};
</script>