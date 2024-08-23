# Data Structure

The following is currently not the case, due to a naive approach when first constructing this data.

In the future, most data entries will follow the structure of:

```json
{
  "title": "",
  "description": "",
  "content": [],
  "href": "",
  "tags": []
}
```

If there is any more random, keyless, data nested further into the hierarchy, it also follows the `title`, `content` structure, giving the `content` a use case for supporting an array of objects or an array of strings.

This means that the generic type used to receive data of any sort is:

```ts
type DataContentResponse = {
  title?: string;
  description?: string;
  content: string | string[] | {}[];
  href?: string;
  tags?: string[];
};
```

# Data Usage

| Page                     | Data Sets            |
| ------------------------ | -------------------- |
| Instant Gram             | `events` , `sport`   |
| Sport                    | `sport` , `activity` |
| BrittonsFoodRC           | `culinary`           |
| allroad                  | `automotive`         |
| Aviation                 | `aviation`           |
| Travel                   | `travel`             |
| Gentlemen Who Café       | `travel`             |
| Ricing                   | `computers`          |
| ThinkFlow                | `computers`          |
| Founding Fathers         | n/a                  |
| Panavision Panaflex      | `media`              |
| Miami Vice               | `media`              |
| Graphic Design           | `design`             |
| Facilities And Interiors | `design`             |
| BrittonsNYSERC           | `academia`           |
| Open Dictionary          | `miscellaneous`      |
| Weather                  | `hills` , `regions`  |
| Conquest                 | `hills` , `regions`  |

# Data Integration

In the `brittonsbash` repository, the data found in this directory is called and treated as if it were an API.

Eventually there are plans to implement a GO service which maps the data from database tables and returns them in JSON format, i.e. an actual API. This means there will be no need for change to `brittonsbash` as the call will be the same, with a slightly altered URL.

Calls occur in the top level `@api` directory. When called, the data goes through `getResponse()` which sends the called data to session storage.

The call functions occur under `triggerSession()` in the primary `index.tsx`, meaning the session data is always available. It is fairly lightweight so this is fine practice. Not 100% ideal, but given the versatility of the data, and the small scale of the data and website; fine.

After being called and sent to session storage, before being used all data then goes through some form of compiler in `@scripts/compilers`. This retrieves the data from session storage, sanitizes and formats it according to the use case, and returns it in a variable ready for use when the compiler is called.

# Data Particulars

## Stated vs. Stated "Types"

When parsing my data, you may come across sections, for example, "Glassware" and "Glassware Types". If a section does not include "Types", this means it is preferential, and includes a non-exhaustive list of products, etc., which I have acknowledged or acquired. If something is labeled with "Types", the following list is exhaustive and includes possible categorizations of the associated products. In any given data, one of these sections may exist without the other, or together.

## Special Characters

Characters such as the Unicode compiled special characters should not appear in this repository. `strings` containing special characters should use the plain-text equivalent which are then compiled when passed through `Typography` with the `markdown` prop. Anytime a `&.*;` is used, it should be manual and in-code, that is not in body text strings.

Find more on Unicode characters here: https://www.compart.com/en/unicode/

## Media Tags

The media JSON is the perfect example of the use of the `tags` key. Films, and other media etc., are arranged on the top level with the following tags determining their nature:

```json
"tags": [
  "<year-of-release>",
  "<genre>",
  "<production-company>",
  "<actor>",
  "<artist>",
  "...",
]
```

<!-- TEMP TV SHOWS -->
<!--
  Miami Vice
CSI: Miami
Moonlight
One Tree Hill
90210
How I Met Your Mother
The Big Bang Theory
Two and a Half Men
Friends
Suburgatory
Ugly Betty
Charmed
The 100
Dirty Sexy Money
Gossip Girl
Switched
New Girl
Brooklyn Nine-Nine
Supernatural
Melissa and Joey
The Goldbergs
Agents of SHIELD
2 Broke Girls
Baby Daddy
Charlie’s Angels
Make It or Brake It
Glee
Happy Endings
Rules of Engagement
Revenge
Desperate Housewives
The Mindy Project
The New Normal

Scrubs
Nashville
My Name is Earl

Hell’s Kitchen
Kitchen Nightmares
The F Word
MasterChef USA
Gordon Ramsay’s Ultimate Cookery Course

