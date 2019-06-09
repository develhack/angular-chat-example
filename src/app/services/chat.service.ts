import { auth, firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Post {
  message: string;
  poster: string;
  postedAt: firestore.Timestamp;
  id?: string;
  self?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth) { }

  subscribe(): Observable<(Post & { id: string })[]> {
    return this.angularFirestore
      .collection<Post>('Chat', ref => ref.orderBy('postedAt'))
      .valueChanges({ idField: 'id' })
      .pipe(map(posts => posts.map(post => {
        post.self = post.poster === auth().currentUser.email;
        return post;
      })));
  }

  async post(message: string): Promise<any> {
    return this.angularFirestore
      .collection<Post>('Chat')
      .add({
        message,
        poster: this.angularFireAuth.auth.currentUser.email,
        postedAt: firestore.FieldValue.serverTimestamp() as firestore.Timestamp,
      });
  }
}
