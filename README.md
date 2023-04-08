Aplicação de atomação de whatsapp usando venombot
//https://github.com/orkestral/venom
//https://github.com/orkestral/venom

# Instruções para instalação
Versão node usada 16 ou superior

# AMBIENTE DEV
rodar npm i  >> instalar dependencias

roda npm run dev >> para desenvolvimento (atualiza alterações em tempo real com nodemon)

# AMBIENTE DE PRODUÇÂO
rodar npm i  >> instalar dependencias

npm run build >> compilar typescript para javascript

npm run start >> iniciar aplicação em produção



@Usando EXPRESS , TYPESCRIPT , NODE , VENOM-BOT.

# ROTA SEND
## /send/text
## Enviar messagem para QUALQUER NUMERO, 

PS: ADICIONAR NO FRONT REGEX para ACEITAR NUMERO DA FORMA DO EXEMPLO SEM O + E UM NUMERO BR VALIDO.

Em post onde e necessario enviar os paramentos como o exemplo abaixo codigo do pais , DDD  , numero com o 9 .

    BODY
    {
        "number": "5531978475789",
        "message":"ola voce ganho na megasena"
    }


# ROTA STATUS
## /status
## MONITORA SE ESTA LOGADO , CASO NAO ESTEJA MANDA O QRCODE , CASO CONTRARIO ELE AVISA QUE JA ESTA CONECTADO E E POSSIVEL MANDAR MENSSAGEM



