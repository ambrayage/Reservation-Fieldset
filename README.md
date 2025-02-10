# Reservation-Fieldset

### Spécifications fonctionnelles

L'application permet à un utilisateur d'ajouter des réservations en sélectionnant une date et en indiquant un nombre de places.  

#### Fonctionnalités principales :

1. **Affichage d'un formulaire initial**
   - Un formulaire s'affiche avec un premier champ de réservation contenant :
     - Un sélecteur de date.
     - Un champ de saisie numérique pour le nombre de places.

2. **Remplissage dynamique du sélecteur de dates**
   - Les dates disponibles sont définies dans un tableau `datesToDisplay` dans `app.js`.
   - Lors du chargement de la page, ces dates doivent être injectées dans les listes déroulantes de chaque réservation.

3. **Ajout de nouvelles réservations**
   - Un bouton `Ajouter une autre réservation` (`#add`) est présent sous le formulaire.
   - Lorsque l'utilisateur clique sur ce bouton :
     - Un nouveau `fieldset` identique au premier est ajouté.
     - Les nouvelles réservations doivent aussi inclure les mêmes options de dates.

4. **Suppression d'une réservation**
   - Chaque bloc de réservation doit avoir un bouton "Supprimer" permettant de retirer ce bloc.
   - Il ne doit pas être possible de supprimer la dernière réservation restante.

5. **Soumission du formulaire**
   - Un bouton `Enregistrer les réservations` soumet le formulaire.
   - La soumission doit récupérer toutes les réservations sous forme de données exploitables (ex. : JSON).

---

### Points de blocage identifiés

1. **Le bouton "Ajouter" (`#add`) est désactivé (`disabled`)**
   - Il faut s'assurer qu'il s'active correctement en fonction des règles définies.

2. **L'ajout d'une nouvelle réservation n'est pas implémenté**
   - Il manque le code pour créer dynamiquement un nouveau `fieldset` à chaque clic sur le bouton "Ajouter".

3. **Absence de gestion des événements pour supprimer une réservation**
   - Il faut ajouter un bouton "Supprimer" pour chaque `fieldset`, et gérer l'événement de suppression.

4. **Injection des dates dans le `select` non réalisée**
   - Le fichier `app.js` contient un tableau de dates (`datesToDisplay`), mais il manque la logique pour remplir les `select` du formulaire.

