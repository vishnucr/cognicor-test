import { Component, OnInit, Input } from "@angular/core";
import { ChatServie } from "../../_services/chat.service";
import { FormGroup, FormBuilder } from "@angular/forms";

interface Chat {
  message: string;
  author: string;
  date?: Date;
}

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  constructor(private _chatService: ChatServie, private _fb: FormBuilder) {}

  @Input() public chat: Chat[];
  public chatForm: FormGroup;

  ngOnInit(): void {
    this.chatForm = this._fb.group({
      message: [""],
    });
  }

  send() {
    const { message } = this.chatForm.value;
    const chat: Chat = {
      message,
      author: "user",
      date: new Date(),
    };
    this._chatService.add(chat);
    this.chatForm.setValue({message:""})
  }
}
