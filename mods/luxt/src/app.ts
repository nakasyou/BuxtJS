export interface AppInit {
  imports: Record<string, any>
}
export class App {
  constructor (init: AppInit) {
    
  }
  fetch (request: Request): Response {
    return new Response("Hello luxt")
  }
}
