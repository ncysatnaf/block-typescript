interface Profile {
  name: string;
  friends: string[];
}

class Girl implements Profile {
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


const alice = new Girl({name: "alice", friends:["marisa", "reimu"]})

alice.printProfile()