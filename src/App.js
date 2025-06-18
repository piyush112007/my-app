import React, { useState } from "react";
import "./App.css";
import Tile from "./Components/Tile";
import Taskbar from "./Components/Taskbar";

// Pokémon images
import Pikachu from "./Components/Pikachu.svg";
import Charmendar from "./Components/charmendar.svg";
import Bulbasaur from "./Components/bulbasaur.svg";
import Squirtle from "./Components/squirtle.svg";
import Pichioto from "./Components/Pichioto.svg";
import Meout from "./Components/meout.svg";
import Mewto from "./Components/mewto.svg";
import Sciduck from "./Components/sciduck.svg";
import Ekanas from "./Components/ekanas.svg";
import Mrmime from "./Components/mrmime.svg";
import Drowsi from "./Components/drowsi.svg";
import Chikorita from "./Components/chikorita.svg";
import Growlite from "./Components/growlite.svg";
import Machoke from "./Components/machoke.svg";
import Volpix from "./Components/volpix.svg";
import Weezing from "./Components/weezing.svg";

// Pokémon data (with more detailed descriptions)
const pokemons = [
  {
    name: "Pikachu",
    image: Pikachu,
    description: `⚡ Pikachu
Type: Electric
Evolution: ➜ Raichu (use Thunder Stone)
Height: 0.4 m  Weight: 6.0 kg
Ability: Static ⚡

Description:
Pikachu is an Electric-type Pokémon known for the electricity it stores in its cheeks. It releases electric shocks to defend itself or communicate. Cute and clever, Pikachu is also the mascot of the Pokémon franchise and is famously known as Ash’s partner in the anime.

Signature Moves:
⚡ Thunder Shock ⚡ Electro Ball ⚡ Thunderbolt ⚡ Iron Tail

Fun Fact:
Pikachu can sometimes be found living in groups in forests and communicating through crackling sparks. It’s one of the most recognized Pokémon in the world.`,
  },
  {
    name: "Charmendar",
    image: Charmendar,
    description: `🔥 Charmander
Type: Fire
Evolution: ➜ Charmeleon (Lv. 16) ➜ Charizard (Lv. 36)
Height: 0.6 m  Weight: 8.5 kg
Ability: Blaze 🔥

Description:
Charmander is a Fire-type Pokémon with a flame burning at the tip of its tail. This flame reflects its health and emotions—flickering when happy and flaring when angry. Brave and energetic, Charmander becomes more powerful as it evolves into the mighty Charizard.

Signature Moves:
🔥 Ember 🔥 Flame Burst 🔥 Fire Fang 🔥 Flamethrower

Fun Fact:
If Charmander’s tail flame goes out, it’s said to be fatal. It’s one of the original three Kanto starter Pokémon and a fan-favorite for fire-type lovers.`,
  },
  {
    name: "Bulbasaur",
    image: Bulbasaur,
    description: `🌱 Bulbasaur
Type: Grass / Poison
\nEvolution: ➜ Ivysaur (Lv. 16) ➜ Venusaur (Lv. 32)
\nHeight: 0.7 m  Weight: 6.9 kg
\nAbility: Overgrow 🌿

 ::  Description:
Bulbasaur is known as the Seed Pokémon, carrying a plant bulb on its back since birth. Calm and dependable, it uses sunlight to grow stronger. As it evolves, the bulb blooms into a giant flower. It’s one of the original three Kanto starters, loved for its balance and loyalty.

Signature Moves:
🍃 Vine Whip 🌱 Leech Seed 🍂 Razor Leaf ☀️ Solar Beam

Fun Fact:
Bulbasaur is Pokédex #001, making it the first Pokémon in the official registry.`,
  },
  {
    name: "Squirtle",
    image: Squirtle,
    description: `💧 Squirtle
Type: Water
Evolution: ➜ Wartortle (Lv. 16) ➜ Blastoise (Lv. 36)
Height: 0.5 m  Weight: 9.0 kg
Ability: Torrent 💦

Description:
Squirtle is a Water-type Pokémon that resembles a small turtle. Its shell is tough and helps reduce damage in battle, while its tail curls like a wave. It can withdraw into its shell for protection and sprays water from its mouth to defend itself or put out fires.

Signature Moves:
💧 Water Gun 💦 Bubble 🌊 Aqua Tail 💥 Hydro Pump

Fun Fact:
Squirtle’s shell becomes harder as it grows. It’s one of the original Kanto starter Pokémon and is loved for its cuteness and dependable battle skills.`,
  },
  {
    name: "Pidgeotto",
    image: Pichioto,
    description: `🕊️ Pidgeotto
Type: Normal / Flying
Evolution: ➜ Pidgeot (Lv. 36)
Height: 1.1 m  Weight: 30.0 kg
Ability: Keen Eye 👁️ / Tangled Feet 🌀

Description:
Pidgeotto is a bird Pokémon known for its speed, sharp eyesight, and territorial nature. It flies at high altitudes and can spot prey from far away. With powerful talons and gusting wings, it defends its territory fiercely. It evolves from Pidgey at level 18 and becomes Pidgeot at level 36.

Signature Moves:
💨 Gust 🌀 Twister 🌪️ Wing Attack 🔁 Roost

Fun Fact:
Pidgeotto is often seen patrolling wide areas of forest skies. Trainers admire its balance of agility and power, making it a strong early-game flyer.`,
  },
  {
    name: "Meowth",
    image: Meout,
    description: `🐱 Meowth
Type: Normal
Evolution: ➜ Persian (Lv. 28)
Height: 0.4 m  Weight: 4.2 kg
Ability: Pickup 🎒 / Technician 🛠️

Description:
Meowth is a feline Pokémon known for its obsession with shiny objects, especially coins. It walks on two legs and is highly agile. In the anime, Team Rocket’s Meowth is famous for being one of the few Pokémon who can speak human language fluently.

Signature Moves:
💰 Pay Day 💢 Scratch 💨 Fake Out 💥 Night Slash

Fun Fact:
Meowth's coin on its forehead is a symbol of luck. It prowls city streets at night in search of glittering treasure. Some regional forms of Meowth even evolve into completely different Pokémon!`,
  },
  {
    name: "Mewtwo",
    image: Mewto,
    description: `🧬 Mewtwo
Type: Psychic
Evolution: None (Legendary Pokémon)
Height: 2.0 m  Weight: 122.0 kg
Ability: Pressure 🧠 / Unnerve 😨

Description:
Mewtwo is a powerful Psychic-type Legendary Pokémon created through genetic manipulation of the mythical Mew. It was engineered to be the ultimate battle Pokémon, possessing immense psychic abilities and a cold, calculating nature. Known for its intimidating aura and telepathic communication.

Signature Moves:
🔮 Psystrike 🧠 Psychic 💥 Shadow Ball 🌀 Aura Sphere

Fun Fact:
Mewtwo is one of the most iconic Legendary Pokémon in the series. It has two Mega Evolutions and even a unique armored form in the anime and movies. Despite its origin, Mewtwo constantly searches for its own identity.`,
  },
  {
    name: "Psyduck",
    image: Sciduck,
    description: `🦆 Psyduck
Type: Water
Evolution: ➜ Golduck (Lv. 33)
Height: 0.8 m  Weight: 19.6 kg
Ability: Damp 💧 / Cloud Nine ☁️

Description:
Psyduck is a Water-type Pokémon often seen clutching its head in confusion. It suffers from chronic headaches, which can trigger powerful bursts of psychic energy—though it doesn’t always realize it’s the source. Its vacant stare hides hidden strength.

Signature Moves:
💦 Water Gun 💫 Confusion 🌀 Zen Headbutt 🌊 Surf

Fun Fact:
When Psyduck’s headache gets severe, it unleashes psychic powers so intense that even it can’t control them. It may seem clueless, but in battle, it can surprise opponents with sudden bursts of strength.`,
  },
  {
    name: "Ekans",
    image: Ekanas,
    description: `🐍 Ekans
Type: Poison
Evolution: ➜ Arbok (Lv. 22)
Height: 2.0 m  Weight: 6.9 kg
Ability: Intimidate 😠 / Shed Skin 🐍

Description:
Ekans is a snake-like Poison-type Pokémon that silently slithers through grass to stalk its prey. It swallows eggs whole and can coil itself to rest or strike. Though it lacks legs, it’s agile and can move swiftly to escape danger or ambush its target.

Signature Moves:
☠️ Poison Sting 🔁 Wrap 💥 Bite 💨 Glare

Fun Fact:
The name “Ekans” is “snake” spelled backward. In the wild, Ekans hunts small Pokémon and prefers quiet environments. Its rattle-like tail warns others when threatened.`,
  },
  {
    name: "Mr. Mime",
    image: Mrmime,
    description: `🃏 Mr. Mime
Type: Psychic / Fairy
Evolution: Pre-evolved form: Mime Jr. ➜ Mr. Mime (when leveled up knowing Mimic)
Height: 1.3 m  Weight: 54.5 kg
Ability: Soundproof 🔇 / Filter ✨

Description:
Mr. Mime is a skilled mime Pokémon that creates invisible walls of solid light using its pantomime abilities. It can sense and manipulate air molecules to form protective barriers. With expressive gestures, it communicates and defends without speaking a word.

Signature Moves:
🪞 Reflect 🧠 Psychic ✨ Dazzling Gleam 🙌 Barrier

Fun Fact:
Mr. Mime’s profession-like name and behavior make it one of the most unique Pokémon. In Galar, it has a regional form that evolves into Mr. Rime—a tap-dancing, cane-carrying performer!`,
  },
  {
    name: "Drowzee",
    image: Drowsi,
    description: `💤 Drowzee
Type: Psychic  
Evolution: ➜ Hypno (Lv. 26)  
Height: 1.0 m  Weight: 32.4 kg  
Ability: Insomnia 😴 / Forewarn 🔮  

Description:  
Drowzee is a Psychic-type Pokémon that feeds on dreams. It puts people to sleep and then eats their dreams, often licking its lips afterward if it enjoyed the flavor. Inspired by the tapir, it’s known for swaying gently while using hypnosis.

Signature Moves:  
💫 Hypnosis 🌀 Confusion 🌙 Dream Eater 🌟 Zen Headbutt  

Fun Fact:  
Drowzee can tell what kind of dream you had by sniffing you. If you sleep near one, you might wake up feeling oddly tired... or oddly peaceful.`,
  },
  {
    name: "Chikorita",
    image: Chikorita,
    description: `🌿 Chikorita
Type: Grass  
Evolution: ➜ Bayleef (Lv. 16) ➜ Meganium (Lv. 32)  
Height: 0.9 m  Weight: 6.4 kg  
Ability: Overgrow 🌱  

Description:  
Chikorita is a gentle and friendly Grass-type Pokémon with a leafy aroma that calms those around it. It waves the leaf on its head to sense temperature and humidity, and uses it in battle to unleash sweet-scented or razor-sharp attacks.

Signature Moves:  
🍃 Razor Leaf 🌸 Sweet Scent 🌱 Magical Leaf ☀️ Solar Beam  

Fun Fact:  
Chikorita loves sunlight and often basks in it for energy. It's the Grass-type starter of the Johto region and is known for its loyalty, calm nature, and healing presence.`,
  },
  {
    name: "Growlithe",
    image: Growlite,
    description: `🐶 Growlithe
Type: Fire  
Evolution: ➜ Arcanine (use Fire Stone)  
Height: 0.7 m  Weight: 19.0 kg  
Ability: Intimidate 😠 / Flash Fire 🔥  

Description:  
Growlithe is a brave and loyal Fire-type Pokémon that resembles a puppy. It fiercely guards its territory and is known for its courageous spirit. Its bark and fire attacks scare off enemies, and it becomes deeply attached to trusted trainers.

Signature Moves:  
🔥 Ember 💥 Flame Wheel 🗯️ Roar 🐾 Crunch  

Fun Fact:  
Growlithe is often used by police forces in the Pokémon world due to its loyalty and tracking ability. In Hisui (ancient Sinnoh), it has a regional form that’s part Rock-type!`,
  },
  {
    name: "Machoke",
    image: Machoke,
    description: `💪 Machoke
Type: Fighting  
Evolution: Evolved from Machop ➜ Machamp (via trade)  
Height: 1.5 m  Weight: 70.5 kg  
Ability: Guts 🔥 / No Guard 👊  

Description:  
Machoke is a super-strong Fighting-type Pokémon known for its muscular build and powerful punches. It wears a power-suppressing belt to control its immense strength. It's often seen helping people with heavy labor due to its discipline and reliability.

Signature Moves:  
🥊 Karate Chop 💢 Seismic Toss 💥 Submission 🌀 Dynamic Punch  

Fun Fact:  
Machoke’s strength is said to be so great that it can lift a dump truck with ease. Without its belt, it may lose control of its power. It's the middle form between Machop and the mighty Machamp.`,
  },
  {
    name: "Vulpix",
    image: Volpix,
    description: `🦊 Vulpix
Type: Fire  
Evolution: ➜ Ninetales (use Fire Stone)  
Height: 0.6 m  Weight: 9.9 kg  
Ability: Flash Fire 🔥 / Drought ☀️  

Description:  
Vulpix is a small, fox-like Fire-type Pokémon with a beautiful curled tail. At birth, it has only one tail that splits into six as it grows. It controls fire with precision and releases flames from its mouth to deter enemies or stay warm.

Signature Moves:  
🔥 Ember 🌪️ Will-O-Wisp 💨 Quick Attack ☀️ Flamethrower  

Fun Fact:  
Legends say Vulpix's tails are warm and curled from birth, and as it matures, the six tails split further and glow with mystical energy. In Alola, it has an Ice-type regional form!`,
  },
  {
    name: "Weezing",
    image: Weezing,
    description: `☠️ Weezing
Type: Poison  
Evolution: Evolved from Koffing (Lv. 35)  
Height: 1.2 m  Weight: 9.5 kg  
Ability: Levitate 🛸 / Neutralizing Gas 🧪  

Description:  
Weezing is a Poison-type Pokémon made up of two toxic gas-filled bodies. It floats in the air while releasing foul-smelling fumes created by digesting toxic waste. The gases it emits can melt and neutralize anything they touch, including other toxins.

Signature Moves:  
💨 Sludge ☠️ Toxic 🔥 Explosion 🧪 Smog  

Fun Fact:  
Weezing thrives in polluted areas, absorbing industrial waste and turning it into poison gas. In the Galar region, it has a regional form that wears top hats and purifies air instead of polluting it!`,
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {selected ? (
        <>
          <Taskbar homeValue="Home" />
          <div className="detail-page">
            <button className="back-button" onClick={() => setSelected(null)}>
              ← Back
            </button>

            <div className="detail-left">
              <h1>{selected.name}</h1>
              <p>{selected.description}</p>
            </div>

            <img
              src={selected.image}
              alt={selected.name}
              className="detail-image"
            />
          </div>
        </>
      ) : (
        <>
          <Taskbar homeValue="" />
          <div className="viewbar">
            {pokemons.map((poke, i) => (
              <Tile
                key={i}
                title={poke.name}
                image={poke.image}
                onClick={() => setSelected(poke)}
              />
            ))}
          </div>
          <footer className="footer">
            © All rights reserved. New Pokémon will be added regularly.
          </footer>
        </>
      )}
    </>
  );
}

export default App;
