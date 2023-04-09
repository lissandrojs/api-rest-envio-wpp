import {create,Whatsapp,Message,SocketState} from "venom-bot"

export type QRCode = {
    base64Qr : string ;
    asciiQR : string ;
    attempts : number;
    urlCode  ?: string ;
}

class Sender {
    private client : Whatsapp;
    private connected : boolean;
    private qr : QRCode;

    constructor(){
        this.initialize()
    }

     get isConnected () : boolean {
        return this.connected
    } 

     get qrCode () : QRCode {
        return this.qr
    }

    async sendText(to:string,body:string){
       await this.client.sendText(to,body)
    }
    
  async listAllMessage(): Promise<Message[]> {
    const chats = await this.client.getAllChats();
    const messages: Message[] = [];

    for (const chat of chats) {
      const chatMessages = await this.client.getAllMessagesInChat(chat.id._serialized,true, false); // paramentos id , se vai mostrar as minhas messagens , e se vai incluir ou nao notificações
      messages.push(...chatMessages);
    }

    return messages;
  }

    private initialize () {
        const qr = (base64Qr:string , asciiQR:string,attempts:number,urlCode?:string) => {
            return (this.qr ={base64Qr ,asciiQR,attempts,urlCode})
        }

        const status = (statusSession: string ,session: string) => {
            console.log(session)
           return (this.connected = ['isLogged','qrReadSuccess' , 'chatsAvailable' ,].includes(statusSession))

        }

        const start = (client :Whatsapp) => {
            this.client = client

            client.onStateChange((state)=>{ 
                this.connected =  state === SocketState.CONNECTED
            })
        }

        const config = {
            session: 'wpp-sender',
            catchQR: qr,
            statusFind: status
          };

     create("wpp-sender",qr).then((client) => { start(client)})
        .catch((error) => console.error(error))
    }
}

export default Sender