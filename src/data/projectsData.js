

export const archiveData = {
    en: [
        {
            year: 2026,
            projects: [
                { id: 'knight-survivor', title: 'Knight Survivor' },
                { id: 'car-hunter', title: 'Car Hunter' },
            ]
        },
        {
            year: 2025,
            projects: [
                { id: 'tower-defense', title: 'Tower Defense' },
                // { id: 'gun-strike', title: 'Gun Strike Legacy' },
                { id: 'air-force', title: 'Air Force X' },
                { id: 'perfect-sticker', title: 'Perfect Sticker' },
                { id: 'balatro', title: 'Balatro Clone' },
            ]
        },
        {
            year: 2024,
            projects: [
                { id: 'survivor-legend', title: 'Survivor Legends: Apocalypse' },
                { id: 'divine-eternians', title: 'Divine Eternians' },
                { id: 'zombie-shooter', title: 'Zombie Shooter' },
                { id: 'cook-together', title: 'Cook Together' },
                { id: 'perfect-tile-lite', title: 'Perfect Tile Lite' },
            ]
        },
        {
            year: 2023,
            projects: [
                { id: 'solitaire', title: 'Solitaire Monument: Happy Trip' },
            ]
        },
        {
            year: 2022,
            projects: [
                { id: 'arena-mayhem', title: 'Arena Mayhem' },
                { id: 'instinct-on', title: 'Instinct: ON' },
            ]
        }
    ],
    vi: [
        {
            year: 2026,
            projects: [
                { id: 'knight-survivor', title: 'Knight Survivor' },
                { id: 'car-hunter', title: 'Car Hunter' },
            ]
        },
        {
            year: 2025,
            projects: [
                { id: 'tower-defense', title: 'Tower Defense' },
                // { id: 'gun-strike', title: 'Gun Strike Legacy' },
                { id: 'air-force', title: 'Air Force X' },
                { id: 'perfect-sticker', title: 'Perfect Sticker' },
                { id: 'balatro', title: 'Balatro Clone' },
            ]
        },
        {
            year: 2024,
            projects: [
                { id: 'survivor-legend', title: 'Survivor Legends: Apocalypse' },
                { id: 'divine-eternians', title: 'Divine Eternians' },
                { id: 'zombie-shooter', title: 'Zombie Shooter' },
                { id: 'cook-together', title: 'Cook Together' },
                { id: 'perfect-tile-lite', title: 'Perfect Tile Lite' },
            ]
        },
        {
            year: 2023,
            projects: [
                { id: 'solitaire', title: 'Solitaire Monument: Happy Trip' },
            ]
        },
        {
            year: 2022,
            projects: [
                { id: 'arena-mayhem', title: 'Arena Mayhem' },
                { id: 'instinct-on', title: 'Instinct: ON' },
            ]
        }
    ]
};

