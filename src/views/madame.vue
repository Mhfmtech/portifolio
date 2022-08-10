<template>
    <v-container fluid>
        <v-app-bar app color="#C79026" dark v-if="!isHome" jutify="center" align="center"
            style="padding: 4px 60px; height: 140px; background-color: #fff; "
            class="justify-center alignMobile d-flex flex-column padMobile">
            <v-row style="width: 100%" align="center">
                <v-col cols="12" md="3">
                    <div class="d-flex align-center justify-center">
                        <router-link to="/">
                            <v-img alt="Vuetify Name" class="shrink mt-1 mobileSize" contain min-width="100"
                                src="../assets/logoMadame.webp" width="100" />
                        </router-link>
                    </div>
                </v-col>

                <v-col v-if="intBreakPoint > 2" cols="6" md="9" style="align-items: end; display: flex;">
                    <v-spacer class="DisableMobile" style="width: 70px"></v-spacer>
                    <div  style="display: contents">
                        <v-btn @click="goto('id1')" class="FontMenu btnMenu" style="">
                            PRODUTOS
                        </v-btn>

                        <v-btn @click="goto('id2')" class="FontMenu btnMenu">
                            SABER MAIS
                        </v-btn>

                        <v-btn @click="goto('id3')" class="FontMenu btnMenu">
                            LOCALIZAÇÃO
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-app-bar>

        <v-row class="pt1 padMobile" justify="center" align="center" style="padding: 0 65px">
            <v-col offset="8" cols="12" md="4">
                <div style="background-color: #fff; padding: 20px; border-radius: 20px">
                    <h1 style="font-family: Montsserat !important; color: #C79026; font-weight: 600; text-align: center; line-height: 1;">CONFIRA <br> NOSSA COLEÇÃO</h1>
                    <v-form>
                        <v-text-field v-model="contato.nome" label="Nome"></v-text-field>
                        <v-text-field v-model="contato.email" label="E-mail"></v-text-field>
                        <v-text-field v-mask="'(##) #####-####'" v-model="contato.telefone" label="Telefone">
                        </v-text-field>

                        <v-btn block @click="enviarFormulario"
                            style="background-color: #000; border-radius: 5px; font-family: Lora !important; color: #fff">
                            Enviar </v-btn>
                    </v-form>
                </div>
            </v-col>
        </v-row>

        <v-row class="textureBar padMobile" justify="center" align="center">
            <h1 class="lineHeightMob" style="color: #fff; font-family: Montsserat; font-weight: 600">Cada história é uma joia. Escolha como
                eternizar a sua!</h1>
        </v-row>

        <v-row class="padMobile" style=" padding: 50px 65px" ref="id1">
            <h1 class="lineHeightMob" style="font-family: Montsserat; font-weight: 400;  color: #000">Produtos personalizados</h1>

            <v-col cols="12" md="12">
                <v-sheet class="mx-auto" style="background-color: transparent !important" max-width="100%">
                    <v-slide-group light v-model="img" class="" show-arrows multiple>
                        <v-slide-item style="margin: 0 20px" v-for="(n, i) in img" :key="i">
                            <v-img width="400" :src="require(`@/assets/${n.img}`)"></v-img>
                        </v-slide-item>
                    </v-slide-group>
                    <!-- <v-expand-transition>
                        <v-sheet v-if="img != null" height="200" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <h3 class="text-h6">
                                    Selected {{ n.img }}
                                </h3>
                            </v-row>
                        </v-sheet>
                    </v-expand-transition> -->
                </v-sheet>
            </v-col>
        </v-row>
        <div style="height: 70px" ref="id2"></div>
        <v-row  class="padMobile" justify="center" align="center">
            <v-col class="cardBgc" style="border-radius: 20px" cols="12" md="10">
                <v-row class="padMobile" style="padding: 50px; min-height: 435px">
                    <v-col cols="12" md="8">
                        <h1 class="lineHeightMob" style="font-family: Montsserat; font-weight: 600;  color: #fff">Você é única e suas jóias também!
                        </h1>
                        <p style="color: #fff; font-family: Montsserat;">Buscando resgatar a exclusividade e singularidade, a Madame Valentim
                            aposta na minuciosidade
                            do handmade.
                            <br><br>
                            Para o seleto grupo de mulheres que ainda opta pelas jóias feitas à mão, produzimos peças
                            com design exclusivo com melhor do aços nobres. <br>
                            Cada jóia recebe o toque especial do belíssimo trabalho manual realizado pelas mãos dos
                            nossos ourives e lapidadores, que juntam a tradição ferramentas manuais com o que há de mais
                            novos em equipamentos e design.
                        </p>
                        <v-btn
                            style="background-color: #D8902A; border-radius: 5px; font-family: Lora !important; color: #fff">
                            Saiba mais </v-btn>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-img  v-if="intBreakPoint > 2" class="imgFloat" width="340" src="../assets/img7.webp"></v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="padMobile" style=" padding: 50px 65px" ref="id3">
            <v-col cols="12" md="12">
                <h1 style="font-family: Montsserat; font-weight: 400;  color: #000">Venha nos visitar</h1>
            </v-col>
            <v-col cols="12" md="5">
                <div style="background-color: #CBC7C7; padding: 10px; border-radius: 10px;">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7695533341443!2d-46.5650605!3d-23.540789500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eed9d46a20f%3A0x1a2b5398c38d1e6c!2sR.%20Apucarana%2C%20272%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003311-000!5e0!3m2!1spt-BR!2sbr!4v1656952931092!5m2!1spt-BR!2sbr"
                        width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                        <p style="font-family: Montsserat; font-weight: 400;  color: #000">R. Apucarana, 272 - Tatuapé, São Paulo - SP, 03311-000</p>
                </div>
            </v-col>
            <v-col cols="12" md="7" class="alinhadoM">
                <a href="https://m.uber.com/ul/?action=setPickup&client_id=BRVYXQpMWDEXkEAriitzdJYGR0iUUVLF&pickup=my_location&dropoff[formatted_address]=Rua%20Apucarana%2C%20272%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil&dropoff[latitude]=-23.540789&dropoff[longitude]=-46.565061"
                    target="_blank">
                    <v-btn class="btnHover"
                        style="background-color: #000; font-family: Montsserat; color: #fff; font-weight: 500; border-radius: 50px; font-size: 20px; padding: 25px 20px;">
                        Chamar UBER</v-btn>
                </a>
                <a href="https://www.waze.com/pt-BR/live-map/directions/br/sp/r.-apucarana,-272?to=place.ChIJD6JGne1ezpQRbB6Nw5hTKxo"
                    target="_blank">
                    <v-btn class="btnHover"
                        style="background-color: #13C2F1; font-family: Montsserat; color: #000; font-weight: 500; border-radius: 50px; font-size: 20px; padding: 25px 20px; margin-top: 10px;">
                        Rota no Waze</v-btn>
                </a>
            </v-col>
        </v-row>

        <v-row class="padMobile" style="padding: 0px 65px; background-color: #C79026" justify="center" align="center">
            <v-col cols="12" md="6">
                <p style="margin-bottom: 0px !important">
                    Madame Valentim – Todos direitos reservados. Site atualizado em 2022.
                </p>
            </v-col>
            <v-col cols="12" md="6" class="alinhadoM">
                <a target="_blank" href="https://abaremarketing.com/">
                    <v-img src="../assets/abare.webp" contain width="50"></v-img>
                </a>
            </v-col>
        </v-row>


        <v-snackbar v-model="snackbar">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        dialog: false,
        snackbar: false,
         text: "Seu contato foi enviado! Obriado por sua mensagem, responderemos em breve.",
        img: [
            { img: "aliancasSolitarios.webp" },
            { img: "img1.webp" },
            { img: "aneis.webp" },
            { img: "brincos.webp" },
            { img: "pulseiras.webp" },
            { img: "pingentes.webp" },
            { img: "outros.webp" },
        ],
        contato: { nome: "", email: "", telefone: "" },
    }),

    methods: {
        goto(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },

        enviarFormulario() {
            fetch("https://gestao.abare.cloud/items/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ id_formulario: 74, lead: this.contato }),
            })
                .then((response) => response.text())
                .then((data) => {
                    window.console.log(data);
                    // alert("contato enviado com sucesso");
                    this.dialog = false;
                    this.snackbar = true;
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
}
</script>

<style scoped>
@media (min-device-width: 360px) and (max-device-width: 640px) {
    .lineHeightMob{
        line-height: 1 !important;
    }
    
    .formatTextMob{

    }

    .padMobile{
        padding: 30px 15px !important;
    }
    .offset-8{
        margin-left: 0 !important;
    }

}

.btnHover:hover {
    background-color: #ffbd38 !important;
}

.imgFloat {
    height: 324px !important;
    border-radius: 20px;
    /* position: absolute; */
    width: 320px;
    /* margin-top: -97px; */
}

.cardBgc {
    /* background-image: url("../assets/bgcCard.webp") !important; */
    background-color: #D7B167;
    background-repeat: no-repeat;
    box-shadow: 3px 5px 5px -1px rgba(0,0,0,0.42);
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: center;
}

.bgcTotal {
    background-image: url("../assets/bgcBody.webp") !important;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: center;
}

.textureBar {
    background-image: url("../assets/texture.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    height: 150px;
}

.pt1 {
    background-image: url("../assets/banner2.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.596);
    background-position: center;
    margin-top: 60px;
    height: 80vh;
}

.FontMenu {
    font-family: Montsserat !important;
    text-transform: capitalize !important;
    text-decoration: none !important;
    font-size: 20px;
    font-weight: 500 !important;
    letter-spacing: 0px !important;
    color: #C79026;
}
</style>