import { collection, onSnapshot, query, where, Unsubscribe, getFirestore } from "firebase/firestore";
import { Falta, faltaSchema } from "../domain/falta.domain";
import { firebaseApp } from "../../../shared/services/firebase";

export const db = getFirestore(firebaseApp);

console.log("[repo]", { db: typeof db, onSnapshot: typeof onSnapshot, query: typeof query });
// MÉTODO: suscribe a los cambios en las faltas de una sala específica
export function subscribeToFaultsByRoom(
  salaId: string,
  onData: (faltas: Falta[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const consulta = query(collection(db, "faltas"), where("faltaSalaId", "==", salaId));

  return onSnapshot(
    consulta,
    (snapshot) => {
      const faltas = snapshot.docs.flatMap((doc) => {
        const resultado = faltaSchema.safeParse(doc.data());
        return resultado.success ? [resultado.data] : [];
      });
      onData(faltas);
    },
    onError,
  );
}