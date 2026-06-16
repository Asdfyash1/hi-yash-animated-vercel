export interface ModelConfig { model:string; temperature?:number }
export interface StreamingProvider { stream(prompt:string, config:ModelConfig): AsyncIterable<string>; }
export interface LLMProvider { generate(prompt:string, config:ModelConfig): Promise<string>; }
export class NVIDIAProvider implements LLMProvider, StreamingProvider { async generate(){ throw new Error('Not implemented'); } async *stream(){ throw new Error('Not implemented'); } }