The Late Late Show with James Corden
The Tonight Show Starring Jimmy FAllon
Jimmy Kimmel Live
The Ellen DeGeneres Show
Dr. Phil
The Jerry Springer Show

Made in Chelsea
The Jeremy Kyle Show
The X Factor
Let It Shine
Britain’s Got Talent
Hollyoaks
Hollyoaks Later
Don’t Tell The Bride
Snog Marry Avoid
Big Brother
Love Island
Coach Trip
My Mad Fat Diary
Doctor Who
Rude Tube
Bad Robots
Skins
Skins: Fire
The Inbetweeners
The Gadget Show
Troy
Supernanny
Supernanny USA
The Great British Bake Off
Grand Designs
Building the Dream
How to Look Good Naked
You’ve Been Framed
Laurel and Hardy

The Simpsons
Family Guy
American Dad
Futurama
South Park

Deal or No Deal
Countdown
The Paul O’Grady Show
The Cube
Family Fortunes
Mr and Mrs


Man v Food
Man Finds Food
Diners Drive-Ins and Dives
Restaurant Stakeout
Mystery Diners
The Pioneer Woman
Barefoot Contessa
Jamie and Jimmy’s Friday Night Feast
Nigella Bites
Nigella Express
Nigella’s Christmas Kitchen
Jamie’s 15 Minute Meals
Jamie’s 30 Minute Meals
Gino’s Italian Escape
Unwrapped
The Hairy Bikers
Saturday Kitchen
Rick Stein
How to Cook Like Heston

Top Gear
Wheeler Dealers
Storage Hunters
The Ricky Gervais Show

Hannah Montana
Wizards of Waverly Place
The Suite Life of Zack and Cody
Suite Life on Deck
Cory in the House
Sonny with a Chance
So Random!
Good Luck Charlie
Lizzie McGuire
That’s So Raven
Jessie
Micky Mouse Clubhouse
Phineas and Ferb
Zeke and Luther
Sabrina the Teenage Witch

What’s New Scooby-Doo?
Scooby-Doo, Where Are You!
Scooby-Doo and Scrappy-Doo
Tom and Jerry
The Tom and Jerry Show
Ben 10

Arthur
Bob the Builder
Raven
Prank Patrol
Balamory
Barney
The Batman
Tracey Beaker
The Sarah Jane Adventures
MI High
ChuckleVision
Da Dick and Dom Diaries
The Legend of Dick and Dom
Dick and Dom in Da Bungalow
Deadly 60
Trapped!
Dennis the Menace
Escape from Scorpion Island
Dracula
H2O Just Add Water
Big Chef Little Chef
LazyTown
Maddigan’s Quest
The Slammer
Wallace and Gromit

Batman the Animated Series
Ultimate Spider Man
Horrid Henry
Thunderbirds Are Go
Mr Bean
Art Attack
Mona the Vampire
CITV SHOWS

Fifi and the Flower Tots
The Save Ums
Bear in the Big Blue House
Harry and His Bucket Full of Dinosaurs
Make Way for Noddy
Simbad
Teletubbies
Tweenies
MILKSHAKE SHOWS -->

<!-- TEMP YouTubers -->
<!--
Christian Guzman
Maxx Chewning
Shawley Coker
Brandon Harding
Jeff Nippard
Travis S
Rob Lipsett
Mike O’Hearn
Evan Centopani
Obese to Beast
Lex Fitness
Heidi Sommers
Mike Thurston
BeardMeatsFood
MattDoesFitness
Remington James
Nick Bare
Bradley Martyn
Furious Pete
Cuck From The Bronx

Linus Tech Tips
iJustine
Computerphile
Numberphile
Luke Smith
Marques Brownlee

Life of Tom
Take That Instrumental Original
KBDProductionsTV
Ken Domik
Clancy Burke
Scheiffer Bates
WatchMojo.com
ErikTheElectric
ElectricTalks
TheElectrics
GTA Series Videos
Dr. Phil
Gordon Ramsay
alpha m.
Ariana Peyton
Tami Dunn
The F Word
The F Word (New)
Jamie Oliver
TheSyndicateProject
SpeirsTheAmazingHD
Ryan Serhant
Erik Conover
Essential Tennis
Matt Stonie
RJ The Bike Guy
Park Tool
Logan Paul Vlogs
Jake Paul
Raz Ols
Federer Home
Lehunterpro
Tennis Talk Daily
Solid Brix Studios
Tai Lopez
ApexTV
Huw Rees Music
Progress Pure
Mike Jeavons
Brothers Green Eats
CaseyNeistat
SAM THE COOK GUY
Munchies
True Crime Daily
SteveTheRabbit
Crockett1984

