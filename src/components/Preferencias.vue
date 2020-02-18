<template>
  <v-row justify="center" ref="stats">
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
      <v-btn block color="primary" class="mr-4" @click="voltar">Voltar</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Preferencias",
  props: ["data"],
  model: {
    prop: "teste",
    event: "show"
  },
  data: () => ({
    height: 300,
    fixedHeader: true
  }),
  methods: {
    voltar() {
      this.$emit("show", false);
    }
  }
};
</script>