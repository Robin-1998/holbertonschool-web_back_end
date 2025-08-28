export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
// La Promise.race()méthode statique prend en entrée un itérable de
// promesses et renvoie un seul Promise.