Ali-A
Allshamnowow
Bobsagendos (Miami Vice Songs)
Centerstrain01
EthosLab
GuudeBoulderFist
VintageBeef
BdoubleO100
PauseUnpause
Generikb
Capp00
GhostRobo
LieutenantCB17 (Miami Vice Playthrough)
MarkusLivery (Miami Vice Music)
Raya
TheSimSupply
TheCurtisParadisShow
TheRadBrad
UnboxTherapy
Austin Evans
Vsauce
D!NG
BrickVault
JANGBRiCKS
just2good
Chocobotamer
Machinima (GTA Movies)
Randy Santel
JANTSUU
Typical Gamer
CinemaSins
KhanAcademy
MrThaiBox123
TechnoBuffalo
Alex Krasney
robinbirell
Grackle
Chills
DramaAlert
ABCD123Toast

Casper Lee
Joe Sugg
More Ali A
Joe Weller
KSI

TheRetard9
TheLilJoeGames
MinecraftGamerz1011
TeamFriedAndCrafted
VariableGaming

Kent Rollins -->

<!-- TEMP GAMES -->
<!--
Minecraft
Crossfire
The Sims 3
Counterstrike: Global Offensive
Fahrenheit: Indigo Prophecy
Eurotruck Simulator 2
Club Penguin
Half Life 2

The Simpsons: Hit & Run
The Simpsons Game
SpongeBob SquarePants: Battle for Bikini Bottom
Shrek 2
Test Drive
The Chronicles of Narnia: The Lion, The Witch and The Wardrobe
Crash Bandicoot
Guitar Hero III: Legends of Rock
Spider-Man 3
LEGO Indiana Jones: The Original Adventures
The Incredibles

LEGO Star Wars: The Video Game
LEGO Star Wars: The Original Trilogy
LEGO Star Wars: The Complete Saga
LEGO Star Wars: The Force Awakens

Grand Theft Auto: III
Grand Theft Auto: Vice City
Grand Theft Auto: San Andreas
Grand Theft Auto: Liberty City Stories
Grand Theft Auto: Vice City Stories
Grand Theft Auto: IV
Grand Theft Auto: Episodes from Liberty City
Grand Theft Auto: Chinatown Wars
Grand Theft Auto: V

Call of Duty: Finest Hour
Call of Duty: Modern Warfare
Call of Duty: Modern Warfare 2
Call of Duty: Modern Warfare 3
Call of Duty: World at War
Call of Duty: Black Ops
Call of Duty: Black Ops II
Call of Duty: Infinite Warfare

Uncharted: Drakes Fortune
Uncharted 2: Among Thieves
Uncharted 3: Drakes Deception
Uncharted 4: A Thief’s End

Need for Speed: Underground 2
Need for Speed: Most Wanted
Need for Speed: Pro Street
Need for Speed: Hot Pursuit
Need for Speed: World

Star Wars: Battlefront
Star Wars: Battlefront II
Star Wars: Battlefront (Current Generation)
Star Wars: Battlefront II (Current Generation)


Burnout: Revenge
Burnout: Paradise

Battlefield 1942
Battlefield 3

Fallout 3
Fallout New Vegas

Ratchet & Clank: Tools of Destruction
Ratchet & Clank (Current Generation)

Batman: Arkham Asylum
Batman: Arkham City
Batman: Arkham Knight

Topspin 3
Topspin 4

Saints Row 2
Saints Row: The Third

Just Cause 2
Just Cause 3

Max Payne 3
Beyond: Two Souls
Skate 3
007: Quantum of Solace
Virtua Tennis 4
Grand Slam Tennis 2
Far Cry 3
The Elder Scrolls V: Skyrim
Heavy Rain
Red Dead Redemption
The Last of Us
Infamous
Aliens vs Predator
Back to the Future: The Game
Rage
Motorstorm
Crisis 2
Dead Island
Dead Space 2
Deus Ex: Human Revolution
Sing Star: Take That
Haze
Killzone 3
LittleBigPlanet 2
Mafia II
Medal of Honour: Warfighter
Resistance 2
Sleeping Dogs
Tron: Evolution -->
