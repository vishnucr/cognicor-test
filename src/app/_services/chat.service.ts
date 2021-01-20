import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";

interface Chat {
  message: string;
  author: string;
  date?: Date;
}

@Injectable({
  providedIn: "root",
})
export class ChatServie {
  constructor(private _http: HttpClient) {}

  private $subject = new Subject<Chat>();

  get(): Observable<Chat> {
    return this.$subject.asObservable();
  }

  add(chat: Chat) {
    let { message } = chat;
    this.$subject.next(chat);
    this._http
      .get(
        `https://assignment-fe-lead-default-rtdb.firebaseio.com/query/${message}.json`
      )
      .subscribe(
        (res: any) => {
          const msgEnd = res.answer.indexOf('[');
          const message = res.answer.slice(0,msgEnd-1);
          const response:Chat = {
            message,
            author:"bot",
            date: new Date()
          } 

          this.$subject.next(response);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
