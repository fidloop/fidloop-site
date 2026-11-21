// Ancrimo — langue du tableau de bord (21/11/2026) : français par défaut ; espagnol ou italien
// selon le pays de la boutique (ou, avant connexion, selon ?lang=, la zone choisie à l'inscription,
// la dernière langue utilisée sur cet appareil ou la langue du navigateur).
// La page reste écrite en français : ce fichier remplace les textes à l'affichage, y compris ceux
// ajoutés ensuite par le script (observateur). Retour au français possible (textes d'origine gardés).
(function () {
  "use strict";
  let LANGUE = "fr";
  const LOCALES = { fr: "fr-FR", es: "es-ES", it: "it-IT" };
  // [français, espagnol, italien]
  const TRIPLES = [
["Espace Ancrimo", "Espacio Ancrimo", "Area Ancrimo"],
["Accès réservé", "Acceso reservado", "Accesso riservato"],
["Rester connecté sur cet appareil", "Mantener la sesión en este dispositivo", "Resta connesso su questo dispositivo"],
["Accéder", "Entrar", "Accedi"],
["Mot de passe incorrect.", "Contraseña incorrecta.", "Password errata."],
["Mot de passe oublié ?", "¿Has olvidado la contraseña?", "Password dimenticata?"],
["Pas encore d'espace ? Essai gratuit de 30 jours", "¿Todavía no tienes espacio? Prueba gratis 30 días", "Non hai ancora un'area? Prova gratuita di 30 giorni"],
["Créez votre carte de fidélité", "Crea tu tarjeta de fidelidad", "Crea la tua carta fedeltà"],
["30 jours offerts, sans carte bancaire. Regardez-la prendre forme en direct.", "30 días gratis, sin tarjeta bancaria. Mírala tomar forma en directo.", "30 giorni gratis, senza carta di credito. Guardala prendere forma in diretta."],
["France (métropole)", "Francia (metrópoli)", "Francia (metropolitana)"],
["La Réunion", "La Reunión", "La Riunione"],
["Guadeloupe", "Guadalupe", "Guadalupa"],
["Martinique", "Martinica", "Martinica"],
["Guyane", "Guayana Francesa", "Guyana francese"],
["Mayotte", "Mayotte", "Mayotte"],
["Belgique", "Bélgica", "Belgio"],
["Suisse", "Suiza", "Svizzera"],
["Luxembourg", "Luxemburgo", "Lussemburgo"],
["Espagne", "España", "Spagna"],
["Italie", "Italia", "Italia"],
["Votre activité", "Tu actividad", "La tua attività"],
["Continuer →", "Continuar →", "Continua →"],
["À votre image", "A tu imagen", "A tua immagine"],
["Votre logo, vos couleurs, votre style. Tout reste modifiable ensuite.", "Tu logo, tus colores, tu estilo. Todo se puede cambiar después.", "Il tuo logo, i tuoi colori, il tuo stile. Tutto resta modificabile dopo."],
["＋ Ajouter votre logo", "＋ Añadir tu logo", "＋ Aggiungi il tuo logo"],
["Retirer le logo", "Quitar el logo", "Rimuovi il logo"],
["Votre accès", "Tu acceso", "Il tuo accesso"],
["Pour retrouver votre espace, vos clients et vos statistiques.", "Para encontrar tu espacio, tus clientes y tus estadísticas.", "Per ritrovare la tua area, i tuoi clienti e le tue statistiche."],
["J'accepte les", "Acepto las", "Accetto le"],
["conditions générales", "condiciones generales", "condizioni generali"],
["Créer ma carte ✨", "Crear mi tarjeta ✨", "Crea la mia carta ✨"],
["J'ai déjà un espace : me connecter", "Ya tengo un espacio: iniciar sesión", "Ho già un'area: accedi"],
["Aperçu de la carte de vos clients", "Vista previa de la tarjeta de tus clientes", "Anteprima della carta dei tuoi clienti"],
["Mot de passe oublié", "Contraseña olvidada", "Password dimenticata"],
["Saisissez l'adresse email de votre accès : vous recevrez un lien pour choisir un nouveau mot de passe.", "Introduce el email de tu acceso: recibirás un enlace para elegir una nueva contraseña.", "Inserisci l'email del tuo accesso: riceverai un link per scegliere una nuova password."],
["Envoyer le lien", "Enviar el enlace", "Invia il link"],
["← Retour à la connexion", "← Volver al inicio de sesión", "← Torna all'accesso"],
["Vérification", "Verificación", "Verifica"],
["Pour protéger votre espace, nous venons d'envoyer un code à 6 chiffres à", "Para proteger tu espacio, acabamos de enviar un código de 6 cifras a", "Per proteggere la tua area, abbiamo appena inviato un codice di 6 cifre a"],
["Se souvenir de cet appareil (30 jours)", "Recordar este dispositivo (30 días)", "Ricorda questo dispositivo (30 giorni)"],
["Valider", "Validar", "Conferma"],
["Pas reçu ? Regardez dans vos courriers indésirables. Le code reste valable 10 minutes.", "¿No lo has recibido? Mira en la carpeta de spam. El código es válido 10 minutos.", "Non l'hai ricevuto? Guarda nella posta indesiderata. Il codice resta valido 10 minuti."],
["Votre essai est terminé 🌱", "Tu prueba ha terminado 🌱", "La tua prova è terminata 🌱"],
["Merci d'avoir testé Ancrimo", "Gracias por probar Ancrimo", "Grazie per aver provato Ancrimo"],
["! Vos clients et leurs points sont bien conservés.", ". Tus clientes y sus puntos se conservan.", "! I tuoi clienti e i loro punti sono conservati."],
["Pour continuer à suivre votre programme de fidélité, relancer vos clients et imprimer vos affiches, il suffit de prendre l'abonnement.", "Para seguir con tu programa de fidelidad, recordar a tus clientes e imprimir tus carteles, basta con suscribirte.", "Per continuare a seguire il tuo programma fedeltà, ricontattare i clienti e stampare i tuoi poster, basta abbonarsi."],
["Continuer avec Ancrimo — 29 € / mois", "Continuar con Ancrimo — 29 € / mes", "Continua con Ancrimo — 29 € / mese"],
["Sans engagement. Votre accès est rétabli automatiquement dès le paiement validé.", "Sin permanencia. Tu acceso se restablece automáticamente en cuanto se valida el pago.", "Senza vincoli. Il tuo accesso viene ripristinato automaticamente appena il pagamento è confermato."],
["Une question ?", "¿Alguna pregunta?", "Una domanda?"],
["Nouveau mot de passe", "Nueva contraseña", "Nuova password"],
["Choisissez un mot de passe d'au moins 8 caractères.", "Elige una contraseña de al menos 8 caracteres.", "Scegli una password di almeno 8 caratteri."],
["Changer le mot de passe", "Cambiar la contraseña", "Cambia la password"],
["Gérer mon abonnement", "Gestionar mi suscripción", "Gestisci il mio abbonamento"],
["CGV", "Condiciones", "Condizioni"],
["Déconnecter tous les appareils", "Cerrar sesión en todos los dispositivos", "Disconnetti tutti i dispositivi"],
["Se déconnecter", "Cerrar sesión", "Esci"],
["Il remplace celui de cet accès uniquement, immédiatement.", "Sustituye la de este acceso únicamente, de inmediato.", "Sostituisce quella di questo accesso, subito."],
["Annuler", "Cancelar", "Annulla"],
["Votre espace", "Tu espacio", "La tua area"],
["Programme de fidélité", "Programa de fidelidad", "Programma fedeltà"],
["Vue d'ensemble", "Resumen", "Panoramica"],
["Bienvenue sur Ancrimo", "Bienvenido a Ancrimo", "Benvenuto su Ancrimo"],
["Votre carte est prête 🎉", "Tu tarjeta está lista 🎉", "La tua carta è pronta 🎉"],
["Vos clients peuvent l'ajouter à leur téléphone dès maintenant. Trois gestes pour démarrer :", "Tus clientes ya pueden añadirla a su móvil. Tres pasos para empezar:", "I tuoi clienti possono già aggiungerla al telefono. Tre gesti per iniziare:"],
["Testez-la", "Pruébala", "Provala"],
[": scannez ce QR code avec votre téléphone.", ": escanea este código QR con tu móvil.", ": scansiona questo codice QR con il tuo telefono."],
["Imprimez votre affiche", "Imprime tu cartel", "Stampa il tuo poster"],
["et posez-la près de la caisse.", "y colócalo cerca de la caja.", "e mettilo vicino alla cassa."],
["Proposez-la", "Ofrécela", "Proponila"],
["à chaque client : « Vous voulez la carte de fidélité ? »", "a cada cliente: «¿Quieres la tarjeta de fidelidad?»", "a ogni cliente: «Vuoi la carta fedeltà?»"],
["À scanner pour tester", "Para escanear y probar", "Da scansionare per provare"],
["🖨 Imprimer mon affiche", "🖨 Imprimir mi cartel", "🖨 Stampa il mio poster"],
["Découvrir mon espace →", "Descubrir mi espacio →", "Scopri la mia area →"],
["Apparence de votre carte", "Aspecto de tu tarjeta", "Aspetto della tua carta"],
["Votre logo", "Tu logo", "Il tuo logo"],
["Pays / région de la boutique", "País / región de la tienda", "Paese / regione del negozio"],
["Pour le format des numéros de téléphone de vos clients et l'heure locale.", "Para el formato de los teléfonos de tus clientes y la hora local.", "Per il formato dei numeri di telefono dei tuoi clienti e l'ora locale."],
["Avis Google", "Reseñas de Google", "Recensioni Google"],
["Où trouver ce lien ?", "¿Dónde encontrar este enlace?", "Dove trovare questo link?"],
["Sur votre téléphone ou ordinateur, connecté au compte Google de votre commerce, cherchez le nom de votre commerce sur Google ou dans Google Maps.", "En tu móvil u ordenador, con la cuenta de Google de tu comercio, busca el nombre de tu comercio en Google o en Google Maps.", "Sul telefono o sul computer, collegato all'account Google della tua attività, cerca il nome della tua attività su Google o su Google Maps."],
["Sur votre fiche, touchez", "En tu ficha, pulsa", "Nella tua scheda, tocca"],
["« Demander des avis »", "«Pedir reseñas»", "«Chiedi recensioni»"],
["(parfois « Recevoir plus d'avis »).", "(a veces «Conseguir más reseñas»).", "(a volte «Ricevi più recensioni»)."],
["Touchez", "Pulsa", "Tocca"],
["« Copier le lien »", "«Copiar enlace»", "«Copia link»"],
[", puis collez-le ici et enregistrez.", ", pégalo aquí y guarda.", ", poi incollalo qui e salva."],
["Une fois le lien enregistré, vos clients sont invités à laisser un avis après chaque passage, jusqu'à ce qu'ils l'aient fait.", "Una vez guardado el enlace, se invita a tus clientes a dejar una reseña después de cada visita, hasta que lo hagan.", "Una volta salvato il link, i tuoi clienti sono invitati a lasciare una recensione dopo ogni visita, finché non l'hanno fatto."],
["Enregistrer", "Guardar", "Salva"],
["Ce que voient vos clients", "Lo que ven tus clientes", "Cosa vedono i tuoi clienti"],
["Imprimer votre affiche", "Imprimir tu cartel", "Stampa il tuo poster"],
["Choisissez le format de la feuille.", "Elige el formato del papel.", "Scegli il formato del foglio."],
["Grand format, pour la vitrine ou le mur", "Formato grande, para el escaparate o la pared", "Formato grande, per la vetrina o la parete"],
["Format comptoir, à poser près de la caisse", "Formato mostrador, para poner cerca de la caja", "Formato banco, da mettere vicino alla cassa"],
["Dans la fenêtre d'impression, choisissez le même format de papier et laissez l'échelle à", "En la ventana de impresión, elige el mismo formato de papel y deja la escala al", "Nella finestra di stampa, scegli lo stesso formato di carta e lascia la scala al"],
["(taille réelle), sans « ajuster à la page ». Le verso, pour coller la pastille NFC, s'imprime au même format.", "(tamaño real), sin «ajustar a la página». El reverso, para pegar la pegatina NFC, se imprime en el mismo formato.", "(dimensione reale), senza «adatta alla pagina». Il retro, per incollare l'adesivo NFC, si stampa nello stesso formato."],
["S'abonner · 29 € / mois →", "Suscribirse · 29 € / mes →", "Abbonati · 29 € / mese →"],
["Bienvenue sur Ancrimo !", "¡Bienvenido a Ancrimo!", "Benvenuto su Ancrimo!"],
["Votre carte de fidélité est prête. Imprimez votre affiche avec le bouton", "Tu tarjeta de fidelidad está lista. Imprime tu cartel con el botón", "La tua carta fedeltà è pronta. Stampa il tuo poster con il pulsante"],
["🖨 Affiche", "🖨 Cartel", "🖨 Poster"],
["de votre boutique et placez-la près de la caisse : vos clients s'inscrivent en scannant le QR code.", "de tu tienda y colócalo cerca de la caja: tus clientes se registran escaneando el código QR.", "del tuo negozio e mettilo vicino alla cassa: i tuoi clienti si iscrivono scansionando il codice QR."],
["📊 Vue d'ensemble", "📊 Resumen", "📊 Panoramica"],
["📇 Sans smartphone", "📇 Sin smartphone", "📇 Senza smartphone"],
["📣 Campagnes", "📣 Campañas", "📣 Campagne"],
["💳 Crédits SMS", "💳 Créditos SMS", "💳 Crediti SMS"],
["🔁 Automatismes", "🔁 Automatizaciones", "🔁 Automatismi"],
["⬇ Exporter tous les clients (CSV)", "⬇ Exportar todos los clientes (CSV)", "⬇ Esporta tutti i clienti (CSV)"],
["📇 Clients sans smartphone", "📇 Clientes sin smartphone", "📇 Clienti senza smartphone"],
["Pour les clients qui n'ont pas de téléphone, ou qui ne savent pas s'en servir : inscrivez-les ici, puis cliquez « +1 passage » à chaque visite. Leurs remises s'affichent ici, à appliquer en caisse. Un point toutes les 4 h au maximum, comme avec la carte.", "Para los clientes que no tienen móvil o no saben usarlo: regístralos aquí y pulsa «+1 visita» en cada visita. Sus descuentos aparecen aquí, para aplicar en caja. Un punto cada 4 h como máximo, como con la tarjeta.", "Per i clienti che non hanno un telefono o non sanno usarlo: iscrivili qui, poi clicca «+1 visita» a ogni visita. I loro sconti compaiono qui, da applicare alla cassa. Un punto ogni 4 ore al massimo, come con la carta."],
["Le client accepte de recevoir les offres de la boutique par SMS (à cocher seulement s'il l'a dit).", "El cliente acepta recibir las ofertas de la tienda por SMS (marcar solo si lo ha dicho).", "Il cliente accetta di ricevere le offerte del negozio via SMS (da spuntare solo se l'ha detto)."],
["+ Inscrire le client", "+ Registrar al cliente", "+ Iscrivi il cliente"],
["Chargement…", "Cargando…", "Caricamento…"],
["Envoyer une campagne", "Enviar una campaña", "Invia una campagna"],
["Envoyé par email aux clients ayant donné leur consentement marketing et ayant un email renseigné. Gratuit dans la limite de 2 campagnes par mois, puis 1 crédit par envoi.", "Se envía por email a los clientes que han dado su consentimiento y tienen un email. Gratis hasta 2 campañas al mes, luego 1 crédito por envío.", "Inviata via email ai clienti che hanno dato il consenso e hanno un'email. Gratis fino a 2 campagne al mese, poi 1 credito per invio."],
["Envoyé par SMS aux clients ayant donné leur consentement marketing et ayant un numéro de téléphone renseigné. Chaque SMS envoyé consomme 1 crédit. Le message tient en un seul SMS ; le nom de la boutique et la mention de désinscription STOP sont ajoutés automatiquement.", "Se envía por SMS a los clientes que han dado su consentimiento y tienen un teléfono. Cada SMS consume 1 crédito. El mensaje cabe en un solo SMS; el nombre de la tienda y la mención de baja STOP se añaden automáticamente.", "Inviata via SMS ai clienti che hanno dato il consenso e hanno un numero di telefono. Ogni SMS consuma 1 credito. Il messaggio sta in un solo SMS; il nome del negozio e la dicitura di disiscrizione STOP vengono aggiunti automaticamente."],
["✉ Email", "✉ Email", "✉ Email"],
["💬 SMS", "💬 SMS", "💬 SMS"],
["Destinataires", "Destinatarios", "Destinatari"],
["Tout le réseau", "Toda la red", "Tutta la rete"],
["Catégorie de prestation", "Categoría de servicio", "Categoria di servizio"],
["Toutes les catégories", "Todas las categorías", "Tutte le categorie"],
["Sujet", "Asunto", "Oggetto"],
["Message", "Mensaje", "Messaggio"],
["Aperçu du SMS reçu", "Vista previa del SMS recibido", "Anteprima dell'SMS ricevuto"],
["Quand", "Cuándo", "Quando"],
["Maintenant", "Ahora", "Adesso"],
["Programmer", "Programar", "Programma"],
["Si mes crédits ne suffisent pas, envoyer quand même aux clients venus le plus récemment, dans la limite de mes crédits.", "Si mis créditos no bastan, enviar igualmente a los clientes que vinieron más recientemente, hasta agotar mis créditos.", "Se i miei crediti non bastano, inviare comunque ai clienti venuti più di recente, nel limite dei miei crediti."],
["Envoyer la campagne", "Enviar la campaña", "Invia la campagna"],
["Confirmer l'envoi", "Confirmar el envío", "Conferma l'invio"],
["Envois programmés", "Envíos programados", "Invii programmati"],
["Crédits d'envoi", "Créditos de envío", "Crediti di invio"],
["1 crédit = 1 envoi SMS, ou 1 envoi email au-delà des 2 campagnes gratuites du mois. Plus le pack est grand, moins le crédit coûte cher.", "1 crédito = 1 envío SMS, o 1 envío email más allá de las 2 campañas gratuitas del mes. Cuanto mayor es el pack, más barato sale el crédito.", "1 credito = 1 invio SMS, o 1 invio email oltre le 2 campagne gratuite del mese. Più grande è il pacchetto, meno costa il credito."],
["crédit(s) disponible(s)", "crédito(s) disponible(s)", "credito/i disponibile/i"],
["Boutique", "Tienda", "Negozio"],
["200 crédits · 0,10 € l'unité", "200 créditos · 0,10 € la unidad", "200 crediti · 0,10 € l'uno"],
["Réseau", "Red", "Rete"],
["500 crédits · 0,09 € l'unité", "500 créditos · 0,09 € la unidad", "500 crediti · 0,09 € l'uno"],
["Grand Réseau", "Gran Red", "Grande Rete"],
["1000 crédits · 0,08 € l'unité", "1000 créditos · 0,08 € la unidad", "1000 crediti · 0,08 € l'uno"],
["🎂 SMS d'anniversaire", "🎂 SMS de cumpleaños", "🎂 SMS di compleanno"],
["Le jour de leur anniversaire, vers 10 h, vos clients reçoivent un SMS avec l'offre que vous écrivez ci-dessous, valable 15 jours (sans offre écrite, le SMS annonce « un cadeau vous attend en boutique »). 1 crédit par SMS, pris sur cet accès. Seuls les clients qui ont donné leur date sur leur carte, et qui n'ont pas demandé STOP, le reçoivent.", "El día de su cumpleaños, hacia las 10 h, tus clientes reciben un SMS con la oferta que escribas abajo, válida 15 días (sin oferta escrita, el SMS anuncia «te espera un regalo en la tienda»). 1 crédito por SMS, de este acceso. Solo lo reciben los clientes que han dado su fecha en la tarjeta y no han pedido STOP.", "Il giorno del loro compleanno, verso le 10, i tuoi clienti ricevono un SMS con l'offerta che scrivi qui sotto, valida 15 giorni (senza offerta scritta, l'SMS annuncia «ti aspetta un regalo in negozio»). 1 credito per SMS, da questo accesso. Lo ricevono solo i clienti che hanno indicato la data sulla carta e non hanno chiesto STOP."],
["🔁 Relance des clients & 🎁 offre de bienvenue", "🔁 Recordatorio a clientes y 🎁 oferta de bienvenida", "🔁 Richiamo dei clienti e 🎁 offerta di benvenuto"],
["Relance « client perdu »", "Recordatorio «cliente perdido»", "Richiamo «cliente perso»"],
[": vers 10 h 30, du lundi au samedi (hors jours fériés), les clients qui ne sont pas revenus depuis le délai choisi reçoivent un SMS avec une remise sur leur prochain passage, valable 15 jours. Un seul SMS par client tant qu'il ne revient pas. 1 crédit par SMS, pris sur cet accès. Seuls les clients qui ont accepté les offres, et qui n'ont pas demandé STOP, le reçoivent.", ": hacia las 10 h 30, de lunes a sábado (salvo festivos), los clientes que no han vuelto desde el plazo elegido reciben un SMS con un descuento en su próxima visita, válido 15 días. Un solo SMS por cliente mientras no vuelva. 1 crédito por SMS, de este acceso. Solo lo reciben los clientes que aceptaron las ofertas y no han pedido STOP.", ": verso le 10:30, dal lunedì al sabato (festivi esclusi), i clienti che non sono tornati entro il periodo scelto ricevono un SMS con uno sconto sulla prossima visita, valido 15 giorni. Un solo SMS per cliente finché non torna. 1 credito per SMS, da questo accesso. Lo ricevono solo i clienti che hanno accettato le offerte e non hanno chiesto STOP."],
["Offre de bienvenue", "Oferta de bienvenida", "Offerta di benvenuto"],
[": au tout premier passage, la carte du client affiche une remise à utiliser tout de suite en caisse. Gratuit.", ": en la primera visita, la tarjeta del cliente muestra un descuento para usar enseguida en caja. Gratis.", ": alla primissima visita, la carta del cliente mostra uno sconto da usare subito alla cassa. Gratis."],
["Chargement des données...", "Cargando los datos...", "Caricamento dei dati..."],
["Adresse email", "Email", "Indirizzo email"],
["Mot de passe", "Contraseña", "Password"],
["Afficher le mot de passe", "Mostrar la contraseña", "Mostra la password"],
["Nom de votre commerce", "Nombre de tu comercio", "Nome della tua attività"],
["Ville", "Ciudad", "Città"],
["Pays ou région de votre commerce", "País o región de tu comercio", "Paese o regione della tua attività"],
["Mot de passe (8 caractères min.)", "Contraseña (mín. 8 caracteres)", "Password (min. 8 caratteri)"],
["votre@email.fr", "tu@email.es", "tua@email.it"],
["Code à 6 chiffres", "Código de 6 cifras", "Codice di 6 cifre"],
["Confirmer", "Confirmar", "Conferma"],
["Mot de passe actuel", "Contraseña actual", "Password attuale"],
["Nouveau mot de passe (8 caractères min.)", "Nueva contraseña (mín. 8 caracteres)", "Nuova password (min. 8 caratteri)"],
["Fermer", "Cerrar", "Chiudi"],
["Pays ou région de la boutique", "País o región de la tienda", "Paese o regione del negozio"],
["Collez ici le lien « Demander des avis » de votre fiche Google", "Pega aquí el enlace «Pedir reseñas» de tu ficha de Google", "Incolla qui il link «Chiedi recensioni» della tua scheda Google"],
["Sections du tableau de bord", "Secciones del panel", "Sezioni del pannello"],
["Prénom et initiale du nom *", "Nombre e inicial del apellido *", "Nome e iniziale del cognome *"],
["Téléphone (facultatif)", "Teléfono (opcional)", "Telefono (facoltativo)"],
["🔍 Retrouver un client (prénom ou téléphone)", "🔍 Buscar un cliente (nombre o teléfono)", "🔍 Cerca un cliente (nome o telefono)"],
["Ex : -10% cette semaine dans votre boutique", "Ej.: -10% esta semana en tu tienda", "Es.: -10% questa settimana nel tuo negozio"],
["Votre message...", "Tu mensaje...", "Il tuo messaggio..."],
["Moment de l'envoi", "Momento del envío", "Momento dell'invio"],
["Date et heure d'envoi", "Fecha y hora de envío", "Data e ora di invio"],
["Boulangerie", "Panadería", "Panetteria"],
["Fleuriste", "Floristería", "Fioraio"],
["Caviste", "Vinoteca", "Enoteca"],
["Coiffure", "Peluquería", "Parrucchiere"],
["Café", "Cafetería", "Bar"],
["Restaurant", "Restaurante", "Ristorante"],
["Mode", "Moda", "Moda"],
["Beauté", "Belleza", "Bellezza"],
["Autre", "Otra", "Altro"],
["Les SMS ne peuvent partir que du lundi au samedi, entre 8h et 19h45 (pas le dimanche ni les jours fériés). L'envoi part à l'heure choisie (à 5 minutes près), même si votre ordinateur est éteint.", "Los SMS solo pueden salir de lunes a sábado, entre las 8 h y las 19 h 45 (ni domingos ni festivos). El envío sale a la hora elegida (con 5 minutos de margen), aunque tu ordenador esté apagado.", "Gli SMS possono partire solo dal lunedì al sabato, tra le 8 e le 19:45 (non la domenica né i festivi). L'invio parte all'ora scelta (con 5 minuti di margine), anche se il tuo computer è spento."],
["L'envoi part à l'heure choisie (à 5 minutes près), même si votre ordinateur est éteint.", "El envío sale a la hora elegida (con 5 minutos de margen), aunque tu ordenador esté apagado.", "L'invio parte all'ora scelta (con 5 minuti di margine), anche se il tuo computer è spento."],
["En cours", "En curso", "In corso"],
["crédits insuffisants", "créditos insuficientes", "crediti insufficienti"],
["Annuler cet envoi", "Cancelar este envío", "Annulla questo invio"],
["Saisissez votre adresse email.", "Introduce tu email.", "Inserisci il tuo indirizzo email."],
["Saisissez votre mot de passe.", "Introduce tu contraseña.", "Inserisci la tua password."],
["Email ou mot de passe incorrect.", "Email o contraseña incorrectos.", "Email o password errati."],
["Le code de vérification n'a pas pu être envoyé. Réessayez dans quelques minutes, ou écrivez à contact@ancrimo.fr.", "No se ha podido enviar el código de verificación. Inténtalo de nuevo en unos minutos o escribe a contact@ancrimo.fr.", "Non è stato possibile inviare il codice di verifica. Riprova tra qualche minuto o scrivi a contact@ancrimo.fr."],
["Trop de codes demandés. Réessayez dans une heure.", "Demasiados códigos solicitados. Inténtalo de nuevo dentro de una hora.", "Troppi codici richiesti. Riprova tra un'ora."],
["Erreur de connexion. Réessayez.", "Error de conexión. Inténtalo de nuevo.", "Errore di connessione. Riprova."],
["Ce code n'est plus valable. Revenez à la connexion pour en recevoir un nouveau.", "Este código ya no es válido. Vuelve al inicio de sesión para recibir uno nuevo.", "Questo codice non è più valido. Torna all'accesso per riceverne uno nuovo."],
["Saisissez les 6 chiffres reçus par e-mail.", "Introduce las 6 cifras recibidas por email.", "Inserisci le 6 cifre ricevute via email."],
["Code incorrect. Vérifiez les 6 chiffres reçus par e-mail.", "Código incorrecto. Revisa las 6 cifras recibidas por email.", "Codice errato. Controlla le 6 cifre ricevute via email."],
["Votre commerce", "Tu comercio", "La tua attività"],
["✨ Les couleurs de votre logo", "✨ Los colores de tu logo", "✨ I colori del tuo logo"],
["Couleur principale", "Color principal", "Colore principale"],
["Principale", "Principal", "Principale"],
["Indiquez le nom de votre commerce.", "Indica el nombre de tu comercio.", "Indica il nome della tua attività."],
["Indiquez votre ville.", "Indica tu ciudad.", "Indica la tua città."],
["Choisissez votre activité (ou « Autre »).", "Elige tu actividad (u «Otra»).", "Scegli la tua attività (o «Altro»)."],
["Format non reconnu : utilisez un PNG ou un JPG.", "Formato no reconocido: usa un PNG o un JPG.", "Formato non riconosciuto: usa un PNG o un JPG."],
["Changer de logo", "Cambiar de logo", "Cambia logo"],
["On a repris les couleurs de votre logo. Touchez une pastille pour essayer une autre combinaison.", "Hemos tomado los colores de tu logo. Pulsa un color para probar otra combinación.", "Abbiamo ripreso i colori del tuo logo. Tocca un colore per provare un'altra combinazione."],
["Ce logo n'a pas pu être lu.", "No se ha podido leer este logo.", "Non è stato possibile leggere questo logo."],
["Tester le lien", "Probar el enlace", "Prova il link"],
["Sans lien, l'invitation à laisser un avis n'apparaît pas sur la carte.", "Sin enlace, la invitación a dejar una reseña no aparece en la tarjeta.", "Senza link, l'invito a lasciare una recensione non compare sulla carta."],
["Image trop lourde (500 Ko maximum).", "Imagen demasiado pesada (500 KB como máximo).", "Immagine troppo pesante (500 KB al massimo)."],
["L'envoi n'a pas abouti, réessayez dans un instant.", "El envío no se ha completado, inténtalo de nuevo en un momento.", "L'invio non è andato a buon fine, riprova tra un momento."],
["Envoi du logo…", "Enviando el logo…", "Invio del logo…"],
["Logo enregistré. On vous propose ses couleurs : enregistrez pour les garder.", "Logo guardado. Te proponemos sus colores: guarda para conservarlos.", "Logo salvato. Ti proponiamo i suoi colori: salva per tenerli."],
["Logo enregistré.", "Logo guardado.", "Logo salvato."],
["L'envoi n'a pas abouti.", "El envío no se ha completado.", "L'invio non è andato a buon fine."],
["Logo retiré.", "Logo quitado.", "Logo rimosso."],
["La suppression n'a pas abouti.", "No se ha podido eliminar.", "L'eliminazione non è andata a buon fine."],
["C'est enregistré : votre carte et votre affiche ont changé.", "Guardado: tu tarjeta y tu cartel han cambiado.", "Salvato: la tua carta e il tuo poster sono cambiati."],
["Ce lien d'avis ne vient pas de Google. Copiez le lien « Demander des avis » de votre fiche.", "Este enlace de reseñas no es de Google. Copia el enlace «Pedir reseñas» de tu ficha.", "Questo link di recensioni non è di Google. Copia il link «Chiedi recensioni» della tua scheda."],
["L'enregistrement n'a pas abouti, réessayez.", "No se ha podido guardar, inténtalo de nuevo.", "Il salvataggio non è andato a buon fine, riprova."],
["Saisissez une adresse email valide.", "Introduce un email válido.", "Inserisci un indirizzo email valido."],
["Le mot de passe doit faire au moins 8 caractères.", "La contraseña debe tener al menos 8 caracteres.", "La password deve avere almeno 8 caratteri."],
["Acceptez les conditions générales pour continuer.", "Acepta las condiciones generales para continuar.", "Accetta le condizioni generali per continuare."],
["Cette adresse a déjà un espace Ancrimo. Connectez-vous, ou utilisez « Mot de passe oublié ? ».", "Este email ya tiene un espacio Ancrimo. Inicia sesión o usa «¿Has olvidado la contraseña?».", "Questo indirizzo ha già un'area Ancrimo. Accedi o usa «Password dimenticata?»."],
["Le nom du commerce doit faire entre 2 et 60 caractères. Revenez à l'étape 1 pour le corriger.", "El nombre del comercio debe tener entre 2 y 60 caracteres. Vuelve al paso 1 para corregirlo.", "Il nome dell'attività deve avere tra 2 e 60 caratteri. Torna al passo 1 per correggerlo."],
["La ville doit faire entre 2 et 60 caractères.", "La ciudad debe tener entre 2 y 60 caracteres.", "La città deve avere tra 2 e 60 caratteri."],
["Trop d'inscriptions depuis cette connexion. Réessayez demain ou écrivez à contact@ancrimo.fr.", "Demasiados registros desde esta conexión. Inténtalo mañana o escribe a contact@ancrimo.fr.", "Troppe iscrizioni da questa connessione. Riprova domani o scrivi a contact@ancrimo.fr."],
["Votre espace est créé, mais le code de confirmation n'a pas pu être envoyé. Connectez-vous dans quelques minutes pour en recevoir un.", "Tu espacio está creado, pero no se ha podido enviar el código de confirmación. Inicia sesión dentro de unos minutos para recibir uno.", "La tua area è stata creata, ma non è stato possibile inviare il codice di conferma. Accedi tra qualche minuto per riceverne uno."],
["Les inscriptions sont momentanément fermées. Écrivez à contact@ancrimo.fr.", "Los registros están cerrados temporalmente. Escribe a contact@ancrimo.fr.", "Le iscrizioni sono momentaneamente chiuse. Scrivi a contact@ancrimo.fr."],
["Une erreur est survenue, réessayez dans un instant.", "Se ha producido un error, inténtalo de nuevo en un momento.", "Si è verificato un errore, riprova tra un momento."],
["Si un accès correspond à cette adresse, un lien vient d'être envoyé. Il est valable 1 heure. Pensez à regarder dans les indésirables.", "Si hay un acceso con este email, acabamos de enviar un enlace. Es válido 1 hora. Mira también en spam.", "Se un accesso corrisponde a questo indirizzo, è stato appena inviato un link. È valido 1 ora. Guarda anche nella posta indesiderata."],
["Les deux saisies ne correspondent pas.", "Las dos contraseñas no coinciden.", "Le due password non coincidono."],
["Ce lien n'est plus valable (expiré ou déjà utilisé). Demandez-en un nouveau.", "Este enlace ya no es válido (caducado o ya usado). Pide uno nuevo.", "Questo link non è più valido (scaduto o già usato). Richiedine uno nuovo."],
["Mot de passe modifié. Vous pouvez vous connecter.", "Contraseña cambiada. Ya puedes iniciar sesión.", "Password modificata. Ora puoi accedere."],
["Paiement reçu. Les crédits seront ajoutés à votre solde dans quelques instants.", "Pago recibido. Los créditos se añadirán a tu saldo en unos instantes.", "Pagamento ricevuto. I crediti saranno aggiunti al tuo saldo tra qualche istante."],
["Achat annulé. Aucun montant n'a été débité.", "Compra cancelada. No se ha cobrado nada.", "Acquisto annullato. Non è stato addebitato nulla."],
["Abonnez-vous pour garder vos clients et débloquer les campagnes. Sans engagement.", "Suscríbete para conservar tus clientes y desbloquear las campañas. Sin permanencia.", "Abbonati per tenere i tuoi clienti e sbloccare le campagne. Senza vincoli."],
["Impossible de charger les données.", "No se pueden cargar los datos.", "Impossibile caricare i dati."],
["Au 1er palier", "En el 1.er nivel", "Al 1° livello"],
["Cycle terminé", "Ciclo completado", "Ciclo completato"],
["Clients inscrits", "Clientes registrados", "Clienti iscritti"],
["Passages total", "Visitas en total", "Visite totali"],
["Aucun client inscrit.", "Ningún cliente registrado.", "Nessun cliente iscritto."],
["⚙ Paliers", "⚙ Niveles", "⚙ Livelli"],
["Erreur : vérifiez les valeurs saisies.", "Error: revisa los valores introducidos.", "Errore: controlla i valori inseriti."],
["Erreur de connexion.", "Error de conexión.", "Errore di connessione."],
["Aucune boutique trouvée.", "No se ha encontrado ninguna tienda.", "Nessun negozio trovato."],
["Aucune boutique", "Ninguna tienda", "Nessun negozio"],
["Lecture de l'image impossible.", "No se puede leer la imagen.", "Impossibile leggere l'immagine."],
["Image illisible : essayez un autre fichier.", "Imagen ilegible: prueba otro archivo.", "Immagine illeggibile: prova un altro file."],
["Cycle actuel", "Ciclo actual", "Ciclo attuale"],
["Date inscription", "Fecha de registro", "Data di iscrizione"],
["Merci de remplir le sujet.", "Rellena el asunto.", "Compila l'oggetto."],
["Merci de remplir le message.", "Rellena el mensaje.", "Compila il messaggio."],
["Choisissez une date et une heure d'envoi dans le futur (au moins 5 minutes d'ici).", "Elige una fecha y hora de envío futuras (al menos dentro de 5 minutos).", "Scegli una data e un'ora di invio future (almeno tra 5 minuti)."],
["Envoi en cours...", "Enviando...", "Invio in corso..."],
["Un envoi peut être programmé au maximum 2 mois à l'avance.", "Un envío se puede programar como máximo con 2 meses de antelación.", "Un invio può essere programmato al massimo con 2 mesi di anticipo."],
["Les SMS ne partent que du lundi au samedi, entre 8h et 20h (pas le dimanche ni les jours fériés) : c'est la règle pour les SMS commerciaux. Programmez l'envoi pour plus tard.", "Los SMS solo salen de lunes a sábado, entre las 8 h y las 20 h (ni domingos ni festivos): es la regla para los SMS comerciales. Programa el envío para más tarde.", "Gli SMS partono solo dal lunedì al sabato, tra le 8 e le 20 (non la domenica né i festivi): è la regola per gli SMS commerciali. Programma l'invio per più tardi."],
["Aucun destinataire éligible (consentement + téléphone) pour cette cible.", "Ningún destinatario válido (consentimiento + teléfono) para este objetivo.", "Nessun destinatario idoneo (consenso + telefono) per questo target."],
["Aucun destinataire éligible (consentement + email) pour cette cible.", "Ningún destinatario válido (consentimiento + email) para este objetivo.", "Nessun destinatario idoneo (consenso + email) per questo target."],
["L'envoi de SMS est momentanément indisponible. Aucun crédit n'a été utilisé. Contactez Ancrimo.", "El envío de SMS no está disponible en este momento. No se ha usado ningún crédito. Contacta con Ancrimo.", "L'invio di SMS è momentaneamente non disponibile. Nessun credito è stato usato. Contatta Ancrimo."],
["Tous les appareils ont été déconnectés.", "Se ha cerrado la sesión en todos los dispositivos.", "Tutti i dispositivi sono stati disconnessi."],
["Saisissez votre mot de passe actuel.", "Introduce tu contraseña actual.", "Inserisci la tua password attuale."],
["Le mot de passe actuel est incorrect.", "La contraseña actual es incorrecta.", "La password attuale è errata."],
["Le nouveau mot de passe est identique à l'ancien.", "La nueva contraseña es igual a la anterior.", "La nuova password è uguale alla precedente."],
["Votre session a expiré. Reconnectez-vous.", "Tu sesión ha caducado. Vuelve a iniciar sesión.", "La tua sessione è scaduta. Accedi di nuovo."],
["Mot de passe modifié. Notez-le : l'ancien ne fonctionne plus, et les autres appareils ont été déconnectés.", "Contraseña cambiada. Apúntala: la anterior ya no funciona y los demás dispositivos se han desconectado.", "Password modificata. Annotala: la precedente non funziona più e gli altri dispositivi sono stati disconnessi."],
["Aucun client n'a encore donné sa date", "Ningún cliente ha dado todavía su fecha", "Nessun cliente ha ancora indicato la data"],
["1 client a donné sa date", "1 cliente ha dado su fecha", "1 cliente ha indicato la data"],
["Offre d'anniversaire enregistrée.", "Oferta de cumpleaños guardada.", "Offerta di compleanno salvata."],
["Session expirée : reconnectez-vous.", "Sesión caducada: vuelve a iniciar sesión.", "Sessione scaduta: accedi di nuovo."],
["SMS d'anniversaire activé.", "SMS de cumpleaños activado.", "SMS di compleanno attivato."],
["SMS d'anniversaire désactivé.", "SMS de cumpleaños desactivado.", "SMS di compleanno disattivato."],
["Réglage indisponible pour le moment.", "Ajuste no disponible por el momento.", "Impostazione non disponibile al momento."],
["Liste indisponible pour le moment.", "Lista no disponible por el momento.", "Elenco non disponibile al momento."],
["Aucun client inscrit pour l'instant.", "Ningún cliente registrado por ahora.", "Nessun cliente iscritto per ora."],
["Aucun client trouvé.", "No se ha encontrado ningún cliente.", "Nessun cliente trovato."],
["✓ Appliquée", "✓ Aplicado", "✓ Applicato"],
["+1 passage", "+1 visita", "+1 visita"],
["Ce client a une carte : il valide son passage avec son téléphone.", "Este cliente tiene tarjeta: valida su visita con su móvil.", "Questo cliente ha una carta: convalida la visita con il suo telefono."],
["Passage non enregistré.", "Visita no registrada.", "Visita non registrata."],
["La remise n'a pas pu être notée comme appliquée.", "No se ha podido marcar el descuento como aplicado.", "Non è stato possibile segnare lo sconto come applicato."],
["✓ Remise notée comme appliquée.", "✓ Descuento marcado como aplicado.", "✓ Sconto segnato come applicato."],
["Numéro de téléphone invalide (ou laissez la case vide).", "Número de teléfono no válido (o deja la casilla vacía).", "Numero di telefono non valido (o lascia il campo vuoto)."],
["Inscription impossible pour le moment.", "No se puede registrar por el momento.", "Iscrizione impossibile al momento."],
["Réglage des SMS d'anniversaire par boutique", "Ajuste de los SMS de cumpleaños por tienda", "Impostazione degli SMS di compleanno per negozio"],
["Réglage de la relance et de l'offre de bienvenue par boutique", "Ajuste del recordatorio y de la oferta de bienvenida por tienda", "Impostazione del richiamo e dell'offerta di benvenuto per negozio"],
["🔒 Disponible avec l'abonnement", "🔒 Disponible con la suscripción", "🔒 Disponibile con l'abbonamento"],
["Inscrit depuis moins de 30 jours", "Registrado hace menos de 30 días", "Iscritto da meno di 30 giorni"],
["Au moins 10 passages, venu dans les 90 derniers jours", "Al menos 10 visitas, vino en los últimos 90 días", "Almeno 10 visite, venuto negli ultimi 90 giorni"],
["Au moins 3 passages, venu dans les 60 derniers jours", "Al menos 3 visitas, vino en los últimos 60 días", "Almeno 3 visite, venuto negli ultimi 60 giorni"],
["Venu dans les 60 derniers jours", "Vino en los últimos 60 días", "Venuto negli ultimi 60 giorni"],
["Pas revenu depuis 60 à 120 jours", "No ha vuelto desde hace 60 a 120 días", "Non è tornato da 60 a 120 giorni"],
["Pas revenu depuis plus de 120 jours", "No ha vuelto desde hace más de 120 días", "Non è tornato da più di 120 giorni"],
["aucun client", "ningún cliente", "nessun cliente"],
["🔁 Relance « client perdu »", "🔁 Recordatorio «cliente perdido»", "🔁 Richiamo «cliente perso»"],
["🎁 Offre de bienvenue", "🎁 Oferta de bienvenida", "🎁 Offerta di benvenuto"],
["Relance désactivée.", "Recordatorio desactivado.", "Richiamo disattivato."],
["Offre de bienvenue activée.", "Oferta de bienvenida activada.", "Offerta di benvenuto attivata."],
["Offre de bienvenue désactivée.", "Oferta de bienvenida desactivada.", "Offerta di benvenuto disattivata."],
["Réglage enregistré.", "Ajuste guardado.", "Impostazione salvata."],
["Préparation du paiement...", "Preparando el pago...", "Preparazione del pagamento..."],
["Votre offre, ex. : un café offert, ou -10 % sur vos achats", "Tu oferta, p. ej.: un café gratis o -10 % en tus compras", "La tua offerta, es.: un caffè offerto o -10 % sui tuoi acquisti"],
["Sans engagement, résiliable à tout moment.", "Sin permanencia, cancelable en cualquier momento.", "Senza vincoli, disdicibile in qualsiasi momento."],
["Votre carte de fidélité", "Tu tarjeta de fidelidad", "La tua carta fedeltà"],
["Content de vous revoir, Camille !", "¡Hola de nuevo, Camille!", "Che piacere rivederti, Camille!"],
["J'ai fait un achat, +1 point", "He hecho una compra, +1 punto", "Ho fatto un acquisto, +1 punto"],
["POINTS", "PUNTOS", "PUNTI"],
["Couleur du logo", "Color del logo", "Colore del logo"],
["Relance client perdu", "Recordatorio cliente perdido", "Richiamo cliente perso"],
["Délai sans venir", "Plazo sin venir", "Periodo senza venire"],
["Remise de relance", "Descuento de recordatorio", "Sconto di richiamo"],
["Remise de bienvenue", "Descuento de bienvenida", "Sconto di benvenuto"],
["Après", "Después de", "Dopo"],
["sans venir, offrir", "sin venir, ofrecer", "senza venire, offrire"],
["Au premier passage :", "En la primera visita:", "Alla prima visita:"],
["sur l'achat en cours", "en la compra actual", "sull'acquisto in corso"],
["Nouveau", "Nuevo", "Nuovo"],
["Régulier", "Habitual", "Abituale"],
["Occasionnel", "Ocasional", "Occasionale"],
["À risque", "En riesgo", "A rischio"],
["Perdu", "Perdido", "Perso"],
["✓ Invitation à laisser un avis active ·", "✓ Invitación a dejar una reseña activa ·", "✓ Invito a lasciare una recensione attivo ·"],
["Programmé", "Programado", "Programmato"],
["Envoyé", "Enviado", "Inviato"],
["Échec", "Fallido", "Non riuscito"],
["Annulé", "Cancelado", "Annullato"],
["Annulation…", "Cancelando…", "Annullamento…"],
["Programmer l'envoi", "Programar el envío", "Programma l'invio"],
["Programmation...", "Programando...", "Programmazione..."],
["est inscrit. Cliquez « +1 passage » pour compter sa visite d'aujourd'hui.", "está registrado. Pulsa «+1 visita» para contar su visita de hoy.", "è iscritto. Clicca «+1 visita» per contare la sua visita di oggi."],
["✓ Passage compté pour", "✓ Visita contada para", "✓ Visita registrata per"],
["Vos crédits permettent", "Tus créditos permiten", "I tuoi crediti permettono"],
["Si vos crédits ne suffisent pas au moment de l'envoi, les clients venus le plus récemment passeront en priorité.", "Si tus créditos no bastan en el momento del envío, los clientes que vinieron más recientemente tendrán prioridad.", "Se i tuoi crediti non bastano al momento dell'invio, i clienti venuti più di recente avranno la priorità."],
["envois email possibles aujourd'hui.", "envíos de email posibles hoy.", "invii email possibili oggi."],
["VIP", "VIP", "VIP"],
["Verso de l'affiche (facultatif)", "Reverso del cartel (opcional)", "Retro del poster (facoltativo)"],
["Imprimez en recto verso, retournement sur le bord long, puis collez la pastille NFC dans le cercle ci-dessous : elle se trouvera juste derrière le QR code de l'affiche. Sans pastille NFC, imprimez seulement la page 1.", "Imprime a doble cara, volteando por el borde largo, y pega la pegatina NFC en el círculo de abajo: quedará justo detrás del código QR del cartel. Sin pegatina NFC, imprime solo la página 1.", "Stampa fronte-retro, girando sul lato lungo, poi incolla l'adesivo NFC nel cerchio qui sotto: si troverà proprio dietro il codice QR del poster. Senza adesivo NFC, stampa solo la pagina 1."],
["Style des titres", "Estilo de los títulos", "Stile dei titoli"],
["Fond du bandeau", "Fondo de la banda", "Sfondo della fascia"],
["Classique", "Clásico", "Classico"],
["Moderne", "Moderno", "Moderno"],
["Artisanal", "Artesanal", "Artigianale"],
["Dégradé", "Degradado", "Sfumato"],
["Uni", "Liso", "Tinta unita"],
["Motif", "Motivo", "Motivo"],
["Secondaire", "Secundario", "Secondario"],
["Inscrits", "Registrados", "Iscritti"],
["Passages", "Visitas", "Visite"],
["🎨 Apparence", "🎨 Aspecto", "🎨 Aspetto"],
["Palier 1 — passages", "Nivel 1 — visitas", "Livello 1 — visite"],
["Palier 2 — passages (optionnel)", "Nivel 2 — visitas (opcional)", "Livello 2 — visite (facoltativo)"],
["Réduction %", "Descuento %", "Sconto %"],
["⬇ Exporter cette boutique (CSV)", "⬇ Exportar esta tienda (CSV)", "⬇ Esporta questo negozio (CSV)"]
  ];
  const TRAD = { es: {}, it: {} };
  for (const [f, e, i] of TRIPLES) { const k = f.replace(/\s+/g, " ").trim(); TRAD.es[k] = e; TRAD.it[k] = i; }
  const nb = (n, un, plus) => (Number(n) === 1 ? un : plus);
  const STATUT = {
    es: { nouveaux: "nuevos", "réguliers": "habituales", occasionnels: "ocasionales", "à risque": "en riesgo", perdus: "perdidos", nouveau: "nuevo", "régulier": "habitual", occasionnel: "ocasional", perdu: "perdido", VIP: "VIP" },
    it: { nouveaux: "nuovi", "réguliers": "abituali", occasionnels: "occasionali", "à risque": "a rischio", perdus: "persi", nouveau: "nuovo", "régulier": "abituale", occasionnel: "occasionale", perdu: "perso", VIP: "VIP" },
  };
  // Phrases qui peuvent se suivre dans un même message (résultat d'envoi, détail d'un envoi programmé)
  const PHRASES = {
    es: [
      [/Envoyé à (\d+) destinataire\(s\)\./, "Enviado a $1 destinatario(s)."],
      [/Non envoyé : crédits insuffisants\./, "No enviado: créditos insuficientes."],
      [/Non envoyé : ([^.]*)\./, "No enviado: $1."],
      [/(\d+) erreur\(s\) d'envoi\./, "$1 error(es) de envío."],
      [/Il vous reste (\d+) campagne\(s\) email gratuite\(s\) ce mois\./, "Te quedan $1 campaña(s) de email gratis este mes."],
      [/(\d+) crédit\(s\) utilisé\(s\), (\d+) restant\(s\)\./, "$1 crédito(s) usado(s), quedan $2."],
    ],
    it: [
      [/Envoyé à (\d+) destinataire\(s\)\./, "Inviato a $1 destinatario/i."],
      [/Non envoyé : crédits insuffisants\./, "Non inviato: crediti insufficienti."],
      [/Non envoyé : ([^.]*)\./, "Non inviato: $1."],
      [/(\d+) erreur\(s\) d'envoi\./, "$1 errore/i di invio."],
      [/Il vous reste (\d+) campagne\(s\) email gratuite\(s\) ce mois\./, "Ti restano $1 campagne email gratuite questo mese."],
      [/(\d+) crédit\(s\) utilisé\(s\), (\d+) restant\(s\)\./, "$1 crediti usati, ne restano $2."],
    ],
  };
  const phrases = (s) => { for (const [m, r] of PHRASES[LANGUE]) s = s.replace(m, r); return s; };
  // [motif, espagnol, italien]
  const MOTIFS3 = [
    [/^Vue d'ensemble de (\d+) boutiques$/, "Resumen de $1 tiendas",
      "Panoramica di $1 negozi"],
    [/^(\d+) au palier (\d+) \(−(.+)\)$/, "$1 en el nivel $2 (−$3)",
      "$1 al livello $2 (−$3)"],
    [/^Couleur (#[0-9a-fA-F]{3,8})$/, "Color $1",
      "Colore $1"],
    [/^Au palier (\d+)\+$/, "En el nivel $1+",
      "Al livello $1+"],
    [/^🎁 Essai gratuit : encore (\d+) jours?, jusqu'au (.+)\.$/, (m, j, d) => `🎁 Prueba gratis: ${nb(j, "queda 1 día", "quedan " + j + " días")}, hasta el ${d}.`,
      (m, j, d) => `🎁 Prova gratuita: ancora ${nb(j, "1 giorno", j + " giorni")}, fino al ${d}.`],
    [/^Pour une activité « (.+) », on vous propose (\d+) passages = −(.+) % puis (\d+) passages = −(.+) %\. Vous pourrez le changer à tout moment\.$/, (m, a, p1, c1, p2, c2) => `Para una actividad «${tr(a)}», te proponemos ${p1} visitas = −${c1} % y luego ${p2} visitas = −${c2} %. Podrás cambiarlo en cualquier momento.`,
      (m, a, p1, c1, p2, c2) => `Per un'attività «${tr(a)}», ti proponiamo ${p1} visite = −${c1} % poi ${p2} visite = −${c2} %. Potrai cambiarlo in qualsiasi momento.`],
    [/^(\d+) clients ont donné leur date$/, "$1 clientes han dado su fecha",
      "$1 clienti hanno indicato la data"],
    [/^(.+?) · activé depuis un autre accès, qui paie les SMS$/, (m, a) => `${tr(a)} · activado desde otro acceso, que paga los SMS`,
      (m, a) => `${tr(a)} · attivato da un altro accesso, che paga gli SMS`],
    [/^(\d+) SMS d'anniversaire envoyés ces 12 derniers mois\.$/, "$1 SMS de cumpleaños enviados en los últimos 12 meses.",
      "$1 SMS di compleanno inviati negli ultimi 12 mesi."],
    [/^(\d+) \/ (\d+) passages · (\d+) au total$/, "$1 / $2 visitas · $3 en total",
      "$1 / $2 visite · $3 in totale"],
    [/^(\d+) passages = −(.+)$/, "$1 visitas = −$2",
      "$1 visite = −$2"],
    [/^(\d+)\/(\d+) · inscrit le (.+)$/, "$1/$2 · registrado el $3",
      "$1/$2 · iscritto il $3"],
    [/^(\d+) (nouveaux|VIP|réguliers|occasionnels|à risque|perdus|nouveau|régulier|occasionnel|perdu)$/, (m, n, s) => n + " " + STATUT.es[s],
      (m, n, s) => n + " " + STATUT.it[s]],
    [/^Crédits insuffisants : il faut (\d+) crédit\(s\), il en reste (\d+)\. Achetez un pack de crédits ci-dessus, ou cochez « envoyer quand même dans la limite de mes crédits »\.$/, "Créditos insuficientes: hacen falta $1 crédito(s) y quedan $2. Compra un pack de créditos arriba o marca «enviar igualmente hasta agotar mis créditos».",
      "Crediti insufficienti: servono $1 crediti, ne restano $2. Acquista un pacchetto di crediti qui sopra o spunta «invia comunque nel limite dei miei crediti»."],
    [/^Message trop long pour un seul SMS : (\d+) caractères pour (\d+) maximum\. Raccourcissez-le puis renvoyez\.$/, "Mensaje demasiado largo para un solo SMS: $1 caracteres para un máximo de $2. Acórtalo y vuelve a enviarlo.",
      "Messaggio troppo lungo per un solo SMS: $1 caratteri per un massimo di $2. Accorcialo e reinvialo."],
    [/^C'est programmé : envoi le (.+)\. Les crédits seront utilisés au moment de l'envoi\. Vous pouvez l'annuler ci-dessous d'ici là\.$/, "Programado: envío el $1. Los créditos se usarán en el momento del envío. Puedes cancelarlo abajo hasta entonces.",
      "Programmato: invio $1. I crediti saranno usati al momento dell'invio. Puoi annullarlo qui sotto fino ad allora."],
    [/^Quota mensuel atteint \((\d+)\/(\d+) campagnes ce mois\)\. Contactez Ancrimo pour ajouter des campagnes supplémentaires\.$/, "Cuota mensual alcanzada ($1/$2 campañas este mes). Contacta con Ancrimo para añadir más campañas.",
      "Quota mensile raggiunta ($1/$2 campagne questo mese). Contatta Ancrimo per aggiungere altre campagne."],
    [/^Cette campagne vise (\d+) destinataires mais il ne reste que (\d+) envois possibles aujourd'hui\. Réessayez demain ou ciblez une seule boutique\.$/, "Esta campaña va dirigida a $1 destinatarios, pero solo quedan $2 envíos posibles hoy. Inténtalo mañana o elige una sola tienda.",
      "Questa campagna è rivolta a $1 destinatari, ma restano solo $2 invii possibili oggi. Riprova domani o scegli un solo negozio."],
    [/^(Confirmer|Programmer) l'envoi par (SMS|email)(?: le (.+))? à$/, (m, v, c, d) => `${v === "Confirmer" ? "¿Confirmar" : "¿Programar"} el envío por ${c}${d ? " el " + d : ""} a`,
      (m, v, c, d) => `${v === "Confirmer" ? "Confermare" : "Programmare"} l'invio via ${c}${d ? " " + d : ""} a`],
    [/^destinataires? \((.*)\) \?\s*(.*)$/, (m, a, l) => `destinatario(s) (${a})?${l ? " " + tr(l) : ""}`,
      (m, a, l) => `destinatario/i (${a})?${l ? " " + tr(l) : ""}`],
    [/^Vos crédits permettent (\d+) envoi\(s\) : les (\d+) clients venus le plus récemment le recevront\.$/, "Tus créditos permiten $1 envío(s): lo recibirán los $2 clientes que vinieron más recientemente.",
      "I tuoi crediti permettono $1 invio/i: lo riceveranno i $2 clienti venuti più di recente."],
    [/^campagnes? email gratuites? restantes? ce mois \((\d+)\/(\d+) utilisées?\) ·$/, "campaña(s) de email gratis restante(s) este mes ($1/$2 usada(s)) ·",
      "campagna/e email gratuita/e rimasta/e questo mese ($1/$2 usata/e) ·"],
    [/^caractères — raccourcissez de (\d+) caractères? pour tenir en un seul SMS\.$/, "caracteres — acorta $1 carácter(es) para que quepa en un solo SMS.",
      "caratteri — accorcia di $1 carattere/i per stare in un solo SMS."],
    [/^caractères — 1 SMS = 1 crédit par destinataire\.$/, "caracteres — 1 SMS = 1 crédito por destinatario.",
      "caratteri — 1 SMS = 1 credito per destinatario."],
    [/^([\s\S]*)\nSTOP au 3xxxx$/, "$1\nSTOP al 3xxxx",
      "$1\nSTOP al 3xxxx"],
    [/^Aperçu : « (.+?) : Joyeux anniversaire Camille ! (.+), jusqu'au … sur ce SMS\. »$/, "Vista previa: «$1: ¡Feliz cumpleaños, Camille! $2, hasta el … con este SMS.»",
      "Anteprima: «$1: Buon compleanno, Camille! $2, fino al … con questo SMS.»"],
    [/^Aperçu : « (.+?) : Joyeux anniversaire Camille ! Un cadeau vous attend en boutique jusqu'au … sur ce SMS\. »$/, "Vista previa: «$1: ¡Feliz cumpleaños, Camille! Te espera un regalo en la tienda hasta el … con este SMS.»",
      "Anteprima: «$1: Buon compleanno, Camille! Ti aspetta un regalo in negozio fino al … con questo SMS.»"],
    [/^Relance activée : (.+) au prochain envoi, vers 10 h 30\.$/, (m, a) => `Recordatorio activado: ${tr(a)} en el próximo envío, hacia las 10 h 30.`,
      (m, a) => `Richiamo attivato: ${tr(a)} al prossimo invio, verso le 10:30.`],
    [/^(.+?) à relancer au prochain envoi · (\d+) relancés? ces 30 derniers jours( · activé depuis un autre accès, qui paie les SMS)?$/, (m, a, n, p) => `${tr(a)} por recordar en el próximo envío · ${n} ${nb(n, "recordado", "recordados")} en los últimos 30 días${p ? " · activado desde otro acceso, que paga los SMS" : ""}`,
      (m, a, n, p) => `${tr(a)} da richiamare al prossimo invio · ${n} ${nb(n, "richiamato", "richiamati")} negli ultimi 30 giorni${p ? " · attivato da un altro accesso, che paga gli SMS" : ""}`],
    [/^Si vous l'activez : (.+?) relancés? au prochain envoi \((\d+) crédits?\)\.$/, (m, a, n) => `Si lo activas: ${tr(a)} ${nb(n, "recibirá", "recibirán")} un recordatorio en el próximo envío (${n} ${nb(n, "crédito", "créditos")}).`,
      (m, a, n) => `Se lo attivi: ${tr(a)} ${nb(n, "sarà richiamato", "saranno richiamati")} al prossimo invio (${n} ${nb(n, "credito", "crediti")}).`],
    [/^(.+) : disponible avec l'abonnement\.$/, (m, a) => `${tr(a)}: disponible con la suscripción.`,
      (m, a) => `${tr(a)}: disponibile con l'abbonamento.`],
    [/^🎁 −(\S+) % \((bienvenue|fidélité)\) — jusqu'au (.+)$/, (m, p, t, d) => `🎁 −${p} % (${t === "bienvenue" ? "bienvenida" : "fidelidad"}) — hasta el ${d}`,
      (m, p, t, d) => `🎁 −${p} % (${t === "bienvenue" ? "benvenuto" : "fedeltà"}) — fino al ${d}`],
    [/^🎉 Remise de (\S+) % à appliquer( \(offre de bienvenue\))? — valable jusqu'au (.+)\.$/, (m, p, b, d) => `🎉 Descuento del ${p} % para aplicar${b ? " (oferta de bienvenida)" : ""} — válido hasta el ${d}.`,
      (m, p, b, d) => `🎉 Sconto del ${p} % da applicare${b ? " (offerta di benvenuto)" : ""} — valido fino al ${d}.`],
    [/^Ce numéro est déjà inscrit( \(.+\))? : (il est dans la liste ci-dessous|ce client a déjà sa carte sur son téléphone)\.$/, (m, p, s) => `Este número ya está registrado${p || ""}: ${s.startsWith("il") ? "está en la lista de abajo." : "este cliente ya tiene su tarjeta en el móvil."}`,
      (m, p, s) => `Questo numero è già iscritto${p || ""}: ${s.startsWith("il") ? "è nell'elenco qui sotto." : "questo cliente ha già la carta sul telefono."}`],
    [/^Activer le SMS d'anniversaire pour (.+)$/, "Activar el SMS de cumpleaños para $1",
      "Attiva l'SMS di compleanno per $1"],
    [/^SMS d'anniversaire (.+)$/, "SMS de cumpleaños $1",
      "SMS di compleanno $1"],
    [/^Relance client perdu (.+)$/, "Recordatorio cliente perdido $1",
      "Richiamo cliente perso $1"],
    [/^Offre de bienvenue (.+)$/, "Oferta de bienvenida $1",
      "Offerta di benvenuto $1"],
    [/^(.+) · (SMS|Email) · Tout le réseau$/, "$1 · $2 · Toda la red",
      "$1 · $2 · Tutta la rete"],
    [/^(Envoyé à \d+ destinataire\(s\)\.|Non envoyé : )([\s\S]*)$/, (m) => phrases(m),
      (m) => phrases(m)],
    [/^Erreur : (.+)$/, "Error: $1",
      "Errore: $1"],
    [/^destinataires?(\(s\))? recevront (ce SMS|cet email) \(consentement \+ (téléphone|email) renseigné\)\.$/, (m, x, q, c) => `destinatario(s) recibirán ${q === "ce SMS" ? "este SMS" : "este email"} (consentimiento + ${c === "email" ? "email" : "teléfono"} indicado).`,
      (m, x, q, c) => `destinatario/i riceveranno ${q === "ce SMS" ? "questo SMS" : "questa email"} (consenso + ${c === "email" ? "email" : "telefono"} indicato).`],
    [/^(\d+) clients$/, "$1 clientes",
      "$1 clienti"],
    [/^1 client$/, "1 cliente",
      "1 cliente"],
    [/^Vous avez été déconnecté après (.+)$/, "Se ha cerrado tu sesión tras $1",
      "Sei stato disconnesso dopo $1"],
    [/^Trop de tentatives\. Réessayez dans (.+)$/, "Demasiados intentos. Inténtalo de nuevo dentro de $1",
      "Troppi tentativi. Riprova tra $1"],
    [/^(\d+) jours$/, "$1 días",
      "$1 giorni"],
  ];
  const MOTIFS = { es: MOTIFS3.map((m) => [m[0], m[1]]), it: MOTIFS3.map((m) => [m[0], m[2]]) };
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  // Traduit un texte français entier (sans espaces autour) ; undefined si inconnu
  function tr(t) {
    if (LANGUE === "fr") return t;
    const r = TRAD[LANGUE][norm(t)];
    if (r !== undefined) return r;
    for (const [motif, remplacement] of MOTIFS[LANGUE]) {
      if (motif.test(t)) return t.replace(motif, remplacement);
      const n = norm(t);
      if (n !== t && motif.test(n)) return n.replace(motif, remplacement);
    }
    return t;
  }
  function traduireTexte(s) {
    if (LANGUE === "fr" || !s) return s;
    const t = s.trim();
    if (!t) return s;
    const r = tr(t);
    if (r === t) return s;
    // pas d'espace avant « : » « , » « . » en espagnol et en italien
    return s.replace(/* espace avant */ /^\s+(?=[:,.])/.test(s) && /^[:,.]/.test(r) ? /^\s+/ : /(?!)/, "").replace(t, () => r);
  }
  // Textes d'origine (français) et dernier texte écrit par nous, pour retraduire ou revenir au français
  const ORIG = new WeakMap(), ECRIT = new WeakMap();
  const ATTRS = ["placeholder", "aria-label", "alt", "title"];
  function majTexte(n) {
    const cur = n.nodeValue;
    if (ECRIT.get(n) !== cur) ORIG.set(n, cur);
    const fr = ORIG.get(n);
    const v = LANGUE === "fr" ? fr : traduireTexte(fr);
    ECRIT.set(n, v);
    if (v !== cur) n.nodeValue = v;
  }
  function majAttr(el, a) {
    if (!el.hasAttribute(a)) return;
    const cur = el.getAttribute(a);
    let o = ORIG.get(el); if (!o) { o = {}; ORIG.set(el, o); }
    let e = ECRIT.get(el); if (!e) { e = {}; ECRIT.set(el, e); }
    if (e[a] !== cur) o[a] = cur;
    const v = LANGUE === "fr" ? o[a] : traduireTexte(o[a]);
    e[a] = v;
    if (v !== cur) el.setAttribute(a, v);
  }
  const ignore = (el) => el && (el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "TEXTAREA" || el.closest("#poster-print"));
  const ignoreAttr = (el) => el && (el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.closest("#poster-print"));
  function traduireDans(racine) {
    if (!racine) return;
    if (racine.nodeType === 3) { if (!ignore(racine.parentElement)) majTexte(racine); return; }
    if (racine.nodeType !== 1) return;
    if (ignore(racine)) { if (!ignoreAttr(racine)) for (const a of ATTRS) majAttr(racine, a); return; }
    const marcheur = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n = racine;
    do {
      if (n.nodeType === 3) { if (!ignore(n.parentElement)) majTexte(n); }
      else if (!ignoreAttr(n)) for (const a of ATTRS) majAttr(n, a);
    } while ((n = marcheur.nextNode()));
  }
  let observateur = null, TITRE_FR = null;
  function appliquer(l) {
    if (!LOCALES[l]) l = "fr";
    if (l === LANGUE) return;
    LANGUE = l;
    document.documentElement.lang = l;
    if (TITRE_FR === null) TITRE_FR = document.title;
    document.title = l === "fr" ? TITRE_FR : traduireTexte(TITRE_FR);
    traduireDans(document.body);
    if (!observateur) {
      observateur = new MutationObserver((liste) => {
        if (LANGUE === "fr") {
          // en français, on note seulement les nouveaux textes d'origine (pas de remplacement)
          for (const m of liste) if (m.type === "characterData") { if (ECRIT.get(m.target) !== m.target.nodeValue) ORIG.set(m.target, m.target.nodeValue); }
          return;
        }
        for (const m of liste) {
          if (m.type === "childList") m.addedNodes.forEach((x) => traduireDans(x));
          else if (m.type === "characterData") traduireDans(m.target);
          else if (m.type === "attributes" && !ignoreAttr(m.target)) majAttr(m.target, m.attributeName);
        }
      });
      observateur.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    }
  }
  // API pour la page
  window.ancrimoLangue = function (l, retenir) {
    appliquer(l);
    if (retenir) { try { localStorage.setItem("ancrimo_langue", LANGUE); } catch (e) {} }
  };
  window.ancrimoLocale = () => LOCALES[LANGUE];
  window.ancrimoLangueActive = () => LANGUE;
  // Texte français d'origine d'un élément (la page compare parfois le libellé d'un bouton)
  window.ancrimoFr = function (el) {
    if (!el) return "";
    let s = "";
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) s += (ECRIT.get(n) === n.nodeValue && ORIG.has(n)) ? ORIG.get(n) : n.nodeValue;
    return s;
  };
  // Langue de départ, avant connexion
  function langueDepart() {
    try { const q = new URLSearchParams(location.search).get("lang"); if (q && LOCALES[q]) return q; } catch (e) {}
    try { const m = localStorage.getItem("ancrimo_langue"); if (m && LOCALES[m]) return m; } catch (e) {}
    const nav = (navigator.language || "").slice(0, 2).toLowerCase();
    return nav === "es" || nav === "it" ? nav : "fr";
  }
  function demarrer() {
    appliquer(langueDepart());
    const zone = document.getElementById("ins-zone");
    if (zone) zone.addEventListener("change", () => appliquer(zone.value === "es" ? "es" : zone.value === "it" ? "it" : "fr"));
    // page en espagnol ou en italien (?lang=, langue du téléphone ou dernière langue utilisée) :
    // pays de l'inscription déjà choisi (Espagne / Italie), modifiable dans la liste
    if (zone && (LANGUE === "es" || LANGUE === "it") && zone.value === "fr") { zone.value = LANGUE; zone.dispatchEvent(new Event("change", { bubbles: true })); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer); else demarrer();
})();
