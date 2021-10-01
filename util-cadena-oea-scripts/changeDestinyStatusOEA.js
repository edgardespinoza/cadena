//mongo mongodb://user-cadena:Rktj11KVEzU1Xrb5@localhost/cadenadb changeDestinyStatusOEA.js

print("Inicia actualizacion");

       db.state_oea.update({ "code": { $in: ["23"] } } , { $set: { "destiny": ["10"] } });
	   db.state_oea.update({ "code": { $in: ["24"] } } , { $set: { "destiny": ["10"] } });
	   db.state_oea.update({ "code": { $in: ["REC"] } } , { $set: { "destiny": ["PR"] } });
	   db.state_oea.update({ "code": { $in: ["8"] } } , { $set: { "destiny": ["10"] } });

print("Fin actualizacion");