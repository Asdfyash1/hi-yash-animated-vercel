export interface MemoryStore { get(key:string):Promise<string|null>; set(key:string,value:string):Promise<void>; }
export class InMemoryStore implements MemoryStore { private m=new Map<string,string>(); async get(k:string){return this.m.get(k)??null} async set(k:string,v:string){this.m.set(k,v)} }
export class RedisStore implements MemoryStore { async get(){ throw new Error('stub')} async set(){ throw new Error('stub')} }
export class VectorStore implements MemoryStore { async get(){ throw new Error('stub')} async set(){ throw new Error('stub')} }
