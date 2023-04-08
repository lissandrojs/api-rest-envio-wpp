import express , {Request,Response}  from "express"
import Sender from "./Sender/sender";

const sender = new Sender();

const api = express()

api.use(express.json())
api.use(express.urlencoded({extended:false}))

api.get('/status', (request:Request, response:Response) =>{
     return  response.send({
          qr_code: sender.qrCode,
          connected:sender.isConnected
     })
})

api.post('/send/text', async(request:Request, response:Response) =>{
    const {number ,message} = request.body;

   try{
        await sender.sendText(`${number}@c.us`,message)
        
        return response.status(200).json()
   }catch(error){
        console.error(error)

        response.status(500).json({status:"error" , info: error})
   }
})

api.listen(3033,()=>{
    console.log("rodando liso")
})