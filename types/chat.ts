export interface ChatMessage { id:string; role:'user'|'assistant'|'system'; content:string; createdAt:string }
export interface ChatSession { id:string; messages:ChatMessage[] }
export interface ProviderResponse { content:string; model:string }
export interface StreamChunk { content:string; done?:boolean }
