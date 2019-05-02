# Mon age sur Terre
## le Timestamp
Le timestamp représente la quantité de secondes écoulées depuis le premier janvier de l'année 1970 (début de l'heure UNIX) à minuit UTC.
Le timestamp a une limite. Ce chiffre est incrémenté depuis 1970 ce qui fait qu'il augmente de seconde en seconde. Cependant, sur les PC 32 bits, le timestamp est confiné à 2147483647. Cela veut dire que quand cette limite sera atteinte, les machines 32 bits ne seront plus capables de stocker au delà. Cette restriction est médiatisée sous l'appellation du "bogue de l'an 2038". Cette erreur aura lieu précisément le 19 janvier 2038 à 3h 14min 7s (temps universel).


## la fonction timestamp(date)
le timestamp JavaScript est en millisecondes alors que celui de PHP est en secondes

## la date sur les autres planètes

http://michel.lalos.free.fr/cadrans_solaires/doc_cadrans/heures_planetaires/heures_planetaires.html

https://theplanets.org/age-on-planets/



## les fonctions de conversion de date en Javascript

toDateString : Converts the date portion of a Date object into a readable string
toGMTString : Deprecated. Use the toUTCString() method instead
toISOString : Returns the date as a string, using the ISO standard
toJSON : Returns the date as a string, formatted as a JSON date
toLocaleDateString : Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString : Returns the time portion of a Date object as a string, using locale conventions
toLocaleString : Converts a Date object to a string, using locale conventions
toString : Converts a Date object to a string
toTimeString : Converts the time portion of a Date object to a string
toUTCString() : Converts a Date object to a string, according to universal time

## l'objet Date en Javascript

La méthode Date.now() (static) renvoie le nombre de millisecondes écoulées depuis le 1er Janvier 1970 00:00:00 UTC.
var timestamp = Date.now();
var date = new Date(timestamp*1000);



