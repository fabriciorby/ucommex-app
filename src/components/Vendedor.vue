<template>
  <v-row justify="center" ref="stats">
    <v-col cols="11" sm="8" md="8" lg="6">
      <v-card>
        <v-card-title class="headline justify-center">Vendedor</v-card-title>
        <v-card-text>
          <v-form ref="form" :lazy-validation="true" @submit.prevent="submit">
            <v-radio-group dense label="1. Converteu?" v-model="converteu" :mandatory="false">
              <v-radio label="Sim" :value="true"></v-radio>
              <v-radio label="Nao" :value="false"></v-radio>
            </v-radio-group>
            <v-radio-group
              v-if="!converteu"
              class="mt-0"
              v-model="motivoNaoConverteu"
              dense
              label="Qual motivo?"
            >
              <v-radio
                label="Falta do produto de interesse (Tamanho, cor, modelo)"
                value="Falta do produto de interesse"
              ></v-radio>
              <v-radio label="Preço" value="Preço"></v-radio>
              <v-radio label="Pesquisa de preço" value="Pesquisa de preço"></v-radio>
              <v-radio label="Passeando" value="Passeando"></v-radio>
            </v-radio-group>
            <v-radio-group
              dense
              label="2. Qual a sua percepção sobre o perfil de atendimento do cliente?"
              v-model="percepcao"
            >
              <v-radio label="Carente" value="Carente"></v-radio>
              <v-radio label="Auto-serviço" value="Auto-serviço"></v-radio>
              <v-radio label="Impaciente" value="Impaciente"></v-radio>
              <v-radio label="Abordagem Moderada" value="Abordagem Moderada"></v-radio>
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
              v-model="motivoDadosPessoais"
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
              v-model="motivoDadosHistoricos"
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
            <v-text-field
              outlined
              placeholder="Digite aqui"
              v-model="idLojista"
              label="Identificação do lojista"
            ></v-text-field>
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
  name: "Vendedor",
  props: ["cpf"],
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
    loading: false,
    idLojista: "",
    converteu: true,
    motivoNaoConverteu: "",
    dadosPessoaisAjudaram: true,
    motivoDadosPessoais: "",
    dadosHistoricosAjudaram: true,
    motivoDadosHistoricos: "",
    informacoesAjudaram: true,
    percepcao: "Carente"
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let data = {
          idLojista: this.idLojista,
          cpfCliente: this.cpf,
          converteu: this.converteu,
          motivoNaoConverteu: this.motivoNaoConverteu,
          dadosPessoaisAjudaram: this.dadosPessoaisAjudaram,
          motivoDadosPessoais: this.motivoDadosPessoais,
          dadosHistoricosAjudaram: this.dadosHistoricosAjudaram,
          motivoDadosHistoricos: this.motivoDadosHistoricos,
          informacoesAjudaram: this.informacoesAjudaram,
          percepcao: this.percepcao
        };
        axios
          .post(`${process.env.VUE_APP_API}/feedback/employee`, data, {
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
  }
};
</script>