[
    {
        name: 'Edward',
        nen_type: 'Specialist',
        element: 'Lightning',
        elm: lightning,
        hp: 3033,
        id: 200,
        team: '',
        round: 0,
        pick: 0,
        //PHYSICAL
        attack: 98,
        defense: 143,
        critical: .10,
        strength: 1.12,
        //MAGIC
        elm_attack: 188,
        elm_defense: 230,
        elm_efficiency: 1.15,
        potency: .26,
        //WEAPON
        weapon: 231,
        shield: 199,
        curse_crit: .15,
        weaponCurse: 'Sage',
        weapon_amount: 10,
        //SPIRIT
        spirit: 140,
        spirit_def: 175,
        spirit_crit: .15,
        spiritCurse: 'Damage',
        spirit_amount: 1.25,
        //SPEED / LUCK
        accuracy: 5,
        evasion: 5,
        luck: 7,
        stun: .06,
        //GENJUTSU
        genjutsu: 0,
        gen_power: 40,
        willpower: 5,
        chakra: 0,
        chakra_rec: 5,
        drain: 5,
        //CURSE
        cursed_energy: 0,
        cursed_recovery: 35,
        negative_energy: 30,
        cursed_tech: 'code soon',
        curse_amount: .48,
        curse_duration: 6,
        curse_cost: 15,
        //DOMAIN
        dom_purity: 12,
        dom_lethal: 60,
        dom_duration: 8,
        dom_cost: 22,
        //NINJUTSU
        ninjutsu2: 'code soon',
        ninJutsu2cost: 14,
        ninJutsu2Dmg: 160,
        nin2amount: .07,
        ninEnhance: true,
        //ULTIMATE
        ninjutsu: "code soon",
        nin_cost: 24,
        ninjutsu_pow: 160,
        ninamount: 25,
        ultEnhance: true,
        //PLEASE PUT YOUR ALCHEMY STATS HERE:
        alchemy: 142, // base alchemy attack stat (like "attack")
        ward: 104, // Edward’s resistance to incoming alchemy
        blueprint: {
            weapon: { min: 200 },
            shield: { min: 180 },
            vitality: { min: 0.4 },
            potency: { min: 0.2 },
            rare: { elm_defense: { min: 225 } }, // rare stat condition gives bonus if met
            active_slots: 4 // how many blueprint conditions are active this round
        },
        transmutation: 0.5, // multiplier per successful blueprint match
        precision: 0.65, // lower = less likely to misfire (buff opponent)
        control: 0.1, // adds risk for each active blueprint slot over 1
        //BUFFS
        intelligence: 35,
        vitality: .45,
        buff: 'Increase Luck by 3',
        buff2: 'Decrease Purity by 2',
        buff_acc: 50,
        buff2_acc: 75,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ajiGckP4vsfuNjzPC_O8hXaN6qS2bqi9ENz7SLQ-cqgQqtq5GhQvn_riwToOefjbpuo&usqp=CAU'
    }
    ,]
