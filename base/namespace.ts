namespace Gensokyo {

  export interface Profile {
    name: string;
    friends: string[];
  }

  export class Girl implements Profile {
    name: string;
    friends: string[];

    constructor(profile: Profile){
      this.name = profile.name
      this.friends = profile.friends
    }

    printProfile(){
      console.log(`name: ${this.name}`)
      console.log(`friends: ${this.friends}`)
    }
  }
}


const alice = new Gensokyo.Girl({name: "alice", friends:["marisa", "reimu"]})

alice.printProfile()