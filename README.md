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
# ROTA STATUS
## /status
## GET : MONITORA SE ESTA LOGADO , CASO NAO ESTEJA MANDA O QRCODE , CASO CONTRARIO ELE AVISA QUE JA ESTA CONECTADO E E POSSIVEL MANDAR MENSAGEM

# !! IMPORTANTE : ANTES DE CONSUMIR OUTRAS ROTAS , VERTIFIQUE QUE ESTA LOGADO , POIS AS ROTAS ABAIXO SO FUNCIONA COM NUMERO LOGADO .

# ROTA SEND
## /send/text
## POST : Enviar mensagem para QUALQUER NUMERO, 

PS: ADICIONAR NO FRONT REGEX para ACEITAR NUMERO DA FORMA DO EXEMPLO SEM O + E UM NUMERO BR VALIDO.

Em post onde e necessario enviar os paramentos como o exemplo abaixo codigo do pais , DDD  , numero com o 9 .

    BODY
    {
        "number": "5531978475789",
        "message":"ola voce ganho na megasena"
    }

# ROTA LISTALL
## listAll/message

## GET : TRAZ AS 50 ULTIMAS MENSAGENS COM VARIAS INFORMAÇÕES DA CONTATO E DA MENSAGEM
(E POSSIVEL AUMENTAR O NUMERO DE MENSSSAGENS MUDANDO O PARAMENTRO DE 50 PARA PO NUMERO DESEJA )



