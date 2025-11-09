# SPRINT 2 / TASCA 4

# EXERCICI 1

# DESCRIPCIÓ
Tenim una col·lecció d'Objectes Restaurant a la ciutat de Nova York, i necessitem algunes consultes... pots ajudar-nos?

Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine per tots els documents en la col·lecció Restaurants.
Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però exclou el camp _id per tots els documents en la col·lecció Restaurants.
Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però exclou el camp _id per tots els documents en la col·lecció Restaurants.
Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx.
Escriu una consulta per mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx.
Escriu una consulta per trobar els restaurants que tenen un score de més de 90.
Escriu una consulta per trobar els restaurants que tenen un score de més de 80 però menys que 100.
Escriu una consulta per trobar els restaurants que es localitzen en valor de latitud menys de -95.754168.
Escriu una consulta de MongoDB per a trobar els restaurants que no preparen cap cuisine de 'American' i la seva qualificació és superior a 70 i longitud inferior a -65.754168.
Escriu una consulta per trobar els restaurants que no preparen cap cuisine de 'American' i van aconseguir un marcador més de 70 i localitzat en la longitud menys que -65.754168. Nota: Fes aquesta consulta sense utilitzar $and operador.
Escriu una consulta per trobar els restaurants que no preparen cap cuisine de 'American' i van obtenir un punt de grau 'A' no pertany a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' com les tres primeres lletres en el seu nom.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' com les últimes tres lletres en el seu nom.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' com tres lletres en algun lloc en el seu nom.
Escriu una consulta per trobar els restaurants que pertanyen al Bronx i van preparar qualsevol plat americà o xinès.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que pertanyen a Staten Island o Queens o Bronx o Brooklyn.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que no pertanyen a Staten Island o Queens o Bronx o Brooklyn.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin un marcador que no és més de 10.
Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen peix excepte 'American' i 'Chinees' o el name del restaurant comença amb lletres 'Wil'.
Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z".
Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de varietat de graus conté un grau de "A" i marcador 9 sobre un ISODate "2014-08-11T00:00:00Z".
Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor que és més de 42 i fins a 52.
Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes.
Escriu una consulta per organitzar el nom dels restaurants en ordre descendent juntament amb totes les columnes.
Escriu una consulta per organitzar el nom de la cuisine en ordre ascendent i pel mateix barri de cuisine. Ordre descendent.
Escriu una consulta per saber totes les direccions que no contenen el carrer.
Escriu una consulta que seleccionarà tots els documents en la col·lecció de restaurants on el valor del camp coord és Double.
Escriu una consulta que seleccionarà el restaurant_id, name i grade per a aquells restaurants que retornin 0 com a resta després de dividir el marcador per 7.
Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants que contenen 'mon' com tres lletres en algun lloc del seu nom.
Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants que contenen 'Mad' com primeres tres lletres del seu nom.


# TECNOLOGIES UTILITZADES
Gestió de la Base de Dades
MongoDB Compass

Entorn de Virtualització i Contenidors
Docker: La plataforma principal de contenidors que et permet empaquetar i executar l'aplicació (en aquest cas, la base de dades) en un entorn aïllat.
Docker Compose: L'eina per definir i gestionar aplicacions Docker multi-contenidor (o, com en aquest cas, simplificar la gestió d'un sol contenidor).
Imatge Docker de MySQL: La plantilla oficial de MySQL (ex: mysql:latest) que Docker descarrega de Docker Hub per crear el contenidor.

Gestió del Projecte i Control de Versions
Git: El sistema de control de versions que s'utilitza per rastrejar els canvis en els arxius del teu projecte.
GitHub: La plataforma de hosting (allotjament web) on puges el teu repositori Git per compartir-lo.
Terminal (CLI): L'eina de línia de comandes (com PowerShell, CMD, o Terminal de Mac/Linux) per executar comandaments de git i docker-compose.
________________________________________
Formats d'Arxiu i Configuració
YAML (.yml): El format de sintaxi simple que hem fet servir per escriure l'arxiu docker-compose.yml.
.gitignore: Un arxiu de text pla que li diu a Git quins arxius o carpetes ha d'ignorar i no pujar al repositori (com .env o mysql-data/).
.env: Un arxiu de text pla per emmagatzemar variables d'entorn, com ara les contrasenyes, de forma segura i fora del codi.
Markdown (.md): El llenguatge de format de text que hem utilitzat per crear l'arxiu README.md.

# REQUISISTS
Per a Windows
Sistema Operatiu:
Recomanat: Windows 10 (versió 21H2 o superior) o Windows 11 (versió 21H2 o superior).
S'admeten les edicions Home, Pro, Enterprise o Education.
Backend de Docker: Cal tenir el WSL 2 (Windows Subsystem for Linux 2) activat. Docker Desktop t'ajudarà a instal·lar-lo o activar-lo durant la seva pròpia instal·lació.
Hardware:
Processador de 64 bits amb traducció d'adreces de segon nivell (SLAT).
4 GB de RAM (es recomana 8 GB o més per a una bona experiència).
La virtualització de hardware ha d'estar activada a la BIOS/UEFI.
Per a macOS
Sistema Operatiu:
Docker Desktop admet les tres versions principals més recents de macOS. Per exemple, si la versió actual és "macOS 15 Sonoma", s'admetrien Sonoma, Ventura i Monterey.
Hardware (Mac amb Apple Silicon - M1, M2, M3...)
4 GB de RAM (recomanat 8 GB o més).
Es recomana instal·lar Rosetta 2, ja que algunes eines opcionals de Docker encara ho poden necessitar.
Hardware (Mac amb Intel)
Model de Mac de 2010 o més recent.
Processador amb suport per a virtualització MMU (es pot comprovar a la terminal amb sysctl kern.hv_support).
4 GB de RAM (recomanat 8 GB o més).

# Execució:
Clonar el Repositori [https://github.com/EL_TEU_USUARI/EL_TEU_PROJECTE.git](https://github.com/EL_TEU_USUARI/EL_TEU_PROJECTE.git) # 
No requereix connexió a internet ni cap base de dades externa.
