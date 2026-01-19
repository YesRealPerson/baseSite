export class FailedResponse {
    status: number;
    statusText: string;
    constructor(status: number, statusText?: string){
        this.status = status
        this.statusText = statusText ? statusText : "An undefined network error. Possibly CORS or my Cloudflare worker broke."
    }
    json() {
        return {
            status: this.status,
            statusText: this.statusText
        }
    } 
}

export async function tryFetch(url: string): Promise<Response | FailedResponse> {
  let result
  try {
    result = fetch(url)
    result = await result
  }catch(err){
    result = new FailedResponse(500)
  }
  return result
}