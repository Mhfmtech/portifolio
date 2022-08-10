<!-- <template>
    <v-container fluid>

        <v-app-bar app color="#002D34" dark v-if="!isHome" jutify="center" align="center"
            style="padding: 4px 60px; height: 110px; background-color: #002D34; justify-content: center !important;"
            class="justify-center alignMobile align-center d-flex flex-column padMobile">

            <v-row align="center">
                <div class="d-flex align-center justify-center">
                    <router-link to="/">
                        <v-img alt="Vuetify Name" class="shrink mt-1 mobileSize" contain min-width="100"
                            src="../assets/logoBranco.webp" width="180" />
                    </router-link>
                </div>

                <v-spacer class="DisableMobile" style="width: 70px"></v-spacer>

                <div v-if="intBreakPoint > 2" style="display: contents">
                    <v-btn @click="goto('div1')" class="FontPoppins btnMenu" style="
              text-transform: capitalize !important;
              text!-decoration: none !important;
              font-size: 20px;
              font-weight: 800 !important;
              letter-spacing: 0px !important;
              color: #fff;
            ">PROMOÇÕES</v-btn>

                    <v-btn @click="goto('div2')" class="FontPoppins btnMenu" style="
              text-transform: capitalize !important;
              text!-decoration: none !important;
              font-size: 20px;
              font-weight: 800 !important;
              letter-spacing: 0px !important;
              color: #fff;
            ">QUEM SOMOS</v-btn>

                    <v-btn @click="goto('div3')" class="FontPoppins btnMenu" style="
              text-transform: capitalize !important;
              text!-decoration: none !important;
              font-size: 20px;
              font-weight: 800 !important;
              letter-spacing: 0px !important;
              color: #fff;
            ">DEPOIMENTOS</v-btn>

                    <v-btn @click="goto('div4')" class="FontPoppins btnMenu" style="
              text-transform: capitalize !important;
              text!-decoration: none !important;
              font-size: 20px;
              font-weight: 800 !important;
              letter-spacing: 0px !important;
              color: #fff;
            ">POR QUE SOMOS IMBATÍVEIS</v-btn>
                </div>
            </v-row>
        </v-app-bar>

        <v-row key="row4" class="pteste d-flex align-center fillHeight pt1 padMobile"
            style=" min-height: 650px; padding: 50px 90px" align-center id="4pt">
            <v-col cols="12" md="12" class="alinhadoM">
                <v-img class="sizeImg" width="500" src="../assets/Grupo 87.webp" contain></v-img>
                <h2 class="formatSubTitle"
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 28px">
                    MONTAGEM +
                    ALINHAMENTO 3D GRÁTIS</h2>
                <h1 v-if="intBreakPoint > 2" class="formatTitleMob"
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 58px; font-weight: 900; margin-top: -18px;">
                    COM 1 ANO DE GARANTIA</h1>

                <h1 v-if="intBreakPoint < 2" class="formatTitleMob"
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 58px; font-weight: 900; margin-top: -18px;">
                    COM 1 ANO DE
                    <span
                        style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 53px; font-weight: 900; margin-top: -18px;">
                        GARANTIA
                    </span>
                </h1>
            </v-col>
        </v-row>

        <v-row ref="div1" class=" efeito pteste d-flex align-center justify-center fillHeight pt2 padMobile"
            style="padding: 50px 0">
            <v-col cols="12" md="12" style="margin-top:0px" class="align-center justify-center d-flex flex-column">
                <h1
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-weight: 900; text-align: center; color: #fff; font-size: 42px ">
                    PROMOÇÕES</h1>
            </v-col>
            <v-col cols="12" md="12" style="margin-top:0px" class="align-center justify-center d-flex ">
                <v-carousel cycle hide-delimiter-background show-arrows-on height="600" v-if="intBreakPoint > 2">
                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0x 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">

                                    <v-img alt="Aro 13 R$209,90" contain style="max-width: 330px !important;
                    box-shadow:90px #000 !important" src="../assets/aro-13.webp"></v-img>
                                </a>
                            </v-col>
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus"
                                    target="_blank">
                                    <v-img alt="Aro 14 R$269,90" contain
                                        style="max-width: 330px !important;  box-shadow:90px #000 !important"
                                        src="../assets/aro-14.webp"></v-img>
                                </a>
                            </v-col>
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus"
                                    target="_blank">
                                    <v-img alt="Aro 15 R$319,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/aro-15.webp"></v-img>
                                </a>
                            </v-col>
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus"
                                    target="_blank">
                                    <v-img alt="Aro 13 R$339,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/aro-16.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0x 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Kito revisao R$149,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/kitRevisao.webp"></v-img>
                                </a>
                            </v-col>

                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Troca de oleo R$89,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/trocadeoleo.webp"></v-img>
                                </a>
                            </v-col>

                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Par de amortecedor R$89,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/amortecedor.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>

            <v-col cols="12" md="12" style="margin-top:0px" class="align-center justify-center d-flex flex-column">
                <v-carousel height="600" v-if="intBreakPoint < 2" hide-delimiters>
                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0px 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435" target="_blank">
                                    <v-img contain style="max-width: 330px !important;
                    box-shadow:90px #000 !important" src="../assets/aro-13.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0px 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435" target="_blank">
                                    <v-img contain style="max-width: 330px !important;  box-shadow:90px #000 !important"
                                        src="../assets/aro-14.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0px 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435" target="_blank">
                                    <v-img contain style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/aro-15.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0px 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center">
                                <a href="https://api.whatsapp.com/send?phone=5535996723435" target="_blank">
                                    <v-img contain style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/aro-16.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0x 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Kito revisao R$149,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/kitRevisao.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0x 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Troca de oleo R$89,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/trocadeoleo.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>

                    <v-carousel-item>
                        <v-row class="align-center justify-center d-flex " style="padding: 0x 10px">
                            <v-col cols="12" md="3" class="align-center flex-column justify-center ">
                                <a target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                                    <v-img alt="Par de amortecedor R$89,90" contain
                                        style="max-width: 330px !important; box-shadow:90px #000 !important"
                                        src="../assets/amortecedor.webp"></v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row ref="div2" class=" efeito pteste d-flex align-center justify-center fillHeight pt3 padMobile"
            style="padding: 50px 64px">
            <v-col cols="12" md="12">
                <h2
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 28px">
                    QUEM SOMOS</h2>

                <P style="font-family: usual, Arial, Helvetica, sans-serif;">A Tonelli é muito mais que uma loja de
                    pneus, nossa rede surgiu do sonho
                    de revolucionar os serviços
                    automotivos com preços ESMAGADORES!
                    <br><br>
                    Sua segurança é nossa prioridade, por isso, trabalhamos com máxima confiança e transparência. Somos
                    referência em mecânica completa e imbatíveis em promoção de pneus.
                    <br><br>
                    Aproveite o percurso, nós garantimos a segurança!
                </P>
            </v-col>
            <v-col cols="12" md="4">
                <v-img contain src="../assets/grupo1.webp"></v-img>
            </v-col>
            <v-col cols="12" md="4">
                <v-img contain src="../assets/grupo2.webp"></v-img>
            </v-col>
            <v-col cols="12" md="4">
                <v-img contain src="../assets/grupo3.webp"></v-img>
            </v-col>
        </v-row>

        <v-row class=" efeito pteste d-flex align-center justify-center fillHeight pt4 padMobile"
            style="padding: 50px 64px">
            <v-col cols="12" md="12">
                <p
                    style="margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; font-size:18px; text-align: center;">
                    São 17 lojas especialmente projetadas para te atender de maneira RÁPIDA e EFICIENTE. Nos visite e
                    comprove!
                </p>
                <h1 class="formatTitleMob"
                    style="font-family: usual, Arial, Helvetica, sans-serif; color: #fff; font-size:38px; font-weight: 900; text-align: center">
                    VENHA SE SURPREENDER COM NOSSO ATENDIMENTO!
                </h1>

                <v-img style="margin: 70px 0" contain src="../assets/porsche-model.webp" width="100%"></v-img>
            </v-col>
            <v-row>
                <v-col cols="12" md="4" class="alinhadoM"
                    style="border-right: 1px solid #ffffff66; border-bottom: 1px solid #ffffff66;  padding: 40px;">
                    <v-img contain width="80" src="../assets/check.webp"></v-img>
                    <p
                        style="margin-top: 10px; margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; text-align: center; font-size: 18px;">
                        Alta
                        qualidade, com preço justo e a máxima confiança.</p>
                </v-col>
                <v-col cols="12" md="4" class="alinhadoM"
                    style="border-right: 1px solid #ffffff66; border-bottom: 1px solid #ffffff66;  padding: 40px;">
                    <v-img contain width="80" src="../assets/racing.webp"></v-img>

                    <p
                        style="margin-top: 10px; margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; text-align: center; font-size: 18px;">
                        Grande
                        variedade de pneus
                        das melhores marcas.</p>
                </v-col>
                <v-col cols="12" md="4" class="alinhadoM" style="border-bottom: 1px solid #ffffff66; padding: 40px;">
                    <v-img contain width="80" src="../assets/car.webp"></v-img>

                    <p
                        style="margin-top: 10px; margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; text-align: center; font-size: 18px;">
                        Tudo para
                        motor, suspensão,
                        direção, sistema de freios.</p>
                </v-col>

                <v-col cols="12" md="6" class="alinhadoM" style="border-right: 1px solid #ffffff66;  padding: 40px;">
                    <v-img contain width="80" src="../assets/tire.webp"></v-img>

                    <p
                        style="margin-top: 10px; margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; text-align: center; font-size: 18px;">
                        Alinhamento e balanceamento.</p>
                </v-col>

                <v-col cols="12" md="6" class="alinhadoM" style=" padding: 40px;">
                    <v-img contain width="80" src="../assets/economy.webp"></v-img>

                    <p
                        style="margin-top: 10px; margin-bottom: 0px !important; font-family: usual, Arial, Helvetica, sans-serif; color: #fff; text-align: center; font-size: 18px;">
                        Condições e preços incríveis pra
                        você não sair do controle!</p>
                </v-col>
            </v-row>
        </v-row>

        <v-row ref="div3" class=" efeito pteste d-flex align-center justify-center fillHeight pt5 padMobile"
            style="padding: 50px 64px">
            <v-col cols="12" md="12">
                <h1 class="formatTitleMob"
                    style="font-family: usual, Arial, Helvetica, sans-serif; color: #fff; font-size:38px; font-weight: 900; text-align: center">
                    VEJA OS DEPOIMENTOS DE NOSSOS CLIENTES!
                </h1>

                <v-carousel v-if="intBreakPoint > 2" cycle height="300" style="background-color: transparent !important"
                    hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item class="alinhadoM" v-for="(dep, i) in depoimentos" :key="i"
                        style="background-color: transparent !important">
                        <v-sheet style="background-color: transparent !important">
                            <v-row justify="center" align="center" style="background-color: transparent !important">
                                <v-col cols="12" md="12" class="alinhadoM"
                                    style="background-color: transparent !important">
                                    <v-img width="750" contain :src="require(`@/assets/${dep.img}`)"></v-img>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>

                <v-carousel v-if="intBreakPoint < 2" cycle height="400" style="background-color: transparent !important"
                    hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item class="alinhadoM" v-for="(depm, i) in depoimentosMob" :key="i"
                        style="background-color: transparent !important">
                        <v-sheet style="background-color: transparent !important">
                            <v-row justify="center" align="center" style="background-color: transparent !important">
                                <v-col cols="12" md="12" class="alinhadoM"
                                    style="background-color: transparent !important">
                                    <v-img width="750" contain :src="require(`@/assets/${depm.img}`)"></v-img>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row ref="div4" class="efeito pteste d-flex align-center justify-center fillHeight pt6 padMobile"
            style="padding: 50px 64px">
            <v-col cols="12" md="12">
                <h2
                    style="font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 28px">
                    POR QUE SOMOS
                    IMBATÍVEIS?</h2>

                <P style="font-family: usual, Arial, Helvetica, sans-serif; margin-top: 20px">
                    Pesquisando onde comprar pneu? Fique tranquilo, você já achou!
                    <br><br>
                    A Tonelli é o lugar que une variedade de produtos com serviços
                    de alta qualidade, tudo isso com condições e preços
                    competitivos DE VERDADE.
                    <br><br>
                    Não se trata apenas de pneus em promoção, a nossa missão é
                    democratizar o acesso dos brasileiros aos produtos
                    automobilísticos TOP de linha!
                    <br><br>
                    • Temos preços ESMAGADORES; <br>
                    • Cobrimos o valor do pneu da concorrência;<br>
                    • Tudo para seu motor, suspensão, direção, sistema de freios;<br>
                    • Alinhamento e balanceamento;<br>
                    • Profissionais capacitados.
                    <br><br>
                    Ainda tem dúvidas? Faça uma visita e comprove!
                </P>
            </v-col>
            <v-col cols="12" md="6">

                <v-img src="../assets/especialista.webp" contain></v-img>

            </v-col>
            <v-col cols="12" md="6" class="alinhadoM">
                <h2 class="formatTitleMob"
                    style="text-align: center; font-family: usual, Arial, Helvetica, sans-serif; font-style:italic; color: #002D34; font-size: 80px; font-weight: 900; line-height: 1;">
                    Fale com <br>
                    <span style="color: #5FAEBC; font-size: 50px">um de nossos</span> <br>
                    especialistas
                </h2>
                <div class="d-flex flex-column">
                    <a target="_blank"
                        href="https://api.whatsapp.com/send?phone=5535996723435&text=Quero%20meu%20Cupom%20de%20desconto%20para%20a%20Tonelli%20Pneus">
                        <v-btn block
                            style="margin-top: 30px; background-color: #00AA53; font-size: 19px; border-radius: 10px; color: #fff; font-weight: 900; font-family: usual, Arial, Helvetica, sans-serif; padding: 27px 20px !important;">
                            WHATSAPP
                        </v-btn>
                    </a>
                    <a href="tel:08005003000">
                        <v-btn block
                            style=" margin-top: 10px;   background-color: #f69d18; font-size: 19px; border-radius: 10px; color: rgb(255, 255, 255); font-weight: 900; font-family: usual, Arial, Helvetica, sans-serif; padding: 27px 20px !important;">
                            LIGEUE GRATÍS!
                        </v-btn>
                    </a>
                </div>
            </v-col>
        </v-row>


    </v-container>
