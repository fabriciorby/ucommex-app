<template>
  <v-row justify="center" ref="stats">
    <v-col cols="11" sm="8" md="8" lg="6">
      <v-card>
        <v-card-title class="headline justify-center">Vendedor</v-card-title>
        <v-card-text>
          <v-radio-group dense label="1. Converteu?" v-model="converteu" :mandatory="false">
            <v-radio label="Sim" :value="true"></v-radio>
            <v-radio label="Nao" :value="false"></v-radio>
          </v-radio-group>
          <v-radio-group v-if="!converteu" class="mt-0" dense label="Qual motivo?">
            <v-radio label="Falta do produto de interesse (Tamanho, cor, modelo)" value="a"></v-radio>
            <v-radio label="Preço" value="b"></v-radio>
            <v-radio label="Pesquisa de preço" value="c"></v-radio>
            <v-radio label="Passeando" value="d"></v-radio>
          </v-radio-group>
          <v-radio-group
            dense
            label="2. Qual a sua percepção sobre o perfil de atendimento do cliente?"
            v-model="percepcao"
          >
            <v-radio label="Carente" value="a"></v-radio>
            <v-radio label="Auto-serviço" value="b"></v-radio>
            <v-radio label="Impaciente" value="c"></v-radio>
            <v-radio label="Abordagem Moderada" value="d"></v-radio>
          </v-radio-group>
          <v-radio-group
            dense
            label="3. Os dados pessoais do cliente ajudaram na abordagem?"
            v-model="dadosPessoaisAjudaram"
          >
            <v-radio label="Sim" :value="true"></v-radio>
            <v-radio label="Não" :value="false"></v-radio>
          </v-radio-group>
          <v-text-field
            v-if="!dadosPessoaisAjudaram"
            outlined
            placeholder="Digite aqui"
            dense
            label="Faltou alguma informação?"
          ></v-text-field>
          <v-radio-group
            dense
            label="4. Os dados históricos do cliente ajudaram no atendimento?"
            v-model="dadosHistoricosAjudaram"
          >
            <v-radio label="Sim" :value="true"></v-radio>
            <v-radio label="Não" :value="false"></v-radio>
          </v-radio-group>
          <v-text-field
            v-if="!dadosHistoricosAjudaram"
            outlined
            placeholder="Digite aqui"
            dense
            label="Faltou alguma informação?"
          ></v-text-field>
          <v-radio-group
            dense
            label="5. As informações ajudaram na empatia/experiência de compra do cliente?"
            v-model="informacoesAjudaram"
          >
            <v-radio label="Sim" :value="true"></v-radio>
            <v-radio label="Não" :value="false"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-card>
      <v-btn block color="primary" @click="voltar">Submeter</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Vendedor",
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
    radios: "radio-1",
    converteu: true,
    dadosPessoaisAjudaram: true,
    dadosHistoricosAjudaram: true,
    informacoesAjudaram: true,
    percepcao: 'a'
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    }
  }
};
</script>