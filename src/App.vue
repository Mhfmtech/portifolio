<template>
  <v-app>


    <v-dialog v-model="dialog" max-width="490">
      <v-card>
        <v-card-title class="text-h5"
          style=" font-family: sofia pro !important; font-weight: 500; font-size: 27px !important; color: #1b3765; line-height: 1; text-align: center; word-break: inherit;">
          Fale conosoco e tire suas dúvidas</v-card-title>

        <div style="background-color: #fff; border-radius: 10px; padding: 25px">
          <v-text-field outlined v-model="contato.nome" label="Nome" required>
          </v-text-field>
          <v-text-field outlined v-model="contato.email" label="E-mail" required></v-text-field>
          <v-text-field v-mask="'(##) #####-####'" outlined v-model="contato.telefone" :counter="15" label="Telefone"
            required>
          </v-text-field>
          <v-text-field v-mask="'###.###.###-##'" outlined v-model="contato.cpf" :counter="14" label="CPF" required>
          </v-text-field>
          <v-select :items="items" v-model="contato.orgao" label="Órgão" outlined></v-select>
          <v-btn @click="enviarFormulario" block class="mr-4" type="submit" style="
              background-color: #629e42;
              color: #fff;
              font-family: Sofia pro;
              font-weight: 300;
              border-radius: 5px;
              text-transform: inherit;
            ">
            Enviar
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-main class="bgcTotal">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    dialog: false,
    contato: { nome: "", email: "", telefone: "", cpf: "", orgao: "" },
    items: ["INSS", "SPPREV", "SIAPE", "MARINHA/EXÉRCITO", "OUTROS"],
    itemsENG: [
      { name: "PROMOÇÕES", path: "Home" },
      { name: "QUEM SOMOS", path: "SobreRibus" },
      { name: "DEPOIMENTOS", path: "Equipe" },
      { name: "POR QUE SOMOS IMBATÍVEIS", path: "Equipe" },
    ],
  }),

  methods: {
    enviarFormulario() {
      fetch("https://gestao.abare.cloud/items/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id_formulario: 62, lead: this.contato }),
      })
        .then((response) => response.text())
        .then((data) => {
          window.console.log(data);
          // alert("contato enviado com sucesso");
          this.dialog = false;
          this.snackbar = true;
          this.enviarEmail()
        });
    },

    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },

    enviarEmail() {
      fetch("https://gestao.abare.cloud/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          template: "d-ff5fb7201c8543bca07f7801d2bf5a9c",
          email: "anacarolina@ezeus.com.br",
          strSite: "clubconsig.com.br",
          lead: {
            nome: this.contato.nome,
            email: this.contato.email,
            telefone: this.contato.telefone,
            mensagem: `CPF: ${this.contato.cpf} \n Orgão: ${this.contato.orgao} `,
          }
        }),
      })
        .then((response) => response.text())
        .then(() => {
          this.$router.push("obrigado");

          alert("email enviado!")
        });
    },
  },

  computed: {
    isHome() {
      return this.$route.name == "inicial";
    },

    intBreakPoint() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 0;
        case "sm":
          return 1;
        case "md":
          return 2;
        case "lg":
          return 3;
        case "xl":
          return 4;
        default:
          return 0;
      }
    },
  },
};
</script>

<style>
@media (min-device-width: 360px) and (max-device-width: 640px) {
  .v-slide-group__prev {
    min-width: 5px !important;
  }

  .v-slide-group__next {
    min-width: 5px !important;
  }
}

.alinhadoM {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bgcTotal {
  background-image: url("./assets/marmoreBranco.webp") !important;
  background-repeat: repeat;
  background-size: contain;
  /* background-attachment: fixed; */
  background-position: center;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Montsserat';

  src: url('./assets/fonts/Montsserat-Regular.ttf') format('truetype');
  font-display: swap;
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;

}

@font-face {
  font-family: 'Montsserat';

  src: url('./assets/fonts/Montsserat-Medium.ttf') format('truetype');
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;

}


@font-face {
  font-family: 'Montsserat';

  src: url('./assets/fonts/Montsserat-SemiBold.ttf') format('truetype');
  font-display: swap;
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;

}

@font-face {
  font-family: 'Lora';

  src: url('./assets/fonts/Lora-Bold.ttf') format('truetype');
  font-display: swap;
  font-style: normal;
  font-weight: 800;
  font-stretch: normal;

}

@font-face {
  font-family: 'Lora';

  src: url('./assets/fonts/Lora-Medium.ttf') format('opentype');
  font-display: swap;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
}

@font-face {
  font-family: 'Lora';

  src: url('./assets/fonts/Lora-Regular.ttf') format('opentype');
  font-display: swap;
  font-style: normal;
  font-weight: 300;
  font-stretch: normal;
}

@font-face {
  font-family: 'Lora';

  src: url('./assets/fonts/Lora-SemiBold.ttf') format('opentype');
  font-display: swap;
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
}

.v-image {
  height: 100% !important;
}

@media (min-device-width: 360px) and (max-device-width: 731px) {
  .alignMobile {
    align-items: center !important;
  }

  .DisableMobile {
    display: none !important;
  }

  .padMobile {
    padding: 50px 20px !important;
  }
}

.alinhadoM {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}

.btnMenu {
  font-family: "Poppins" !important;
  font-weight: 300 !important;
  box-shadow: none !important;
  border: none !important;
  background-color: transparent !important;
}

.btnMenu:hover {
  color: #769d4a !important;
  font-family: "Poppins" !important;
  font-weight: 300 !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
