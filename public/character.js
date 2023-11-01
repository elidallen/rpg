// Character Class
class Character {
  constructor(name, hitpoints) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.belongings = [];
    this.companion = null;
  }

  showBelongings() {
    console.log(`${this.name}'s belongings: ${this.belongings.join(', ')}`);
  }

  addBelonging(item) {
    this.belongings.push(item);
  }

  removeBelonging(item) {
    const index = this.belongings.indexOf(item);
    if (index !== -1) {
      this.belongings.splice(index, 1);
    }
  }

  addCompanion(companionName, companionType) {
    this.companion = {
      name: companionName,
      type: companionType,
    };
  }

  showCompanion() {
    if (this.companion) {
      console.log(`${this.name}'s companion: ${this.companion.name} (${this.companion.type})`);
    } else {
      console.log(`${this.name} has no companion.`);
    }
  }
}

// Orc Class (Subclass)
class Orc extends Character {
  constructor(name, hitpoints, strength) {
    super(name, hitpoints);
    this.strength = strength;
  }

  attack(target) {
    console.log(`${this.name} attacks ${target.name} with ${this.strength} strength.`);
  }
}

// Elf Class (Subclass)
class Elf extends Character {
  constructor(name, hitpoints, agility) {
    super(name, hitpoints);
    this.agility = agility;
  }

  dodge() {
    console.log(`${this.name} dodges attacks with ${this.agility} agility.`);
  }
}

// Wizard Class (Subclass)
class Wizard extends Character {
  constructor(name, hitpoints, spellPower) {
    super(name, hitpoints);
    this.spellPower = spellPower;
  }

  castSpell(target) {
    console.log(`${this.name} casts a spell on ${target.name} with ${this.spellPower} power.`);
  }
}

// CharacterFactory Class
class CharacterFactory {
  static createCharacter(type, name, hitpoints, extraAttribute) {
    switch (type) {
      case 'Character':
        return new Character(name, hitpoints);
      case 'Orc':
        return new Orc(name, hitpoints, extraAttribute);
      case 'Elf':
        return new Elf(name, hitpoints, extraAttribute);
      case 'Wizard':
        return new Wizard(name, hitpoints, extraAttribute);
      default:
        console.log('Invalid character type.');
        return null;
    }
  }
}

// Sample Usage
const hero = CharacterFactory.createCharacter('Character', 'Hero', 100);
const orcWarrior = CharacterFactory.createCharacter('Orc', 'Orc Warrior', 80, 20);
const elfRanger = CharacterFactory.createCharacter('Elf', 'Elf Ranger', 70, 30);
const wizardMage = CharacterFactory.createCharacter('Wizard', 'Wizard Mage', 60, 40);

hero.addBelonging('Sword');
hero.addBelonging('Shield');
hero.addCompanion('Eagle', 'Animal');

orcWarrior.attack(hero);
elfRanger.dodge();
wizardMage.castSpell(orcWarrior);

hero.showBelongings();
hero.showCompanion();
orcWarrior.showBelongings();
elfRanger.showBelongings();
wizardMage.showCompanion();


fetch('/data')
.then(response => response.text())
.then(data => {
  // Display the data in the HTML page
  document.getElementById('dataDisplay').textContent = data;
})
.catch(error => {
  console.error('Error:', error);
});

