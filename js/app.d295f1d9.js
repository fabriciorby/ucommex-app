(function(e){function a(a){for(var o,n,i=a[0],l=a[1],d=a[2],u=0,v=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(a);while(v.length)v.shift()();return s.push.apply(s,d||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],o=!0,i=1;i<t.length;i++){var l=t[i];0!==r[l]&&(o=!1)}o&&(s.splice(a--,1),e=n(n.s=t[0]))}return e}var o={},r={app:0},s=[];function n(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)n.d(t,o,function(a){return e[a]}.bind(null,o));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var d=0;d<i.length;d++)a(i[d]);var c=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"02d9":function(e,a,t){e.exports=t.p+"img/cns.90b26370.png"},"0782":function(e,a,t){"use strict";var o=t("8220"),r=t.n(o);r.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("a026"),r=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("v-spacer"),o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:t("e0b4"),transition:"scale-transition",width:"40"}}),o("v-toolbar-title",[e._v("UcommeX")]),o("v-spacer")],1),o("v-content",[o("Menu")],1)],1)},s=[],n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:t("02d9"),contain:"",height:"100"}})],1)],1),o("Search",{model:{value:e.data,callback:function(a){e.data=a},expression:"data"}}),e.mostraMenu?o("v-row",{ref:"menu",attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"8",md:"8",lg:"6"}},[o("v-container",[o("h2",{staticClass:"text-center"},[e._v(e._s(e._f("capitalize")(e.data.nome)))]),o("v-row",{attrs:{justify:"space-around"}},e._l(e.menu,(function(a){return o("v-col",{key:a.title,attrs:{cols:"6"}},[o("v-btn",{attrs:{color:"primary",block:"",height:"150px"},on:{click:function(t){return e.toggle(a)}}},[o("div",{staticClass:"flex-column justify-space-between"},[o("div",{staticClass:"mb-6"},[o("v-icon",{attrs:{"x-large":""}},[e._v(e._s(a.icon))])],1),o("div",[e._v(e._s(a.title))])])])],1)})),1)],1)],1)],1):e._e(),e.estados.dados?o("Dados",{attrs:{data:e.data},model:{value:e.estados.dados,callback:function(a){e.$set(e.estados,"dados",a)},expression:"estados.dados"}}):e._e(),e.estados.preferencias?o("Preferencias",{attrs:{data:e.data},model:{value:e.estados.preferencias,callback:function(a){e.$set(e.estados,"preferencias",a)},expression:"estados.preferencias"}}):e._e(),e.estados.cliente?o("Cliente",{model:{value:e.estados.cliente,callback:function(a){e.$set(e.estados,"cliente",a)},expression:"estados.cliente"}}):e._e(),e.estados.vendedor?o("Vendedor",{model:{value:e.estados.vendedor,callback:function(a){e.$set(e.estados,"vendedor",a)},expression:"estados.vendedor"}}):e._e()],1)},i=[],l=(t("a15b"),t("d81d"),t("fb6a"),t("ac1f"),t("1276"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{ref:"stats",attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"12",lg:"10"}},[t("v-card",[t("v-card-title",{staticClass:"headline justify-center"},[e._v("Preferencias")]),t("v-card-text",[t("v-simple-table",{attrs:{height:e.height,fixedHeader:e.fixedHeader}},[t("thead",[t("tr",[t("th",[e._v("Categoria")]),t("th",[e._v("Linha")]),t("th",[e._v("Cor")]),t("th",[e._v("Tamanho")]),t("th",[e._v("Total")])])]),t("tbody",e._l(e.data.preferencias,(function(a){return t("tr",{key:a.idProduto},[t("td",[e._v(e._s(a.categoria))]),t("td",[e._v(e._s(a.linha))]),t("td",[e._v(e._s(a.cor))]),t("td",[e._v(e._s(a.tamanho))]),t("td",[e._v(e._s(a.quantidadeTotal))])])})),0)])],1)],1),t("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.voltar}},[e._v("Voltar")])],1)],1)}),d=[],c={name:"Preferencias",props:["data"],model:{prop:"teste",event:"show"},data:function(){return{height:300,fixedHeader:!0}},methods:{voltar:function(){this.$emit("show",!1)}}},u=c,v=t("2877"),f=t("6544"),m=t.n(f),p=t("8336"),b=t("b0af"),h=t("99d9"),_=t("62ad"),g=t("0fd9"),V=t("1f4f"),x=Object(v["a"])(u,l,d,!1,null,null,null),C=x.exports;m()(x,{VBtn:p["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:_["a"],VRow:g["a"],VSimpleTable:V["a"]});var j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{ref:"stats",attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"10",md:"6",lg:"5"}},[t("v-card",[t("v-card-title",{staticClass:"headline justify-center"},[e._v(e._s(e._f("capitalize")(e.data.nome)))]),t("v-card-text",[t("v-simple-table",{attrs:{height:e.height,fixedHeader:e.fixedHeader}},[t("tbody",[t("tr",[t("td",[e._v("Data de nascimento:")]),t("td",[e._v(e._s(e._f("moment")(e.data.dataNascimento,"DD/MM/YYYY")))])]),t("tr",[t("td",[e._v("Data de cadastro:")]),t("td",[e._v(e._s(e._f("moment")(e.data.dataCadastro,"DD/MM/YYYY")))])]),t("tr",[t("td",[e._v("Compras já feitas:")]),t("td",[e._v(e._s(e.data.quantidadeCompras))])]),t("tr",[t("td",[e._v("Loja Preferencial:")]),t("td",[e._v(e._s(e.data.lojaPreferida.nomeLoja)+" ("+e._s(e.data.lojaPreferida.quantidadeCompras)+")")])]),t("tr",[t("td",[e._v("Vendedor Preferido:")]),t("td",[e._v(e._s(e.data.vendedorPreferido.nomeVendedor)+" ("+e._s(e.data.vendedorPreferido.quantidadeCompras)+")")])]),t("tr",[t("td",[e._v("Ticket Médio:")]),t("td",[e._v(e._s(e.data.ticketMedio))])])])])],1)],1),t("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.voltar}},[e._v("Voltar")])],1),t("v-col",{attrs:{cols:"12",sm:"10",md:"6",lg:"5"}},[t("v-card",[t("v-card-title",{staticClass:"headline justify-center"},[e._v("Ultimas Compras")]),t("v-card-text",[t("v-simple-table",{attrs:{height:e.height,fixedHeader:e.fixedHeader}},[t("thead",[t("tr",[t("th",[e._v("Data")]),t("th",[e._v("Valor")])])]),t("tbody",e._l(e.data.ultimasCompras,(function(a){return t("tr",{key:a.data},[t("td",[e._v(e._s(e._f("moment")(a.data,"DD/MM/YYYY")))]),t("td",[e._v(e._s(a.totalGasto))])])})),0)])],1)],1),t("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.voltar}},[e._v("Voltar")])],1)],1)},y=[],k={name:"Dados",props:["data"],model:{prop:"teste",event:"show"},data:function(){return{height:300,fixedHeader:!0}},filters:{capitalize:function(e){return e?e.split(" ").map((function(e){return e.toLowerCase()})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):""}},methods:{voltar:function(){this.$emit("show",!1)}}},w=k,P=Object(v["a"])(w,j,y,!1,null,null,null),A=P.exports;m()(P,{VBtn:p["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:_["a"],VRow:g["a"],VSimpleTable:V["a"]});var O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{ref:"stats",attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"11",sm:"8",md:"8",lg:"6"}},[t("v-card",[t("v-card-title",{staticClass:"headline justify-center"},[e._v("Cliente")]),t("v-card-text",[t("v-radio-group",{attrs:{dense:"",label:"1. Como foi seu atendimento em relação a sua última compra conosco?"},model:{value:e.infoAtendimento,callback:function(a){e.infoAtendimento=a},expression:"infoAtendimento"}},[t("v-radio",{attrs:{label:"Melhor",value:"melhor"}}),t("v-radio",{attrs:{label:"Pior",value:"pior"}}),t("v-radio",{attrs:{label:"Igual",value:"igual"}})],1),t("v-radio-group",{staticClass:"mb-4",attrs:{dense:"",label:"2. Como foi seu atendimento em relação a sua última compra em outra loja?"},model:{value:e.infoAtendimentoOutraLoja,callback:function(a){e.infoAtendimentoOutraLoja=a},expression:"infoAtendimentoOutraLoja"}},[t("v-radio",{attrs:{label:"Melhor",value:"melhor"}}),t("v-radio",{attrs:{label:"Pior",value:"pior"}}),t("v-radio",{attrs:{label:"Igual",value:"igual"}})],1),t("v-label",[e._v("3. Qual a chance de você recomendar a nossa empresa para um amigo?")]),t("v-slider",{attrs:{"tick-labels":["0","1","2","3","4","5","6","7","8","9","10"],ticks:"always","tick-size":"2","persistent-hint":"",max:"10","thumb-label":""},model:{value:e.nps,callback:function(a){e.nps=a},expression:"nps"}})],1)],1),t("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.voltar}},[e._v("Submeter")])],1)],1)},T=[],$={name:"Cliente",model:{prop:"teste",event:"show"},data:function(){return{infoAtendimento:"melhor",infoAtendimentoOutraLoja:"melhor",nps:"5"}},methods:{voltar:function(){this.$emit("show",!1)}}},M=$,S=t("24c9"),D=t("67b6"),H=t("43a6"),L=t("ba0d"),R=Object(v["a"])(M,O,T,!1,null,null,null),Y=R.exports;m()(R,{VBtn:p["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:_["a"],VLabel:S["a"],VRadio:D["a"],VRadioGroup:H["a"],VRow:g["a"],VSlider:L["a"]});var q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{ref:"stats",attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"11",sm:"8",md:"8",lg:"6"}},[t("v-card",[t("v-card-title",{staticClass:"headline justify-center"},[e._v("Vendedor")]),t("v-card-text",[t("v-radio-group",{attrs:{dense:"",label:"1. Converteu?",mandatory:!1},model:{value:e.converteu,callback:function(a){e.converteu=a},expression:"converteu"}},[t("v-radio",{attrs:{label:"Sim",value:!0}}),t("v-radio",{attrs:{label:"Nao",value:!1}})],1),e.converteu?e._e():t("v-radio-group",{staticClass:"mt-0",attrs:{dense:"",label:"Qual motivo?"}},[t("v-radio",{attrs:{label:"Falta do produto de interesse (Tamanho, cor, modelo)",value:"a"}}),t("v-radio",{attrs:{label:"Preço",value:"b"}}),t("v-radio",{attrs:{label:"Pesquisa de preço",value:"c"}}),t("v-radio",{attrs:{label:"Passeando",value:"d"}})],1),t("v-radio-group",{attrs:{dense:"",label:"2. Qual a sua percepção sobre o perfil de atendimento do cliente?"},model:{value:e.percepcao,callback:function(a){e.percepcao=a},expression:"percepcao"}},[t("v-radio",{attrs:{label:"Carente",value:"a"}}),t("v-radio",{attrs:{label:"Auto-serviço",value:"b"}}),t("v-radio",{attrs:{label:"Impaciente",value:"c"}}),t("v-radio",{attrs:{label:"Abordagem Moderada",value:"d"}})],1),t("v-radio-group",{attrs:{dense:"",label:"3. Os dados pessoais do cliente ajudaram na abordagem?"},model:{value:e.dadosPessoaisAjudaram,callback:function(a){e.dadosPessoaisAjudaram=a},expression:"dadosPessoaisAjudaram"}},[t("v-radio",{attrs:{label:"Sim",value:!0}}),t("v-radio",{attrs:{label:"Não",value:!1}})],1),e.dadosPessoaisAjudaram?e._e():t("v-text-field",{attrs:{outlined:"",placeholder:"Digite aqui",dense:"",label:"Faltou alguma informação?"}}),t("v-radio-group",{attrs:{dense:"",label:"4. Os dados históricos do cliente ajudaram no atendimento?"},model:{value:e.dadosHistoricosAjudaram,callback:function(a){e.dadosHistoricosAjudaram=a},expression:"dadosHistoricosAjudaram"}},[t("v-radio",{attrs:{label:"Sim",value:!0}}),t("v-radio",{attrs:{label:"Não",value:!1}})],1),e.dadosHistoricosAjudaram?e._e():t("v-text-field",{attrs:{outlined:"",placeholder:"Digite aqui",dense:"",label:"Faltou alguma informação?"}}),t("v-radio-group",{attrs:{dense:"",label:"5. As informações ajudaram na empatia/experiência de compra do cliente?"},model:{value:e.informacoesAjudaram,callback:function(a){e.informacoesAjudaram=a},expression:"informacoesAjudaram"}},[t("v-radio",{attrs:{label:"Sim",value:!0}}),t("v-radio",{attrs:{label:"Não",value:!1}})],1)],1)],1),t("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.voltar}},[e._v("Submeter")])],1)],1)},F=[],B={name:"Vendedor",model:{prop:"teste",event:"show"},data:function(){return{radios:"radio-1",converteu:!0,dadosPessoaisAjudaram:!0,dadosHistoricosAjudaram:!0,informacoesAjudaram:!0,percepcao:"a"}},methods:{voltar:function(){this.$emit("show",!1)}}},E=B,I=t("8654"),z=Object(v["a"])(E,q,F,!1,null,null,null),N=z.exports;m()(z,{VBtn:p["a"],VCard:b["a"],VCardText:h["a"],VCardTitle:h["b"],VCol:_["a"],VRadio:D["a"],VRadioGroup:H["a"],VRow:g["a"],VTextField:I["a"]});var U=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[t("v-col",{attrs:{col:"10",sm:"8",md:"8",lg:"6"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":!0},on:{submit:function(a){return a.preventDefault(),e.submit(a)}}},[t("v-text-field",{staticClass:"inputNumber",attrs:{hint:"Digite apenas números.",type:"number",outlined:"",clearable:"",counter:"",rules:e.cpfRules,label:"CPF",required:""},model:{value:e.cpf,callback:function(a){e.cpf=a},expression:"cpf"}}),t("v-btn",{attrs:{color:"primary",loading:e.loading},on:{click:e.submit}},[e._v("Procurar")])],1)],1)],1)},G=[],Q=t("bc3a"),J=t.n(Q),X={name:"Search",model:{prop:"data",event:"change"},data:function(){return{loading:!1,cpf:"",cpfRules:[function(e){return!!e||"CPF é obrigatório"}]}},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,J.a.get("https://ucommex-resource-server.herokuapp.com/customer/stats?cpf="+this.cpf,{crossdomain:!0}).then((function(a){e.loading=!1,e.$emit("change",a.data)})).catch((function(e){console.log(e)})))}},watch:{data:function(){this.$nextTick((function(){this.$vuetify.goTo(this.$refs.menu,{duration:400,offset:0,easing:"easeInOutCubic"})}))}}},K=X,W=(t("0782"),t("4bd4")),Z=Object(v["a"])(K,U,G,!1,null,null,null),ee=Z.exports;m()(Z,{VBtn:p["a"],VCol:_["a"],VForm:W["a"],VRow:g["a"],VTextField:I["a"]});var ae={components:{Preferencias:C,Dados:A,Cliente:Y,Vendedor:N,Search:ee},name:"Menu",data:function(){return{data:"",cpf:"",estados:{dados:!1,preferencias:!1,cliente:!1,vendedor:!1},menu:[{title:"Dados",icon:"fa-user",id:"dados"},{title:"Preferências",icon:"fa-smile",id:"pref"},{title:"Cliente",icon:"fa-comment-alt",id:"cliente"},{title:"Vendedor",icon:"fa-file-signature",id:"vendedor"}]}},computed:{mostraMenu:function(){return!(this.estados.dados||this.estados.preferencias||this.estados.cliente||this.estados.vendedor)&&""!=this.data}},filters:{capitalize:function(e){return e?e.split(" ").map((function(e){return e.toLowerCase()})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):""}},methods:{toggle:function(e){console.log(this.estados.dados),"dados"==e.id&&(this.estados.dados=!this.estados.dados),"pref"==e.id&&(this.estados.preferencias=!this.estados.preferencias),"cliente"==e.id&&(this.estados.cliente=!this.estados.cliente),"vendedor"==e.id&&(this.estados.vendedor=!this.estados.vendedor),console.log(this.estados.dados)}}},te=ae,oe=(t("efa6"),t("a523")),re=t("132d"),se=t("adda"),ne=Object(v["a"])(te,n,i,!1,null,null,null),ie=ne.exports;m()(ne,{VBtn:p["a"],VCol:_["a"],VContainer:oe["a"],VIcon:re["a"],VImg:se["a"],VRow:g["a"]});var le={name:"App",components:{Menu:ie},data:function(){return{}}},de=le,ce=t("7496"),ue=t("40dc"),ve=t("a75b"),fe=t("2fa4"),me=t("2a7f"),pe=Object(v["a"])(de,r,s,!1,null,null,null),be=pe.exports;m()(pe,{VApp:ce["a"],VAppBar:ue["a"],VContent:ve["a"],VImg:se["a"],VSpacer:fe["a"],VToolbarTitle:me["a"]});t("15f5");var he=t("f309");o["a"].use(he["a"]);var _e=new he["a"]({icons:{iconfont:"fa"},theme:{dark:!1}});o["a"].config.productionTip=!1,o["a"].use(t("2ead")),new o["a"]({vuetify:_e,render:function(e){return e(be)}}).$mount("#app")},8220:function(e,a,t){},dc84:function(e,a,t){},e0b4:function(e,a,t){e.exports=t.p+"img/400dpiLogo.441fe7b9.png"},efa6:function(e,a,t){"use strict";var o=t("dc84"),r=t.n(o);r.a}});
//# sourceMappingURL=app.d295f1d9.js.map