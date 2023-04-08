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

     get isConnected () : boolean {
        return this.connected
    } 

     get qrCode () : QRCode {
        return this.qr
    }


    constructor(){
        this.initialize()
    }
    async sendText(to:string,body:string){
       await this.client.sendText(to,body)
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
            // 5598755486@c.us   este @c.us e pra dizer que e pra um contato
            // this.sendText('5531975244344@c.us',"ola e um test")

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