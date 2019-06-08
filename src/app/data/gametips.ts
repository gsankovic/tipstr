export class Gametips {
    constructor(
        public fteam: string,
        public fteamid: number,
        public gameid: number,
        public is_grand_final: number, 
        public tz:string,
        public ateam: string,
        public round: number, 
        public is_final: number,
        public hteam: string,
        public ateamid: number,
        public venue: string,
        public hteamid: number,
        public year: number,
        public date: string,
        public confidence: number,
        public bits: number,
        public correct: number,
        public tipteamid: number,
        public margin: number,
        public err: number,
        public tip: string,
        public source: string,
        public sourceid: number,
        public hconfidence: number
        
        ){}
}