

const COUNTRY_SEND = 'PE';// <--  country for send 

var count = 0; 
db.configuration.find().forEach(rCountry => {
    
    print(`${rCountry.country.code}`);

    db.rma.find({'country':`${COUNTRY_SEND}`}).forEach( r => {

        print(`${r.contractAddressRma}`);

        db.certificate.find({ 'country': rCountry.country.code, "credentialStatus": { $nin: ["PR", "REC"] } }).forEach(cert => {

            count++;

           // print("-----------------")
        
           //  print("RMA: ", r.contractAddressRma);
            print("TIN: ",cert.taxID);
         //   print(cert.verifiableCredentialARM);
           // print(cert.credentialStatus);
           // print(cert.visible);
          
     
            db.queue_tx.insert(
                {
                    'rma':
                    {
                        'addressRma': r.contractAddressRma,
                        'tin': `${cert.taxID}`,
                        'vc': `${cert.verifiableCredentialARM}`,
                        'state': `${cert.credentialStatus}`,
                        'obs': 'MIGRATION',
                        'visible': `${cert.visible}`
                    },
                    'date':Date()
                });
       
        
        
        });
        


    });

});

print("items :",count);