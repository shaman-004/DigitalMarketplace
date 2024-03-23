// import express from 'express';
// import { getPayloadClient } from './getpayload';
// import { nextApp, nextHandler } from './next-utils';
// const app=express()
// const port =Number(process.env.PORT
//     || 3000);

//     const start=async()=>{
//         const payload=await getPayloadClient({
//             initOptions:{
//                 express:app,
//                 onInit:async(cms)=>{
//                     cms.logger.info(`admin url: ${cms.getAdminURL()}`)
//                 },
//             },
//         })
//         app.use((req,res)=>nextHandler(req,res))
//         nextApp.prepare().then(()=>{
//             payload.logger.info('next js is ready')
//             app.listen(port,async () => {
                
//                 payload.logger.info(`nextjs app url: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
//             })
//         })
//     }

// start();