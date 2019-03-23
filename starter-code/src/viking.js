// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength = strength
  }
  
  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health , strength){
    super(health,strength)
    this.name = name
  }

  receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health>0) return `${this.name} has received ${damage} points of damage`
    return `${this.name} has died in act of combat`
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super(health, strength)
  }

  receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health>0) return `A Saxon has received ${damage} points of damage`
    return `A Saxon has died in combat`
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    var randomidx = Math.floor(Math.random()*this.vikingArmy.length)
    var randomidx2 = Math.floor(Math.random()*this.saxonArmy.length)
    var randomViking = this.vikingArmy[randomidx]
    var randomSaxon = this.saxonArmy[randomidx2]
    var result = randomSaxon.receiveDamage(randomViking.strength)
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)
    return result
  }

  saxonAttack(){
    var randomidx = Math.floor(Math.random()*this.vikingArmy.length)
    var randomidx2 = Math.floor(Math.random()*this.saxonArmy.length)
    var randomViking = this.vikingArmy[randomidx]
    var randomSaxon = this.saxonArmy[randomidx2]
    var result = randomViking.receiveDamage(randomSaxon.strength)
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)
    return result    
  }

  showStatus(){
    if(this.saxonArmy.length===0)return "Vikings have won the war of the century!"
    if(this.vikingArmy.length===0)return "Saxons have fought for their lives and survive another day..."
    return "Vikings and Saxons are still in the thick of battle."
  }
}
