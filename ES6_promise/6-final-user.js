import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Fonction exportée par défaut qui s’appelle handleProfileSignup
// Elle prend trois arguments : firstName, lastName, fileName
export default function handleProfileSignup(firstName, lastName, fileName) {
  // On lance deux promesses en parallèle avec Promise.allSettled
  // signUpUser s'occupe de créer un utilisateur avec firstName et lastName
  // uploadPhoto s'occupe de charger la photo avec fileName
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
  // Quand toutes les promesses sont terminées
  // (qu’elles réussissent ou échouent)
  // on reçoit un tableau de résultats qu’on traite avec map
    .then((results) => results.map((result) => {
    // Pour chaque résultat, on vérifie son statut
      if (result.status === 'fulfilled') {
      // Si la promesse a réussi, on retourne un objet avec le statut
      // et la valeur retournée
        return { status: 'fulfilled', value: result.value };
      }
      // Sinon, si la promesse a échoué, on retourne un objet avec le
      // statut et la raison de l’erreur (convertie en chaîne)
      return { status: 'rejected', value: result.reason.toString() };
    }));
}
