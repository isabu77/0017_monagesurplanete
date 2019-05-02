# Mon age sur la planète
## la maquette

## la page HTML
### un header contenant le titre "Mon âge sur..."
### un formulaire :
- Date de naissance : input date
- 7 boutons checkbox pour les planètes : Terre, Vénus, Mercure, Jupiter, Mars, Saturne, Pluton
- un bouton 'OK'

### un texte "mon âge sur la planète " + nom de la planète + "est :"
### l'âge sous la forme " aa ans mm mois jjj jours"

## la fonction Javascript : CalculAge(dateNaissance, planete)
### en entrée : la date de naissance et la planète choisie
### en sortie : l'âge en String sous la forme " aa ans mm mois jjj jours"

## Recherches

### le Timestamp
Le timestamp représente la quantité de secondes écoulées depuis le premier janvier de l'année 1970 (début de l'heure UNIX) à minuit UTC.
Le timestamp a une limite. Ce chiffre est incrémenté depuis 1970 ce qui fait qu'il augmente de seconde en seconde. Cependant, sur les PC 32 bits, le timestamp est confiné à 2147483647. Cela veut dire que quand cette limite sera atteinte, les machines 32 bits ne seront plus capables de stocker au delà. Cette restriction est médiatisée sous l'appellation du "bogue de l'an 2038". Cette erreur aura lieu précisément le 19 janvier 2038 à 3h 14min 7s (temps universel).
* _http://www.timestamp.fr/_


### la fonction timestamp(date)
le timestamp JavaScript est en millisecondes alors que celui de PHP est en secondes
* _https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/now_

* _https://www.php.net/manual/fr/function.time.php_

### la date sur les autres planètes

* _http://michel.lalos.free.fr/cadrans_solaires/doc_cadrans/heures_planetaires/heures_planetaires.html_

* _https://theplanets.org/age-on-planets/_

* https://www.simplyscience.ch/archives-enfants/articles/une-annee-sur-terre-sur-mars-ou-sur-les-autres-planetes.html_

### les fonctions de conversion de date en Javascript

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

### l'objet Date en Javascript

La méthode Date.now() (static) renvoie le nombre de millisecondes écoulées depuis le 1er Janvier 1970 00:00:00 UTC.
* _https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date_
---
var timestamp = Date.now();
var date = new Date(timestamp*1000);

