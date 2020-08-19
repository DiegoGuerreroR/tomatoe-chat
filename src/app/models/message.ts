import { Channel } from './channel';

export class Message {
    id: number = 0;
    content: string = "";
    mine_flag: boolean = false;
    author_name: string = ""
}

export class MessageHistory {
    id: number = 0;
    lastFetch: number;
    channel: Channel;
    history: Array<Message>;
}