export const projectsData = {
    en: {
        "knight-survivor": {
            title: "Knight Survivor",
            videoUrl: "https://youtu.be/E0WtXkzVqs8",

            imageFolder: "knight-survivor",

            role: "Solo Game Developer",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "2 Months",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A fast-paced 2D roguelike survival game inspired by Vampire Survivors, where players fight against massive enemy hordes, evolve weapons, build powerful synergies, and survive increasingly difficult waves and bosses.",
                text: "Knight Survivor is a system-heavy roguelike project focused on scalable combat architecture, modular weapon design, and large-scale enemy swarm gameplay. I handled gameplay programming, combat systems, progression systems, enemy behaviors, balancing pipelines, and performance optimization."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Key gameplay systems and technical features I implemented:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Weapon Evolution System ]",
                    label:
                        "Implemented 30+ active/evolved weapons with unique attack behaviors including AoE, piercing, orbiting, homing, bounce, and damage-over-time mechanics."
                },
                {
                    imagePlaceholder: "[ Upgrade & Passive System ]",
                    label:
                        "Built a roguelike progression system with randomized upgrades, stackable passive effects, weapon evolutions, and scalable runtime stat calculations."
                },
                {
                    imagePlaceholder: "[ Enemy Wave System ]",
                    label:
                        "Designed dynamic enemy spawning systems with density scaling, wave milestones, elite enemies, boss encounters, and infinite/open stage progression."
                },
                {
                    imagePlaceholder: "[ Combat Architecture ]",
                    label:
                        "Created modular combat and skill systems using data-driven configurations for rapid balancing and scalable content production."
                },
                {
                    imagePlaceholder: "[ Enemy Swarm Performance ]",
                    label:
                        "Optimized large-scale combat using object pooling, controlled update cycles, and efficient enemy spawning/despawning systems."
                }
            ],

            techData: {
                title: "3. Technical Highlights",
                text:
                    "Unity 2D | C# | Scriptable Objects | Firebase | Unity IAP | DOTween | Object Pooling | Git"
            },

            impact: [
                "Built a scalable roguelike combat framework supporting rapid addition of new weapons, enemies, passives, and evolutions",
                "Implemented 30+ weapon/evolution systems and multiple boss encounters",
                "Maintained stable performance during large-scale enemy swarm battles",
                "Completed full gameplay programming and systems implementation independently",
                "Designed reusable and modular systems minimizing hardcoded gameplay logic"
            ]
        },
        "car-hunter": {
            title: "Car Hunter",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/BKsBuUcBjKs?si=bpZDoK-oGixXFrvK",
            imageFolder: "car-hunter",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "1 Week",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A casual mobile driving game focused on fast-paced arcade gameplay and vehicle progression.",
                text: "A freelance client project where I customized and polished an existing game framework through reskin implementation, gameplay adjustments, bug fixing, UI integration, and overall gameplay refinement before final delivery."
            },

            mechanicData: {
                title: "2. Responsibilities",
                intro: ""
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Reskin System ]",
                    label:
                        "Integrated and adapted new visual assets, UI layouts, environments, and gameplay themes into the existing project structure."
                },
                {
                    imagePlaceholder: "[ Gameplay Polish ]",
                    label:
                        "Adjusted gameplay feel, balancing, collisions, and interaction feedback to improve overall player experience."
                },
                {
                    imagePlaceholder: "[ Bug Fixing ]",
                    label:
                        "Resolved gameplay bugs, UI issues, logic inconsistencies, and runtime problems during development."
                },
                {
                    imagePlaceholder: "[ Project Optimization ]",
                    label:
                        "Optimized scenes and gameplay flow to improve stability and maintain smooth performance on mobile devices."
                }
            ],

            techData: {
                title: "3. Technical Highlights",
                text:
                    "Worked within an existing Unity codebase and adapted new gameplay content into pre-built systems. Focused on clean integration, gameplay polish, bug fixing, and preparing the project for final client delivery."
            },

            impact: [
                "Migrated and stabilized an older Unity project pipeline from Unity 2018 to Unity 2022, resolving compatibility and runtime issues during the upgrade process.",
                "Successfully completed and delivered a customized client-ready version of the project",
                "Improved gameplay stability and overall user experience",
                "Integrated new art/UI assets into the existing gameplay pipeline",
                "Adapted quickly to an existing codebase and production workflow"
            ]
        },
        "tower-defense": {
            title: "Tower Defense",
            role: "Solo Game Developer",
            videoUrl: "https://youtu.be/Gpj7TwO85so",
            imageFolder: "tower-defense",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "2 months",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A mobile lane-defense game combining hero management, tower defense, layered progression systems, and real-time combat against large enemy waves and bosses.",

                text: "A solo-developed strategy defense project focused on scalable gameplay systems, layered progression mechanics, and modular combat architecture. I implemented hero systems, tower systems, upgrade mechanics, enemy waves, boss encounters, and gameplay balancing."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and technical implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Hero Combat System ]",
                    label:
                        "Implemented a hero combat system featuring 7 unique heroes with different attack behaviors, combat roles, and upgrade progression."
                },
                {
                    imagePlaceholder: "[ Tower Defense System ]",
                    label:
                        "Built a modular tower system with 5 different tower types providing unique combat utilities and battlefield control mechanics."
                },
                {
                    imagePlaceholder: "[ Skill Upgrade System ]",
                    label:
                        "Developed an upgradeable skill system containing 8 player skills with scalable progression and combat-enhancing effects."
                },
                {
                    imagePlaceholder: "[ Progression System ]",
                    label:
                        "Designed layered progression systems for castle upgrades, heroes, towers, statues, and player skills to support long-term gameplay growth."
                },
                {
                    imagePlaceholder: "[ Statue Passive System ]",
                    label:
                        "Implemented passive statue systems providing permanent combat bonuses and strategic stat enhancements."
                },
                {
                    imagePlaceholder: "[ Enemy Wave & Boss System ]",
                    label:
                        "Created enemy wave spawning and boss battle systems with increasing difficulty scaling and combat pacing."
                },
                {
                    imagePlaceholder: "[ Combat Architecture ]",
                    label:
                        "Built scalable gameplay architecture handling combat interactions, projectile systems, damage calculations, upgrades, and runtime balancing."
                }
            ],

            techData: {
                title: "3. Technical Highlights",

                text:
                    "Unity 2D | C# | Scriptable Objects | Firebase | Unity IAP | DOTween | Object Pooling | Git"
            },

            impact: [
                "Implemented layered progression systems for heroes, towers, statues, skills, and castle upgrades",

                "Built scalable combat systems supporting multiple gameplay entities and upgrade interactions",

                "Developed reusable gameplay architecture for future content expansion and balancing",

                "Completed full gameplay programming and systems implementation as a solo developer",

                "Created real-time combat scenarios involving large enemy waves, bosses, and multiple simultaneous attack systems"
            ]
        },
        "air-force": {
            title: "Air Force X",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/Vb2AZJAjmK0?si=XODHFcxgZzMq3FPD",
            imageFolder: "air-force",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "2 weeks",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A mobile arcade shoot-em-up game featuring upgradeable aircrafts, enemy waves, and progression systems.",

                text: "A freelance client project where I worked on gameplay bug fixing, new content integration, and monetization features for an existing mobile shooter game."
            },

            mechanicData: {
                title: "2. Responsibilities",
                intro: "Main tasks and contributions during development:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Aircraft System ]",
                    label:
                        "Integrated 2 new playable aircrafts into the existing gameplay and upgrade systems."
                },
                {
                    imagePlaceholder: "[ Bug Fixing ]",
                    label:
                        "Resolved gameplay bugs, UI issues, and runtime logic problems to improve gameplay stability."
                },
                {
                    imagePlaceholder: "[ IAP Integration ]",
                    label:
                        "Implemented in-app purchase functionality and connected monetization flows into the existing project pipeline."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- IAP\n- Firebase\n- Git"
            },

            impact: [
                "Successfully integrated new gameplay content into the existing project",
                "Improved gameplay stability through bug fixing and logic corrections",
                "Implemented monetization features using Unity IAP",
                "Adapted quickly to an existing Unity production codebase"
            ]
        },
        "perfect-sticker": {
            title: "Perfect Sticker",
            role: "Solo Game Developer",
            videoUrl: "https://youtu.be/PWsZNBAsujA?si=eUBH9F6nMAD5r-_V",
            imageFolder: "perfect-sticker",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "1 Month",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A cozy casual puzzle game where players decorate themed rooms by placing furniture and objects into the correct positions.",

                text: "A solo-developed casual gameplay prototype focused on room decoration mechanics, object placement interactions, progression flow, and relaxing user experience design."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Object Placement System ]",
                    label:
                        "Implemented drag-and-place gameplay mechanics with object snapping, placement validation, and room progression logic."
                },
                {
                    imagePlaceholder: "[ Room Progression ]",
                    label:
                        "Designed progression systems allowing players to unlock and complete multiple themed rooms with different decoration layouts."
                },
                {
                    imagePlaceholder: "[ Gameplay Flow ]",
                    label:
                        "Built casual gameplay loops focused on relaxing pacing, visual feedback, and satisfying completion progression."
                },
                {
                    imagePlaceholder: "[ UI & Interaction ]",
                    label:
                        "Implemented responsive UI interactions and gameplay feedback systems optimized for mobile devices."
                },
                {
                    imagePlaceholder: "[ Data Management ]",
                    label:
                        "Structured room and object data into reusable configurations for easier content iteration and expansion."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Scriptable Objects\n- JSON\n- DOTween\n- Git"
            },

            impact: [
                "Completed full gameplay programming and systems implementation as a solo developer",

                "Built reusable room and object placement systems for scalable content creation",

                "Designed multiple themed room progression flows and placement interactions",

                "Created a polished casual gameplay experience focused on readability and smooth user interaction"
            ]
        },
        "balatro": {
            title: "Balatro Clone",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/F_G6UO1-0pU?si=LOFrlRFX_530dqYF",
            engine: "Unity 2D",
            language: "C#",
            platform: "PC",
            duration: "2 weeks",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A gameplay-focused prototype inspired by Balatro, created to study poker-based scoring systems, card interactions, and roguelike card game flow.",
                text: "A collaborative learning project developed with a mobile developer friend who wanted to learn game development. We built this prototype while studying and recreating core Balatro-inspired mechanics, including card interactions, scoring, sorting, and basic gameplay flow."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Poker Hand Evaluation ]",
                    label:
                        "Implemented poker hand detection and scoring systems including rank/suit evaluation and score calculation logic."
                },
                {
                    imagePlaceholder: "[ Card Interaction System ]",
                    label:
                        "Built card selection, sorting, discarding, and hand management systems for turn-based gameplay interaction."
                },
                {
                    imagePlaceholder: "[ Gameplay Flow ]",
                    label:
                        "Implemented gameplay loop systems including rounds, scoring targets, hand limits, and discard management."
                },
                {
                    imagePlaceholder: "[ UI & Feedback ]",
                    label:
                        "Developed responsive card interactions and gameplay feedback systems focused on readability and smooth user input."
                },
                {
                    imagePlaceholder: "[ System Research ]",
                    label:
                        "Studied and recreated core gameplay mechanics to better understand roguelike card game architecture and gameplay pacing."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Scriptable Objects\n- DOTween\n- Git"
            },

            impact: [
                "Successfully recreated core poker-based gameplay mechanics inspired by Balatro",

                "Implemented card evaluation, scoring, sorting, and gameplay flow systems",

                "Improved understanding of turn-based card game architecture and gameplay logic",

                "Built the project as a gameplay programming and systems design study"
            ]
        },
        "survivor-legend": {
            title: "Survivor Legends: Apocalypse",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/O9r7hhMYuYU?si=nXnjcM5tYk8ETnae",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "2 weeks",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A mobile survival action game featuring wave-based combat, character progression, and upgrade systems.",

                text: "A freelance client project where I worked on gameplay bug fixing, Firebase integration, advertisement systems, and in-app purchase implementation for an existing mobile game project."
            },

            mechanicData: {
                title: "2. Responsibilities",
                intro: "Main tasks and contributions during development:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Firebase Integration ]",
                    label:
                        "Integrated Firebase services into the project pipeline for analytics and mobile service support."
                },
                {
                    imagePlaceholder: "[ Ads System ]",
                    label:
                        "Implemented advertisement systems including rewarded ads and monetization flow integration."
                },
                {
                    imagePlaceholder: "[ IAP Integration ]",
                    label:
                        "Integrated in-app purchase functionality and connected purchasing systems into the existing game flow."
                },
                {
                    imagePlaceholder: "[ Bug Fixing ]",
                    label:
                        "Resolved gameplay bugs, UI issues, and runtime logic problems to improve gameplay stability and user experience."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Firebase\n- Google AdMob\n- Unity IAP\n- UI Toolkit\n- Git"
            },

            impact: [
                "Successfully integrated monetization and backend support systems into the project",

                "Improved gameplay stability and reduced runtime issues through bug fixing",

                "Connected mobile services and purchasing flows into the existing production pipeline",

                "Adapted quickly to an existing Unity codebase and project architecture"
            ]
        },
        "divine-eternians": {
            title: "Divine Eternians",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/i2oMu5YBcWg?si=A5hIM6gLlOAgDhTA",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "1 month",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A gesture-based action game where players draw symbols to trigger attacks and defeat enemies through fast-paced combat progression.",

                text: "The project initially only contained the core gesture-recognition combat mechanic. I expanded the prototype into a more complete gameplay experience by implementing progression systems, enemy behaviors, wave spawning, UI systems, player data management, and gameplay scaling."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Gesture Combat System ]",
                    label:
                        "Integrated and expanded a gesture-recognition combat mechanic based on player drawing input and symbol detection."
                },
                {
                    imagePlaceholder: "[ Enemy & Wave System ]",
                    label:
                        "Implemented enemy spawning systems, wave progression, enemy scaling, and combat pacing."
                },
                {
                    imagePlaceholder: "[ Progression System ]",
                    label:
                        "Developed level-up and upgrade systems allowing players to improve combat stats and progression during gameplay."
                },
                {
                    imagePlaceholder: "[ Player Data System ]",
                    label:
                        "Built player data and character management systems including stats, unlock flow, and progression handling."
                },
                {
                    imagePlaceholder: "[ UI & Gameplay Flow ]",
                    label:
                        "Implemented gameplay UI systems, combat feedback, and progression interfaces optimized for mobile gameplay."
                },
                {
                    imagePlaceholder: "[ Gameplay Completion ]",
                    label:
                        "Expanded the original gameplay prototype into a more complete and playable gameplay loop."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Scriptable Objects\n- DOTween\n- Git"
            },

            impact: [
                "Expanded a core gameplay prototype into a more complete gameplay experience",

                "Implemented scalable enemy wave and progression systems",

                "Built gameplay systems surrounding gesture-based combat interactions",

                "Improved gameplay flow, combat pacing, and player progression structure",

                "Integrated gameplay systems, UI flow, and runtime progression into a cohesive mobile gameplay loop"
            ]
        },
        "zombie-shooter": {
            title: "Zombie Shooter",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/q7FgWc7hpNo?si=kyQu_1eWOBhz2wCS",
            engine: "Unity 3D",
            language: "C#",
            platform: "PC",
            duration: "1 week",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A top-down zombie shooter prototype created to study real-time combat, enemy behaviors, shooting mechanics, and physics-based gameplay feedback.",

                text: "A gameplay programming practice project focused on building a functional shooter prototype, including player movement, weapon shooting, enemy chasing behavior, damage handling, ragdoll death reactions, and moment-to-moment combat feedback."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Weapon Rig System ]",
                    label:
                        "Built a weapon rig setup system allowing different weapon types to dynamically adjust player hand positioning and weapon handling presentation."
                },
                {
                    imagePlaceholder: "[ Shooting System ]",
                    label:
                        "Implemented real-time shooting mechanics including weapon firing, projectile handling, hit detection, and damage application."
                },
                {
                    imagePlaceholder: "[ Enemy AI ]",
                    label:
                        "Developed zombie chasing behavior and close-range combat interactions between enemies and the player."
                },
                {
                    imagePlaceholder: "[ Combat System ]",
                    label:
                        "Built combat logic for health management, damage calculation, enemy elimination, and gameplay state handling."
                },
                {
                    imagePlaceholder: "[ Ragdoll Physics ]",
                    label:
                        "Implemented ragdoll death reactions and physics-based enemy feedback to improve combat feel and visual impact."
                },
                {
                    imagePlaceholder: "[ Gameplay Prototype ]",
                    label:
                        "Created a functional top-down shooter prototype focused on fast iteration, gameplay experimentation, and combat system practice."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Physics 3D\n- Animation Rigging\n- Scriptable Objects\n- Git"
            },

            impact: [
                "Built a functional top-down shooter gameplay prototype",

                "Implemented shooting mechanics, enemy AI behavior, damage handling, and combat feedback",

                "Added ragdoll physics to improve enemy death feedback and gameplay feel",

                "Improved understanding of real-time combat programming and prototype development"
            ]
        },
        "cook-together": {
            title: "Cook Together",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/9HeQwHSqwyo?si=8Nr7D7pi9yE5SfZm",
            engine: "Unity 3D",
            language: "C#",
            platform: "PC",
            duration: "1 week",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A cooperative cooking game prototype focused on interaction systems, kitchen workflow gameplay, and multiplayer-style task management.",

                text: "Originally based on a Code Monkey tutorial project, I expanded the prototype with additional gameplay systems and polish features including new character models, IK hand rigging, dishwashing mechanics, custom animations, and food order queue systems."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and custom implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Kitchen Interaction System ]",
                    label:
                        "Implemented interactive cooking workflows including item pickup, cooking stations, ingredient processing, and gameplay state transitions."
                },
                {
                    imagePlaceholder: "[ IK Hand Rigging ]",
                    label:
                        "Added IK rigging systems for character hand interactions to improve gameplay presentation and animation quality."
                },
                {
                    imagePlaceholder: "[ Dishwashing System ]",
                    label:
                        "Designed and implemented a dishwashing gameplay mechanic with additional animations and interaction flow."
                },
                {
                    imagePlaceholder: "[ Order Queue System ]",
                    label:
                        "Built food order queue systems handling customer requests, gameplay pacing, and kitchen task management."
                },
                {
                    imagePlaceholder: "[ Gameplay Expansion ]",
                    label:
                        "Expanded the original tutorial prototype with additional gameplay features, polish systems, and interaction improvements."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity 3D\n- C#\n- Animation Rigging\n- Animator\n- Physics3D\n- Scriptable Objects\n- Git"
            },

            impact: [
                "Expanded a tutorial-based prototype into a more feature-complete gameplay experience",

                "Implemented additional gameplay mechanics and interaction systems beyond the original tutorial scope",

                "Improved gameplay presentation through IK rigging and animation integration",

                "Enhanced understanding of interaction-based gameplay architecture and gameplay flow systems"
            ]
        },
        "perfect-tile-lite": {
            title: "Perfect Tile Lite",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/yE7wVmDPRwE?si=a4y4vlrkMXjV-AnA",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android",
            duration: "1 week",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A rhythm-based mobile prototype focused on timing mechanics, note spawning, player input accuracy, and music-driven gameplay flow.",

                text: "A gameplay prototype created as a learning and experimentation project to study rhythm game mechanics, timing systems, note synchronization, and responsive player input handling."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Rhythm Timing System ]",
                    label:
                        "Implemented rhythm gameplay systems based on timing windows, note synchronization, and music-driven gameplay pacing."
                },
                {
                    imagePlaceholder: "[ Note Spawning System ]",
                    label:
                        "Built dynamic note spawning and movement systems synchronized with gameplay timing flow."
                },
                {
                    imagePlaceholder: "[ Input Detection ]",
                    label:
                        "Developed responsive touch input handling and accuracy validation for rhythm-based interactions."
                },
                {
                    imagePlaceholder: "[ Gameplay Feedback ]",
                    label:
                        "Implemented gameplay feedback systems including hit responses, combo flow, and visual interaction feedback."
                },
                {
                    imagePlaceholder: "[ Prototype & Learning ]",
                    label:
                        "Used the project as a hands-on study exercise to better understand rhythm gameplay architecture and timing-sensitive systems."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity 2D\n- C#\n- Audio System\n- DOTween\n- Git"
            },

            impact: [
                "Built a functional rhythm gameplay prototype with timing-based interactions",

                "Implemented note spawning, timing synchronization, and responsive input systems",

                "Improved understanding of rhythm gameplay flow and timing-sensitive mechanics",

                "Explored gameplay feedback systems and music-driven pacing design"
            ]
        },
        "solitaire": {
            title: "Solitaire Monument: Happy Trip",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/-6df6ynuLBk",
            engine: "Unity 2D",
            language: "C#",
            platform: "Android, iOS",
            duration: "Production Team Project",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A live-service solitaire game featuring progression systems, event content, mini games, and meta gameplay mechanics.",

                text: "A production team project developed during my time at a previous company. I contributed to gameplay feature development including new card systems, gameplay effects, a dice-based mini game, battle pass systems, and mission systems integrated directly into the core solitaire gameplay loop."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay features and contributions:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Card System ]",
                    label:
                        "Implemented new card mechanics, gameplay effects, and visual feedback systems integrated into the solitaire gameplay flow."
                },
                {
                    imagePlaceholder: "[ Dice Mini Game ]",
                    label:
                        "Developed a dice-based mini game inspired by board-game progression systems, combining 3D dice presentation with 2D environments to create a stylized visual illusion."
                },
                {
                    imagePlaceholder: "[ Battle Pass System ]",
                    label:
                        "Built battle pass progression systems connected directly to gameplay activities and long-term player engagement."
                },
                {
                    imagePlaceholder: "[ Mission System ]",
                    label:
                        "Implemented mission systems linked to core gameplay objectives and player progression flow."
                },
                {
                    imagePlaceholder: "[ Production Workflow ]",
                    label:
                        "Collaborated within a production team environment to integrate gameplay systems, UI flows, and feature content into a live game pipeline."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- DOTween\n- Scriptable Objects\n- Git"
            },

            impact: [
                "Contributed gameplay features and progression systems to a live production game",

                "Implemented battle pass and mission systems connected directly to core gameplay activities",

                "Developed a stylized dice mini game combining 3D gameplay elements with 2D presentation",

                "Worked within a collaborative production environment alongside designers, artists, and other developers",

                "Improved understanding of live-game feature integration and production workflow"
            ]
        },
        "arena-mayhem": {
            title: "Arena Mayhem",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/9UsknI55rMs?si=34Bevo-T0bqWIGHR",
            engine: "Unity 3D",
            language: "C#",
            platform: "PC",
            duration: "3 months",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A multiplayer arena combat prototype focused on real-time player interaction, online gameplay synchronization, and fast-paced combat mechanics.",

                text: "Arena Mayhem was my university graduation project and also the first online multiplayer game I developed. The project was built primarily through self-learning and experimentation, focusing on multiplayer gameplay architecture, Photon networking, real-time synchronization, and online combat systems."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and technical implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Multiplayer System ]",
                    label:
                        "Implemented real-time multiplayer gameplay using Photon PUN, including player synchronization, room flow, and online gameplay interactions."
                },
                {
                    imagePlaceholder: "[ Combat System ]",
                    label:
                        "Built arena-based combat mechanics handling player attacks, movement, damage interactions, and gameplay feedback."
                },
                {
                    imagePlaceholder: "[ Online Gameplay Flow ]",
                    label:
                        "Developed gameplay flow systems for multiplayer sessions, player interactions, and match progression."
                },
                {
                    imagePlaceholder: "[ Networking Study ]",
                    label:
                        "Used the project as a hands-on learning experience to study multiplayer architecture and online gameplay synchronization."
                },
                {
                    imagePlaceholder: "[ Self-Learning Development ]",
                    label:
                        "Developed the project primarily through independent learning and experimentation outside the university curriculum."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity \n- C#\n- Photon PUN\n- Multiplayer Networking\n- Physics3D\n- Animator\n- Git"
            },

            impact: [
                "Built a functional online multiplayer prototype using Photon PUN",

                "Implemented real-time multiplayer interactions and combat synchronization",

                "Improved understanding of multiplayer gameplay architecture and networking fundamentals",

                "Completed the project as a university graduation project through self-driven learning and experimentation"
            ]
        },
        "instinct-on": {
            title: "Instinct: ON",
            role: "Gameplay Programmer",
            videoUrl: "https://youtu.be/CGJYz5veAKM?si=eWp4OZBJCiR1M-XU",
            engine: "Unity 3D",
            language: "C#",
            platform: "PC",
            duration: "2 months",

            headerTitles: {
                role: "Role",
                lang: "Language",
                engine: "Engine",
                time: "Duration",
                repo: "Repo",
                platform: "Platform"
            },

            aboutData: {
                pitch: "A survival crafting prototype featuring inventory systems, enemy AI, base building, resource gathering, and cooking mechanics.",

                text: "Instinct: ON was one of the first game projects I developed while learning game development primarily through YouTube tutorials and self-study. The project was created as a university assignment and became a hands-on learning experience where I explored gameplay programming by building systems step-by-step through experimentation and research."
            },

            mechanicData: {
                title: "2. Core Systems",
                intro: "Main gameplay systems and implementations:"
            },

            mechanics: [
                {
                    imagePlaceholder: "[ Inventory System ]",
                    label:
                        "Implemented one of my first inventory systems including item collection, item storage, and gameplay interaction handling."
                },
                {
                    imagePlaceholder: "[ Crafting & Cooking ]",
                    label:
                        "Built cooking and crafting interaction systems allowing players to process resources and create consumable items."
                },
                {
                    imagePlaceholder: "[ Building System ]",
                    label:
                        "Developed basic building mechanics for placing structures and expanding player survival gameplay."
                },
                {
                    imagePlaceholder: "[ Enemy System ]",
                    label:
                        "Implemented enemy AI behaviors, chasing systems, combat interactions, and basic survival gameplay flow."
                },
                {
                    imagePlaceholder: "[ Self-Learning Development ]",
                    label:
                        "Developed the project through self-learning, experimentation, and continuous iteration while studying gameplay programming fundamentals."
                }
            ],

            techData: {
                title: "3. Tech Used",

                text:
                    "- Unity\n- C#\n- Physics3D\n- Animator\n- Git"
            },

            impact: [
                "Built one of my first complete gameplay prototypes through self-learning and experimentation",

                "Implemented foundational gameplay systems including inventory, crafting, enemies, and building mechanics",

                "Improved understanding of gameplay architecture and system interaction design",

                "Completed the project as a university coursework assignment while independently learning game development"
            ]
        }
    }
};
