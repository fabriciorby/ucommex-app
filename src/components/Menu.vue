<template>
  <v-container>
    <!-- HEADER -->
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/cns.png')" class="my-3" contain height="100" />
      </v-col>
    </v-row>
    <!-- FORMULARIO -->
    <Search v-model="data" />
    <!-- MENU -->
    <v-row v-if="mostraMenu" ref="menu" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-container>
          <h2 class="text-center">{{data.nome | capitalize}}</h2>
          <v-row justify="space-around">
            <v-col v-for="item in menu" :key="item.title" cols="6">
              <v-btn color="primary" block height="150px" @click="toggle(item)">
                <div class="flex-column justify-space-between">
                  <div class="mb-6">
                    <v-icon x-large>{{item.icon}}</v-icon>
                  </div>
                  <div>{{item.title}}</div>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- CARDS -->
    <Dados :data="data" v-if="estados.dados" v-model="estados.dados" />
    <Preferencias :data="data" v-if="estados.preferencias" v-model="estados.preferencias" />
    <Cliente :cpf="data.cpf" v-if="estados.cliente" v-model="estados.cliente" />
    <Vendedor :cpf="data.cpf" v-if="estados.vendedor" v-model="estados.vendedor" />
  </v-container>
</template>

<script>
import Preferencias from "@/components/Preferencias";
import Dados from "@/components/Dados";
import Cliente from "@/components/Cliente";
import Vendedor from "@/components/Vendedor";
import Search from "@/components/Search";

export default {
  components: {
    Preferencias,
    Dados,
    Cliente,
    Vendedor,
    Search
  },
  name: "Menu",
  data: () => ({
    data: "",
    estados: {
      dados: false,
      preferencias: false,
      cliente: false,
      vendedor: false
    },
    menu: [
      {
        title: "Dados",
        icon: "fa-user",
        id: "dados"
      },
      {
        title: "Preferências",
        icon: "fa-smile",
        id: "pref"
      },
      {
        title: "Cliente",
        icon: "fa-comment-alt",
        id: "cliente"
      },
      {
        title: "Vendedor",
        icon: "fa-file-signature",
        id: "vendedor"
      }
    ]
  }),
  computed: {
    mostraMenu: function() {
      return (
        !(
          this.estados.dados ||
          this.estados.preferencias ||
          this.estados.cliente ||
          this.estados.vendedor
        ) && this.data != ""
      );
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
  methods: {
    toggle: function(item) {
      console.log(this.estados.dados);
      if (item.id == "dados") this.estados.dados = !this.estados.dados;
      if (item.id == "pref")
        this.estados.preferencias = !this.estados.preferencias;
      if (item.id == "cliente") this.estados.cliente = !this.estados.cliente;
      if (item.id == "vendedor") this.estados.vendedor = !this.estados.vendedor;
      console.log(this.estados.dados);
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