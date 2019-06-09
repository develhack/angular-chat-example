import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatService, Post } from '../..//services/chat.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private service: ChatService) { }

  posts$: Observable<Post[]>;
  message = '';
  processing = false;

  @ViewChild('posts', { static: true })
  postsElementRef: ElementRef;

  async post() {
    try {
      this.processing = true;
      await this.service.post(this.message);
      this.message = '';
    } finally {
      this.processing = false;
    }
  }

  postId(index: number, post: Post) {
    return post.id;
  }

  scrollToBottom() {
    const element = this.postsElementRef.nativeElement;
    setTimeout(() => element.scrollTop = element.scrollHeight);
  }

  ngOnInit() {
    this.posts$ = this.service.subscribe()
      .pipe(tap(this.scrollToBottom.bind(this)));
  }
}
