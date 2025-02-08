

import React, {useState} from 'react';      
import Connect from './connect'; 

function Home() {    
   
  const [isConnectComponentVisible, setIsConnectComponentVisible] = useState(false);

            const wallets = [
              {
                name : 'Trustwallet',
                imageSrc : '/wallets/trustwallet.png',
              },  
              {
                 name : 'Metamask', 
                 imageSrc : '/wallets/metamask.png',
               },  
               {
                 name : 'Phantom',
                 imageSrc : '/wallets/phantom.png',
               },   
               {
                name : 'Coinbase', 
                imageSrc : '/wallets/coinbase.png',
              },   
              {
                name : 'Wallet connect', 
                imageSrc : '/wclogo.png',      
              }, 
                {
                 name : 'Exodus',
                 imageSrc : '/wallets/exodus.png',
               },  
               {
                  name : 'Airgap',
                  imageSrc : '/wallets/airgap.png',
                }, 
                {
                 name : 'Argent wallet',
                 imageSrc : '/wallets/argent.png',
               },  
               {
                  name : 'Atomic wallet',
                  imageSrc : '/wallets/atomic.png',
                },     
                {
                   name : 'Binance chain', 
                   imageSrc : '/wallets/binance.jpg',
                 },  
                 {
                   name : 'Bitbox wallet',
                   imageSrc : '/wallets/bitbox.png',
                 },  
                 {
                    name : 'Bitcoin core',
                    imageSrc : '/wallets/bitcoincore.png',
                  },   
                 {
                    name : 'Bitpay',
                    imageSrc : '/wallets/bitpay.jpg',
                  }, 
                  {
                   name : 'Blue wallet',
                   imageSrc : '/wallets/bluewallet.jpg',
                 },  
                 {
                    name : 'Brd wallet',
                    imageSrc : '/wallets/brdwallet.jpg',
                  },   {
                    name : 'Coin98 wallet',
                    imageSrc : '/wallets/coin98.png',
                  },  
                   {
                      name : 'Coinomi',
                      imageSrc : '/wallets/coinomiwallet.jpg',
                    }, 
                    {
                     name : 'Edgewallet',
                     imageSrc : '/wallets/edgewallet.png',
                   },  
                   {
                      name : 'Electrum',
                      imageSrc : '/wallets/electrum.png',
                    }, 
                     
                   {
                      name : 'Enkrypt wallet',
                      imageSrc : '/wallets/enkrypt.jpg',
                    },   {
                      name : 'Exodus',
                      imageSrc : '/wallets/exodus.png',
                    },  
                    {
                       name : 'Frame', 
                       imageSrc : '/wallets/frame.png',
                     },  
                     {
                       name : 'Guarda',
                       imageSrc : '/wallets/guarda.png',
                     },  
                     {
                        name : 'Jaxx',
                        imageSrc : '/wallets/jaxx.jpg',
                      }, 
                      {
                       name : 'Keepkey',
                       imageSrc : '/wallets/keepkey.png',
                     },  
                     {
                        name : 'Ledger wallet',
                        imageSrc : '/wallets/ledger.png',
                      }, 
                      {
                       name : 'Math wallet',
                       imageSrc : '/wallets/math.png',
                     },  
                     {
                        name : 'Mew wallet',
                        imageSrc : '/wallets/mew.png',
                      },  
                      {
                        name : 'Mycelium wallet',
                        imageSrc : '/wallets/mycelium.png',
                      },   
                       {
                        name : 'Rainbow wallet',
                        imageSrc : '/wallets/rainbow.jpg',
                      },  
                      {
                         name : 'Okx wallet',
                         imageSrc : '/wallets/okx.png',
                       },  
                       {
                        name : 'Rabby wallet',
                        imageSrc : '/wallets/rabby.png',
                      },  

                      {
                        name : 'Safepal wallet',
                        imageSrc : '/wallets/safepal.png',
                      },  
                      {
                         name : 'Solfare wallet',
                         imageSrc : '/wallets/solfare.jpg',
                       },  
                      {
                        name : 'Xdefi wallet',
                        imageSrc : '/wallets/xdefi.png',
                      },  
                      {
                       name : 'Zengo wallet',
                       imageSrc : '/wallets/zengo.jpg',
                     }, 
            ];   

            function handleCancelModal() {
                setIsConnectComponentVisible(false);
            }
 
              return( 
                <div className='homepage'>  
                    <div className='conimg'> <img src='/wcdisp.png' alt='wallet connect' /> </div>
                     <p className='big'>Select your wallet💳</p> 
                     <p className='small'><span>Select</span> your <span>Wallet</span></p> <br />
                     <div className='walletsdiv'>  
                          { 
                            wallets.map((wallet, index)=> { 
                                return( 
                                    <div key={index} onClick={ ()=>{setIsConnectComponentVisible(true)} } className='awallet'>   
                                    <img src={wallet.imageSrc} alt={wallet.name} />  
                                    <p>{wallet.name} </p>         
                                    </div>         
                                );
                            }) 
                        }  
                           
                     </div>   
                            { 
                                isConnectComponentVisible && ( 
                                   <Connect onCancelClick={handleCancelModal} /> 
                                )   
                            }  
                       <div className='connectbtndiv'>  
                       <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='connectbtn'>
                      Back To Top
                      </button> 
                       </div> 
                       <br />  <br /> 
                </div>
              );   
       }  

export default Home;
