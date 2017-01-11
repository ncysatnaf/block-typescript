interface Profile {
  firstName: string;
  secondName: string;
  identity: string;
}

interface ProfileFun {
  (p: Profile) : void
}

const alice = {
  firstName: 'Alice',
  secondName: 'Margatroid',
  identity: "magical-girls"
}

const printProfles1 = (p: Profile):void  =>{
  console.log(`name: ${p.firstName} ${p.secondName}, identity: ${p.identity}`)
}

let printProfles2 : ProfileFun
printProfles2 = (p: Profile) => {
  console.log(`name: ${p.firstName} ${p.secondName}, identity: ${p.identity}`)
}


printProfles1(alice)
printProfles2(alice)