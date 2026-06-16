import {ChatSession,ChatMessage} from '../types/chat';
export interface ConversationStore { getSession(id:string):Promise<ChatSession|null>; appendMessage(sessionId:string,message:ChatMessage):Promise<void>; }
export class InMemoryConversationStore implements ConversationStore { private sessions=new Map<string,ChatSession>(); async getSession(id:string){ return this.sessions.get(id)??null;} async appendMessage(sessionId:string,message:ChatMessage){ const s=this.sessions.get(sessionId)??{id:sessionId,messages:[]}; s.messages.push(message); this.sessions.set(sessionId,s);} }
