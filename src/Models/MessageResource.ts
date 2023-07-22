export interface MessageApiResource {
  id: number;
  user_id: number;
  text: string;
  sent_at: string;
}

export interface MessageResource {
  id: number;
  userId: number;
  text: string;
  sentAt: string;
}