</template>

<style scoped>
@media (min-device-width: 360px) and (max-device-width: 731px) {
    .sizeImg {
        width: 600px !important;
    }

    .formatSubTitle {
        font-size: 23px !important;
        line-height: 1 !important;
    }

    .formatTitleMob {
        font-size: 38px !important;
        font-weight: 900 !important;
        margin-top: 4px !important;
        line-height: 1 !important;
    }

}

.pt1 {
    background-image: url("../assets/Background.webp");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
    background-attachment: fixed;
    background-color: rgba(255, 255, 255, 0.596);
    background-position: center-top;
}

.pt2 {
    background-image: url("../assets/background 2.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.596);
    background-position: center;
}

.pt3 {
    background-image: url("../assets/Prancheta4.webp");
    background-repeat: repeat;
    background-size: contain;
    background-color: rgba(255, 255, 255, 0.596);
    background-position: center;
}

.pt4 {
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #002D34;
    background-position: center;
}

.pt5 {
    background-image: url("../assets/Prancheta3.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #002D34;
    background-position: center;
}

.pt6 {
    background-image: url("../assets/Prancheta4.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.596);
    background-position: center;
}
</style>


<script>
export default {
    name: "Home",

    data: () => ({
        depoimentos: [
            { img: "depoiment.webp" },
            { img: "depoiment1.webp" },
            { img: "depoiment2.webp" }
        ],
        depoimentosMob: [
            { img: "depoimentMob.webp" },
            { img: "depoiment1Mob.webp" },
            { img: "depoiment2Mob.webp" }
        ]
    }),

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

    methods: {
        goto(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo(0, top);
        }
    }
}
</script> -->