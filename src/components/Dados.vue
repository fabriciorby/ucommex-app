<template>
  <v-row justify="center" ref="stats">
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
      <v-btn block color="primary" class="mr-4" @click="voltar">Voltar</v-btn>
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
      <v-btn block color="primary" class="mr-4" @click="voltar">Voltar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Dados",
  props: ["data"],
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
    height: 300,
    fixedHeader: true
  }),
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
  methods: {
    voltar() {
      this.$emit("show", false);
    }
  }
};
</script>