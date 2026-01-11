import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  doc,
  docData,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  collectionData,
  query,
  where,
  limit,
  orderBy,
  getDoc,
  getDocs,
  startAt,
  endAt,
  startAfter,
  OrderByDirection,
  WhereFilterOp,
  getCountFromServer,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from 'firebase/auth';
import { environment } from 'environments/environment';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private db = inject(Firestore);

  getId() {
    return doc(collection(this.db, '_')).id;
  }

  createDoc(data: any, path: string, id: string) {
    const docRef = doc(this.db, `${path}/${id}`);
    return setDoc(docRef, data);
  }

  getDoc<tipo>(path: string, id: string): Observable<any> {
    const docRef = doc(this.db, `${path}/${id}`);
    return docData(docRef);
  }

  updateDoc(data: any, path: string, id: string) {
    const docRef = doc(this.db, `${path}/${id}`);
    return updateDoc(docRef, data);
  }

  deleteDoc(path: string, id: string) {
    const docRef = doc(this.db, `${path}/${id}`);
    return deleteDoc(docRef);
  }

  getColl<tipo>(path: string): Observable<any> {
    const colRef = collection(this.db, path);
    return collectionData(colRef, { idField: 'id' });
  }

  getCollLimit<tipo>(path: string, limite = 50): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(colRef, limit(limite));
    return collectionData(q, { idField: 'id' });
  }

  getCollOrderBy<tipo>(
    path: string,
    field: string,
    order: OrderByDirection
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(colRef, orderBy(field, order));
    return collectionData(q);
  }

  getCollWhere<tipo>(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: string | boolean
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(colRef, where(field, condition, search));
    return collectionData(q);
  }

  getCollWhere2<tipo>(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: string | boolean,
    field2: string,
    condition2: WhereFilterOp,
    search2: string | boolean | number
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      where(field2, condition2, search2)
    );
    return collectionData(q);
  }

  getCollWhere4<tipo>(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: string | boolean,
    field2: string,
    condition2: WhereFilterOp,
    search2: string | boolean,
    field3: string,
    condition3: WhereFilterOp,
    search3: string | boolean,
    field4: string,
    condition4: WhereFilterOp,
    search4: string | boolean | number
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      where(field2, condition2, search2),
      where(field3, condition3, search3),
      where(field4, condition4, search4)
    );
    return collectionData(q);
  }

  getCollWhereLimit<tipo>(
    path: string,
    search: string,
    field = 'proveedor',
    condition: WhereFilterOp = '==',
    limite = 50
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(colRef, where(field, condition, search), limit(limite));
    return collectionData(q, { idField: 'id' });
  }

  getCollWhereOrderBy<tipo>(
    path: string,
    field: string,
    condition: any,
    search: any,
    fieldOrder: string,
    order: any = 'desc'
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      orderBy(fieldOrder, order)
    );
    return collectionData(q);
  }

  getCollWhere2OrderBy<tipo>(
    path: string,
    field: string,
    condition: any,
    search: any,
    field2: string,
    condition2: any,
    search2: any,
    fieldOrder: string,
    order: any = 'desc'
  ): Observable<any> {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      where(field2, condition2, search2),
      orderBy(fieldOrder, order)
    );
    return collectionData(q);
  }

  asyncDoc(path: string, id: string) {
    const docRef = doc(this.db, `${path}/${id}`);
    return getDoc(docRef);
  }

  asyncColl<tipo>(path: string) {
    const colRef = collection(this.db, path);
    return getDocs(colRef);
  }

  asyncCollOrderBy(path: string, field: string, order: OrderByDirection) {
    const colRef = collection(this.db, path);
    const q = query(colRef, orderBy(field, order));
    return getDocs(q);
  }

  asyncCollWhere(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: any
  ) {
    const colRef = collection(this.db, path);
    const q = query(colRef, where(field, condition, search));
    return getDocs(q);
  }

  asyncCountCollWhere(
    path: string,
    field: string,
    condition: any,
    search: any
  ) {
    const colRef = collection(this.db, path);
    const q = query(colRef, where(field, condition, search));
    return getCountFromServer(q);
  }

  asyncCollWhere2(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: any,
    field2: string,
    condition2: WhereFilterOp,
    search2: any
  ) {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      where(field2, condition2, search2)
    );
    return getDocs(q);
  }

  asyncCollWhere2OrderBy(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: any,
    field2: string,
    condition2: WhereFilterOp,
    search2: any,
    field3: string,
    order: OrderByDirection
  ) {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      where(field2, condition2, search2),
      orderBy(field3, order)
    );
    return getDocs(q);
  }

  asyncCollWhereLimit<tipo>(
    path: string,
    field: string,
    condition: any,
    search: any
  ) {
    const colRef = collection(this.db, path);
    const q = query(colRef, where(field, condition, search), limit(1));
    return getDocs(q);
  }

  asyncCollWhereSearch(path: string, field: string, search: string) {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      orderBy(field),
      startAt(search),
      endAt(`${search}\uf8ff`)
    );
    return getDocs(q);
  }

  asyncCollWhereOrderBy(
    path: string,
    field: string,
    condition: WhereFilterOp,
    search: string | number | boolean,
    fieldOrder: string,
    order: OrderByDirection
  ) {
    const colRef = collection(this.db, path);
    const q = query(
      colRef,
      where(field, condition, search),
      orderBy(fieldOrder, order)
    );
    return getDocs(q);
  }

  pagination(path: string, limite = 5, order: string, reference: string) {
    const colRef = collection(this.db, path);
    let q;
    if (reference) {
      q = query(colRef, limit(limite), startAfter(reference));
    } else {
      q = query(colRef, limit(limite));
    }
    return getDocs(q);
  }

  async desactivarUsuario(item: any) {
    const data = await this.asyncDoc('shoppers', item.id);
    if (data.exists())
      await this.updateDoc(
        { activo: false, fechaDisabled: new Date() },
        'shoppers',
        item.id
      );
  }

  async crearShopper(form: any) {
    const datosShopper = {
      fecha_rechazo: '',
      rfc: '',
      password: '',
      municipio: '',
      fecha_activacion: new Date(),
      comprobanteine: '',
      estatus: 1,
      comprobantedomicilio: '',
      telefono: form.telefono,
      motivoRechazo: '',
      codigoregistro: '',
      ciudad: '',
      email: form.email,
      fecha_registro: new Date(),
      nombre: form.nombre,
      factura: '',
      token: '',
      repetirpassword: '',
      codigotelefono: form.phoneCode,
      imagen_usuario: form.urlImg,
      activo: true,
      uid: form.id,
      apellido: '',
      firma: '',
      dirreccion: '',
      administrador: true,
    };
    try {
      await this.createDoc(datosShopper, 'shoppers', datosShopper.uid);
    } catch (error) {
      throw new Error('Error al insertar');
    }
  }

  async setForm(data: any, coll: string, id: string) {
    try {
      const dataDb = await this.asyncDoc(coll, id);
      if (!dataDb.exists()) return data;
      const values = dataDb.data();
      data = data.map((item: any) => ({
        ...item,
        value: values[item.name],
        type: item.name.includes('password') ? 'none' : item.type,
        validators: item.name.includes('password')
          ? { required: false }
          : item.validators,
      }));
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async registerUser({ email, password: pass }: any) {
    try {
      const config = environment.firebase;
      const secondaryApp = initializeApp(config, 'secondary');
      const auth = getAuth(secondaryApp);
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      const uid = user.user.uid || this.getId();
      await sendEmailVerification(user.user);
      auth.signOut();
      return uid;
    } catch (error: any) {
      if (error.message === 'Firebase: Error (auth/email-already-in-use).')
        throw new Error('El email ya esta registrado');
      throw new Error('Ocurrio un error');
    }
  }

  getDataXls(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const arrayBuffer: any = fileReader.result;
        const data = new Uint8Array(arrayBuffer);
        const arr = [];
        for (let i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const arraylist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        if (arraylist.length) {
          resolve(arraylist);
        } else {
          resolve([]);
        }
      };
    });
  }
}
