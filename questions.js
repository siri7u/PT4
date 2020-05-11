var questions = [{
        "numero": "1",
        "description": "Donner toutes les informations sur les pilotes",

        "regles": [{
                "nom": "SELECT *",
                "regExps": new RegExp(/select\s\*/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": 1
            },
            {
                "nom": "FROM pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            }
        ],
    },

    {
        "numero": "2",
        "description": "Donner le nom et l’adresse des pilotes",

        "regles": [{
                "nom": "SELECT nompil, adresse1, adresse2",
                "regExps": new RegExp(/select\s(?=.*\bnompil\b)(?=.*\badresse1\b)(?=.*\badresse2\b).*/gi),
                "feedbackVrai": "Contient select",
                "feedbackFaux": "Ne contient pas select",
                "poids": 1
            },
            {
                "nom": "FROM pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/i),
                "feedbackVrai": "Contient from",
                "feedbackFaux": "Ne contient pas from",
                "poids": 1
            }
        ],
    },

    {
        "numero": "3",
        "description": "L’identifiant et le nom de chaque pilote par ordre alphabétique",
        "regles": [{
                "nom": "SELECT id, nompil",
                "regExps": new RegExp(/select ['|"]?id['|"]?(,|\s,\s|\s,|,\s)['|"]?nompil['|"]?/gi),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/gi),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            }, {
                "nom": "ORDER BY nompil",
                "regExps": new RegExp(/ORDER BY ['|"]?nompil['|"]?(?!\S)/gi),
                "feedbackVrai": "Contient le bon order by",
                "feedbackFaux": "Ne contient pas le bon order by",
                "poids": 1
            }
        ],
    },


    {
        "numero": "4",
        "description": "Le nom et la capacité de chacun des avions",
        "regles": [{
                "nom": "SELECT nomav, capacite",
                "regExps": new RegExp(/select ['|"]?nomav['|"]?(,|\s,\s|\s,|,\s)['|"]?capacite['|"]?/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM avion",
                "regExps": new RegExp(/from ['|"]?avion['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
        ],
    },

    {
        "numero": "5",
        "description": "Le nom des villes d’où part au moins un vol",
        "regles": [{
                "nom": "SELECT DISTINCT villedep",
                "regExps": new RegExp(/select distinct ['|"]?villedep['|"]?/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM vol",
                "regExps": new RegExp(/from ['|"]?vol['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
            {
                "nom": "WHERE 1",
                "regExps": new RegExp(/where 1(?!\S)/i),
                "feedbackVrai": "Contient le bon where",
                "feedbackFaux": "Ne contient pas le bon where",
                "poids": 1
            },
        ],
    },
    {
        "numero": "6",
        "description": "Les villes qui sont reliées par au moins un vol",
        "regles": [{
                "nom": "SELECT DISTINCT villedep, villearr ",
                "regExps": new RegExp(/select distinct ['|"]?villedep['|"]?(,|\s,\s|\s,|,\s)['|"]?villearr['|"]?/gi),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM vol",
                "regExps": new RegExp(/from ['|"]?vol['|"]?(?!\S)/gi),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
        ],
    },
    {
        "numero": "7",
        "description": "Noms de pilotes qui habitent à Nice ou qui gagnent plus de 2300 Euros",
        "regles": [{
                "nom": "SELECT nompil",
                "regExps": new RegExp(/select ['|"]?nompil['|"]?/gi),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/gi),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
            {
                "nom": "WHERE adresse2 = 'Nice' OR salaire > 2300",
                "regExps": new RegExp(/where ['|"]?adresse2['|"]?\s?=\s?['|"]?nice['|"]?\sor\s['|"]?salaire['|"]?\s?>\s?2300/gi),
                "feedbackVrai": "Contient le bon where",
                "feedbackFaux": "Ne contient pas le bon where",
                "poids": 1
            },
        ],
    },
    {
        "numero": "8",
        "description": "Liste des avions de nom A310, A320 et A330",
        "regles": [{
                "nom": "SELECT *",
                "regExps": new RegExp(/select\s\*/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": 1
            },
            {
                "nom": "FROM avion",
                "regExps": new RegExp(/from ['|"]?avion['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
            {
                "nom": "WHERE nomav = 'A310' or nomav = 'A320' or nomav = 'A330' ",
                "regExps": new RegExp(/where ['|"]?nomav['|"]?\s?=\s?['|"]?A310['|"]\sOR\s['|"]?nomav['|"]?\s?=\s?['|"]A320['|"]?\sOR\s['|"]?nomav['|"]?\s?=\s?['|"]A330['|"]?/i),
                "feedbackVrai": "Contient le bon where",
                "feedbackFaux": "Ne contient pas le bon where",
                "poids": 1
            }
        ],
    },
    {
        "numero": "9",
        "description": "Noms des pilotes qui gagnent entre 2300 Euros et 3500 Euros inclus (donner 2 solutions).",
        "regles": [{
                "nom": "SELECT nompil",
                "regExps": new RegExp(/select ['|"]?nompil['|"]?/gi),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": -1
            },
            {
                "nom": "FROM pil",
                "regExps": new RegExp(/from ['|"]?pil['|"]?(?!\S)/gi),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
            {
                "nom": "WHERE " + "2300" + "&lt;" + "salaire" + "&lt;" + "3500",
                "regExps": new RegExp(/where 2300\s?<\s?['|"]?salaire['|"]?\s?<\s?3500/gi),
                "feedbackVrai": "Contient le bon where",
                "feedbackFaux": "Ne contient pas le bon where",
                "poids": 1
            },
        ],


    },
    {
        "numero": "10",
        "description": "Les capacités de tous les avions de type AIRBUS",
        "regles": [{
                "nom": "SELECT *",
                "regExps": new RegExp(/select\s\*/i),
                "feedbackVrai": "Contient le bon select",
                "feedbackFaux": "Ne contient pas le bon select",
                "poids": 1
            },
            {
                "nom": "FROM vol",
                "regExps": new RegExp(/from ['|"]?vol['|"]?(?!\S)/i),
                "feedbackVrai": "Contient le bon from",
                "feedbackFaux": "Ne contient pas le bon from",
                "poids": 1
            },
            {
                "nom": "WHERE villedep = 'Nice' and villearr = 'Paris' ",
                "regExps": new RegExp(/where ['|"]?villedep['|"]?\s?=\s?['|"]?Nice['|"]\sand\s['|"]?villearr['|"]?\s?=\s?['|"]Paris['|"]?/i),
                "feedbackVrai": "Contient le bon where",
                "feedbackFaux": "Ne contient pas le bon where",
                "poids": 1
            }
        ],
    },


];