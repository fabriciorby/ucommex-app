<template>
  <v-container>
    <!-- HEADER -->
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Bem vindo ao UcommeX</h1>
      </v-col>
    </v-row>
    <!-- FORMULARIO -->
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
      <v-col cols="12"></v-col>
    </v-row>
    <!-- CARDS -->
    <v-row justify="center" v-if="data" ref="stats">
      <v-col cols="12" sm="10" md="6" lg="5">
        <v-card>
          <v-card-title class="headline justify-center">{{data.nome | capitalize}}</v-card-title>
          <v-card-text>
            <v-simple-table :height="height" :fixedHeader="fixedHeader">
              <tbody>
                <tr>
                  <td>Data de nascimento:</td>
                  <td>{{data.dataNascimento | moment("DD/MM/YYYY")}}</td>
                </tr>
                <tr>
                  <td>Data de cadastro:</td>
                  <td>{{data.dataCadastro | moment("DD/MM/YYYY")}}</td>
                </tr>
                <tr>
                  <td>Compras já feitas:</td>
                  <td>{{data.quantidadeCompras}}</td>
                </tr>
                <tr>
                  <td>Loja Preferencial:</td>
                  <td>{{data.lojaPreferida.nomeLoja}} ({{data.lojaPreferida.quantidadeCompras}})</td>
                </tr>
                <tr>
                  <td>Vendedor Preferido:</td>
                  <td>{{data.vendedorPreferido.nomeVendedor}} ({{data.vendedorPreferido.quantidadeCompras}})</td>
                </tr>
                <tr>
                  <td>Ticket Médio:</td>
                  <td>{{data.ticketMedio}}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="10" md="6" lg="5">
        <v-card>
          <v-card-title class="headline justify-center">Ultimas Compras</v-card-title>
          <v-card-text>
            <v-simple-table :height="height" :fixedHeader="fixedHeader">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data.ultimasCompras" :key="item.data">
                  <td>{{ item.data | moment("DD/MM/YYYY")}}</td>
                  <td>{{ item.totalGasto }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="10" md="12" lg="10">
        <v-card>
          <v-card-title class="headline justify-center">Preferencias</v-card-title>
          <v-card-text>
            <v-simple-table :height="height" :fixedHeader="fixedHeader">
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Linha</th>
                  <th>Cor</th>
                  <th>Tamanho</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data.preferencias" :key="item.idProduto">
                  <td>{{ item.categoria }}</td>
                  <td>{{ item.linha }}</td>
                  <td>{{ item.cor }}</td>
                  <td>{{ item.tamanho }}</td>
                  <td>{{ item.quantidadeTotal }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Menu",
  data: () => ({
    cpf: "",
    cpfRules: [
      v => !!v || "CPF é obrigatório",
    //   v => (v && v.length >= 11) || "O CPF deve ter 11 caracteres."
    ],
    data: "",
    height: 300,
    fixedHeader: true
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        axios
          .get("https://ucommex-resource-server.herokuapp.com/customer/stats?cpf=" + this.cpf, {
            crossdomain: true
          })
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      return value
        .split(" ")
        .map(i => i.toLowerCase())
        .map(i => i.charAt(0).toUpperCase() + i.slice(1))
        .join(" ");
    }
  },
  watch: {
    data: function() {
      this.$nextTick(function() {
        this.$vuetify.goTo(this.$refs.stats, {
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
.capitalize {
  text-transform: capitalize;
}

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