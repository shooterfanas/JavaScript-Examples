function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni= soruMetni;
    this.cevapSecenekleri= cevapSecenekleri;
    this.dogruCevap= dogruCevap;
}

Soru.prototype.cevabiKontrolEt= function(cevap){
        return cevap===this.dogruCevap
    };

let sorular= [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır?",{a: "Node.js",b:"TypeScript",c:"Npm"},"c"),
    new Soru("2-Hangisi .net paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c:"Npm"},"b"),
    new Soru("3-Hangisi next paket yönetim uygulamasıdır?",{a: "Node.js",b:"TypeScript",c:"Npm"},"a"),
    new Soru("4-Hangisi deneme paket yönetim uygulamasıdır?",{a: "Node.js",b:"TypeScript",c:"Npm"},"a"),
]