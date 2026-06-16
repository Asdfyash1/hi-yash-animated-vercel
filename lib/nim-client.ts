export interface ModelConfig { model:string; temperature?:number; maxTokens?:number }
export interface ProviderResponse { content:string; model:string }
export interface StreamChunk { content:string; done?:boolean }
export interface StreamingProvider { stream(messages:{role:string;content:string}[], config:ModelConfig): AsyncIterable<StreamChunk>; }
export interface LLMProvider { generate(messages:{role:string;content:string}[], config:ModelConfig): Promise<ProviderResponse>; }
export class NVIDIAProvider implements LLMProvider, StreamingProvider { async generate(){ throw new Error('NIM integration requires API key/runtime configuration'); } async *stream(){ yield {content:'',done:true}; } }
