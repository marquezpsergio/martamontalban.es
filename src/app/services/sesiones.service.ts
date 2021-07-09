import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../models/Sesion';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  private sesionesCollection: AngularFirestoreCollection<Sesion>;

  constructor(private readonly afs: AngularFirestore) {
    this.sesionesCollection = afs.collection<Sesion>('sesion');
  }

  public getSesiones(): Observable<Sesion[]> {
    return this.sesionesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Sesion))
    )
  }

  public getSesion(sesionId: number): Observable<Sesion> {
    return this.sesionesCollection.doc(String(sesionId)).snapshotChanges().pipe(
      map(actions => actions.payload.data() as Sesion))
  }
}
