export interface Planner { plan(goal:string): Promise<string[]>; }
export interface Executor { execute(task:string): Promise<unknown>; }
export interface Agent { name:string; }
export class Orchestrator { constructor(public planner:Planner, public executor:Executor){} }
