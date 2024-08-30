export const getMonth = (): string => {
  return new Date().toLocaleString("default", { month: "long" }).toUpperCase();
};



//CODIGO PARA SUBIR CARRERAS A FIREBASE
// async function uploadTracksToFirestore(tracks: Track[]) {
//   try {
//     for (const track of tracks) {
//       // Generar un ID único combinando la ciudad y el nombre, eliminando espacios y convirtiendo a minúsculas para consistencia
//       const trackId = `${track.CITY.replace(/\s+/g, "").toLowerCase()}_${track.NAME.replace(/\s+/g, "").toLowerCase()}`;

//       // Crear una referencia de documento con el ID personalizado
//       const docRef = doc(db, "tracks", trackId);

//       // Comprobar si ya existe un documento con ese ID
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         console.log(`La pista ${track.NAME} en ${track.CITY} ya existe en Firestore. Evitando duplicado.`);
//       } else {
//         // Si no existe, subir los datos con el ID personalizado
//         await setDoc(docRef, track);
//         console.log(`Pista ${track.NAME} subida correctamente con ID ${trackId}.`);
//       }
//     }
//     console.log("¡Todas las pistas se han procesado correctamente!");
//   } catch (error) {
//     console.error("Error al subir las pistas a Firestore: ", error);
//   }
// }

//CODIGO PARA SUBIR EQUIPOS A FIREBASE
// async function subirEquiposSinDuplicados() {
//   for (const equipo of equipos) {
//     const idDocumento = equipo.NAME.replace(/\s+/g, "_"); // Reemplazar espacios con guiones bajos
//     const docRef = doc(db, "Teams", idDocumento); // Usar el ID modificado sin espacios
//     const docSnap = await getDoc(docRef); // Verificar si el documento ya existe

//     if (docSnap.exists()) {
//       console.log(`El equipo ${equipo.NAME} ya existe en Firestore.`);
//       Aquí puedes actualizar el documento si quieres, usando setDoc con la opción merge
//       await setDoc(docRef, equipo, { merge: true });
//     } else {
//       try {
//         await setDoc(docRef, equipo);
//         console.log(`Equipo ${equipo.NAME} añadido a Firestore con ID ${idDocumento}.`);
//       } catch (e) {
//         console.error("Error añadiendo el equipo: ", e);
//       }
//     }
//   }
// }