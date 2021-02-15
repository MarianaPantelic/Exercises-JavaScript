"use strict";

class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(attackSkill) {
    this.skills.push(attackSkill);
  }

  showStatus() {
    console.log(`${this.name} status`);
    console.log(`health: ${this.health}`);
    console.log(`magic: ${this.magic}`);
  }

  attack(skillIndex, pokemon) {
    if (skillIndex > this.skills.length) {
      throw new Error("Check the index!");
    } else {
      if (this.magic >= this.skills[skillIndex].magic) {
        if (this.health > 0) {
          this.magic -= this.skills[skillIndex].magic;
          pokemon.health -= this.skills[skillIndex].damage;
          console.log(
            `${this.name} launched skill \'${this.skills[skillIndex].name}\' successfully!`
          );
          console.log(
            `${pokemon.name} got ${this.skills[skillIndex].damage} damage`
          );
          this.showStatus();
          pokemon.showStatus();
        } else {
          throw new Error(`${this.name} is dead, you can't attack!`);
        }
        if (pokemon.health <= 0) {
          console.log(`${pokemon.name} is terminated after the attack!`);
        }
      } else {
        throw new Error("You don't have enough magic to perform this attack!");
      }
    }
  }

  getMagic(magic) {
    this.magic += magic;
    console.log(`${this.name} got ${magic} magic back`);
  }

  getHealth(health) {
    this.health += health;
    console.log(`${this.name} got ${health} health back`);
  }
}

class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

let pikacu = new Pokemon("Pikacu", 100, 100);
let bulbasaur = new Pokemon("Bulbasaur", 100, 100);
let lukario = new Pokemon("Lukario", 100, 100);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);
let longReach = new AttackSkill("long reach", 50, 40);
let toxicBoost = new AttackSkill("toxic boost", 30, 20);
let ironFist = new AttackSkill("iron fist", 20, 15);

pikacu.learnAttackSkill(lightning);
pikacu.learnAttackSkill(toxicBoost);
pikacu.learnAttackSkill(longReach);
bulbasaur.learnAttackSkill(poisonSeed);
lukario.learnAttackSkill(longReach);
lukario.learnAttackSkill(ironFist);

pikacu.showStatus();
bulbasaur.showStatus();

pikacu.attack(0, bulbasaur);
bulbasaur.attack(0, pikacu);
lukario.attack(1, pikacu);
lukario.attack(0, bulbasaur);
pikacu.attack(2, lukario);

bulbasaur.getMagic(10);
bulbasaur.showStatus();

bulbasaur.getHealth(20);
bulbasaur.showStatus();
lukario.showStatus();

/* Result:
    Pikacu status
    health: 100
    magic: 100
    Bulbasaur status
    health: 100
    magic: 100
    Pikacu launched skill 'lightning' successfully!
    Bulbasaur got 40 damage
    Pikacu status
    health: 100
    magic: 70
    Bulbasaur status
    health: 60
    magic: 100
    Bulbasaur launched skill 'poison seed' successfully!
    Pikacu got 20 damage
    Bulbasaur status
    health: 60
    magic: 80
    Pikacu status
    health: 80
    magic: 70
    Lukario launched skill 'iron fist' successfully!
    Pikacu got 20 damage
    Lukario status
    health: 100
    magic: 85
    Pikacu status
    health: 60
    magic: 70
    Lukario launched skill 'long reach' successfully!
    Bulbasaur got 50 damage
    Lukario status
    health: 100
    magic: 45
    Bulbasaur status
    health: 10
    magic: 80
    Pikacu launched skill 'long reach' successfully!
    Lukario got 50 damage
    Pikacu status
    health: 60
    magic: 30
    Lukario status
    health: 50
    magic: 45
    Bulbasaur got 10 magic back
    Bulbasaur status
    health: 10
    magic: 90
    Bulbasaur got 20 health back
    Bulbasaur status
    health: 30
    magic: 90
    Lukario status
    health: 50
    magic: 45 */
