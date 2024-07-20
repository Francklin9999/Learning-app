import { useNavigate } from 'react-router-dom';

export const title = "Franck";
export const language = "French";

export const useNavigation = () => {
    const navigate = useNavigate();
  
    const navigateTo = (location, state = {}) => {
      navigate(location);
    };
  
    return {
      navigateTo,
      handleHome: (state) => navigate('/', { state }),
      handleLearn: (state) => navigate('/learn', { state }),
      handleLesson: (state) => navigate('lesson', { state }),
      handleLogin: (state) => navigate('/login', { state }),
      handleScore: (state) => navigate('/score', { state }),
      handleSignUp: (state) => navigate('/signup', { state }),
      handlePasswordReset: (state) => navigate('/PasswordReset', { state }),
      handleTerms: (state) => navigate('/terms', { state }),
      handleError: (state) => navigate('/*', { state }),
    };
  };

export const questions = {
    ivory : {
        basic : [
            ["Quel est le mot en tagbana pour 'ma mère' et sa forme plurielle ?", "Nan kpɔ", "Nan to", "Nan nukpɔ", "Nan nu", 4],
            ["Comment dit-on 'ton père' en tagbana pour la deuxième personne du singulier ?", "Manwo", "Wowo", "Yewo", "Manwo ti", 1],
            ["Quel est l'adjectif possessif en tagbana pour 'son/sa' ?", "nan", "man", "wo", "Wi, ki, li, mi", 4],
            ["Quel est le pronom pour la première personne du pluriel en tagbana ?", "Man", "Wo", "Pe", "Wolo", 4],
            ["Quel est le pronom anaphorique en tagbana pour 'ils/elles' lorsqu'il s'agit de liquides ?", "Ki", "Pe", "Li", "Ti", 4],
            ["Traduisez la phrase 'Il a mangé' en utilisant le pronom anaphorique approprié en tagbana.", "Wi en-ɛnlen", "Ki je", "Wi ti wʊ", "Ke je", 3],
            ["Comment utilise-t-on l'adjectif possessif en tagbana pour 'mon' dans une phrase ? Donnez un exemple.", "Mi li wʊ", "Nan kpɔ", "Nan pi-ili", "Man jiɛ-la", 3],
            ["Quelle est la forme plurielle de 'mon enfant' en tagbana ?", "Nan kpɔ yele", "Nan pi-ili", "Nan jiɛ-la", "Nan piɔle", 4],
            ["Quel est le terme en tagbana pour 'jeunesse, féminin' ?", "Picie-ɛrɛ", "Nanjie-ɛ", "Nan-jiɛ", "Picie-ɛ", 4],
            ["Comment traduiriez-vous 'Les vêtements sont propres' en utilisant le pronom anaphorique correct ?", "Dre-e ki wʊ", "Dre-e ti wʊ", "Guo-olo pe li", "Kajɛn-ɛnlen ke je", 2]
        ],
        medium : [
            ["Tagbana: Ki gniɛn-ɛn (Traduction: Ouvre-le !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Dre-e ki le", "Goyɛ-e ki gniɛn-ɛn", "Gbɔssio ki jie-e", "Nanto ki ya-a", 2],
            ["Tagbana: Ki jre-ɛ (Traduction: Lève-le !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Kie ki jre-ɛ", "Goyɛ-e ki gniɛn-ɛn", "Drere ti kpe", "Acon-on ki te-ɛ", 1],
            ["Tagbana: Ki le (Traduction: Porte-le !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Fɔɔ ki cie", "Dre-e ki le", "Hro ti flo wa", "Nanto ki ya-a", 2],
            ["Tagbana: Ki fa (Traduction: Enlève-le !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Tan-an ki ta", "Kayɔ-o ki tanlan", "Drere ti kpe", "Dre-e ki fa", 4],
            ["Tagbana: Ki ya-a (Traduction: Pardon, laisse tomber !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Nanto ki ya-a", "Fɔɔ ki cie", "Kayɔ-o ki tanlan", "Tan-an ki ta", 1],
            ["Tagbana: Ki tanlan (Traduction: Raconte (l’histoire) !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Goyɛ-e ki gniɛn-ɛn", "Tan-an ki ta", "Kayɔ-o ki tanlan", "Nanto ki ya-a", 3],
            ["Tagbana: Ki ton (Traduction: Ferme-le !) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Kie ki jre-ɛ", "Acon-on ki te-ɛ", "Dre-e ki le", "Goyɛ-e ki gniɛn-ɛn", 2],
            ["Tagbana: Ki cie (Traduction: Refuse, oppose-toi à ça) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Tan-an ki ta", "Fɔɔ ki cie", "Nanto ki ya-a", "Hro ti flo wa", 2],
            ["Tagbana: Ta sie man ya gniɛn (Traduction: Va ouvrir (là-bas)) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Ta sie man-ɛn", "Ta sie man-ɛn fere", "Ta sie man-an’gniɛn", "Ta sie man-an’li", 3],
            ["Tagbana: Ji ɔ (Traduction: Bois) Laquelle des phrases suivantes est un exemple d'utilisation correct ?", "Ta gnionon", "Ta jio", "Ta dun", "Ta wele", 2]
        ],
        advanced : {

        },
        native : {

        },
    },

    spanish : {
        basic: [
            ["¿Cuál es el plural de 'perro'?", "perros", "perritos", "perras", "perro's", 1],
            ["¿Cuál de los siguientes es una fruta?", "Zanahoria", "Patata", "Manzana", "Brócoli", 3],
            ["Elige el tiempo pasado correcto de 'correr':", "corría", "corrió", "corriendo", "corre", 2],
            ["¿Cuál es el opuesto de 'caliente'?", "frío", "tibio", "calor", "caliente", 1],
            ["¿Cuál palabra es un sustantivo?", "rápidamente", "felicidad", "hermoso", "correr", 2],
            ["Completa la frase: Ella _______ un libro.", "lee", "leyendo", "leyó", "lee", 1],
            ["¿De qué color es el cielo en un día claro?", "azul", "verde", "rojo", "amarillo", 1],
            ["¿Cuál de estos es un mamífero?", "Serpiente", "Rana", "Ballena", "Pez", 3],
            ["¿Cuál es la primera letra del alfabeto?", "Z", "B", "C", "A", 4],
            ["¿Cuánto es 2 + 2?", "3", "4", "5", "6", 2],
        ],
        medium: [
            ["Elige la forma correcta: Él _______ a la escuela todos los días.", "va", "fue", "iba", "irá", 1],
            ["¿Cuál es el participio pasado de 'ver'?", "visto", "vió", "viendo", "ver", 1],
            ["¿Cuál palabra es un adjetivo?", "rápido", "feliz", "correr", "hermoso", 2],
            ["Completa: Nosotros _______ al cine anoche.", "vamos", "fuimos", "ir", "fueron", 2],
            ["¿Cuál es un sinónimo de 'alegre'?", "triste", "feliz", "irritado", "cansado", 2],
            ["¿Cuál es el comparativo de 'bueno'?", "mejor", "bueno", "más bueno", "buen demasiado", 1],
            ["¿Cuál palabra es un verbo?", "rápido", "feliz", "nadar", "hermoso", 3],
            ["Elige el artículo correcto: _____ manzana es roja.", "Un", "El", "Una", "La", 3],
            ["Completa: Ella está _______ desde hace dos horas.", "estudiando", "estudiar", "estudiado", "estudio", 1],
            ["¿Cuál es el superlativo de 'pequeño'?", "menor", "más pequeño", "el menor", "menos pequeño", 3]
        ],
        advanced: [
            ["¿Cuál de estos es un verbo irregular?", "hablar", "caminar", "ir", "jugar", 3],
            ["Completa: Si yo _______ rico, viajaría por el mundo.", "fuera", "era", "sería", "fuese", 1],
            ["¿Qué significa la expresión 'romper el hielo'?", "Hacer reír a alguien", "Comenzar una conversación en un ambiente social", "Terminar una relación", "Romper el hielo", 2],
            ["Elige la frase correcta:", "Ella no gusta de manzanas.", "Ella no gustó de manzanas.", "A ella no le gusta de manzanas.", "Ella no le gustan las manzanas.", 4],
            ["¿Cuál es el antónimo de 'fácil'?", "difícil", "simple", "liviano", "duro", 1],
            ["Completa: Aunque _______ tarde, llegó a tiempo.", "salió", "saliendo", "salir", "haber salido", 1],
            ["¿Cuál es el gerundio de 'comer'?", "comiendo", "comido", "comerá", "come", 1],
            ["¿Cuál frase está en voz pasiva?", "El chef cocinó la comida.", "La comida fue cocinada por el chef.", "El chef está cocinando la comida.", "El chef cocinará la comida.", 2],
            ["Elige la forma correcta: Ella _______ la película antes.", "vio", "ve", "viendo", "verá", 1],
            ["¿Qué significa 'omnipresente'?", "raro", "presente en todas partes", "desconocido", "limitado", 2]
        ],
        native: [
            ["¿Cuál palabra es sinónimo de 'efímero'?", "eterno", "pasajero", "importante", "sustancial", 2],
            ["Completa: El CEO era conocido por su estilo de liderazgo _______.", "autocrático", "autócrata", "auto-crítico", "auto-crátula", 1],
            ["¿Qué significa la expresión 'estar a la vanguardia'?", "anticuado", "avanzado e innovador", "aburrido y desactualizado", "fundamental y básico", 2],
            ["Elige la frase correcta:", "Los datos fueron cuidadosamente analizados por los científicos.", "Los datos era cuidadosamente analizados por los científicos.", "Los datos era cuidadosamente analizado por los científicos.", "Los datos serán cuidadosamente analizados por los científicos.", 1],
            ["¿Qué significa 'yuxtaposición'?", "separación", "contraste", "combinación", "aislamiento", 2],
            ["Completa: El trabajo del artista a menudo se describe como _______.", "banal", "prosaico", "vanguardista", "ordinario", 3],
            ["¿Cuál palabra es un antónimo de 'sociable'?", "reservado", "amigable", "extrovertido", "simpático", 1],
            ["Elige la forma correcta: _______ de los miembros del comité estaban a favor de la nueva política.", "La mayoría", "Muchos", "Varios", "Pocos", 1],
            ["¿Qué significa 'perspicaz'?", "tener gran discernimiento", "falta de claridad", "lento para entender", "incapaz de ver", 1],
            ["Completa: Su argumento era convincente y bien _______.", "articulado", "articulada", "articulativo", "articulando", 1]
        ],
    },

    english : {
            basic: [
                ["What is the plural form of 'cat'?", "cats", "cates", "caties", "cat's", 1],
                ["Which of the following is a fruit?", "Carrot", "Potato", "Apple", "Broccoli", 3],
                ["Choose the correct past tense of 'run':", "ranned", "runned", "ran", "run", 3],
                ["What is the opposite of 'hot'?", "cold", "warm", "cool", "heat", 1],
                ["Which word is a noun?", "quickly", "happiness", "beautiful", "run", 2],
                ["Fill in the blank: She _______ a book.", "reads", "reading", "read", "reads", 1],
                ["What color is the sky on a clear day?", "blue", "green", "red", "yellow", 1],
                ["Which one is a mammal?", "Snake", "Frog", "Whale", "Fish", 3],
                ["What is the first letter of the alphabet?", "Z", "B", "C", "A", 4],
                ["What is 2 + 2?", "3", "4", "5", "6", 2]
            ],
            medium: [
                ["Choose the correct form: He __________ to school every day.", "goes", "go", "going", "gone", 1],
                ["What is the past participle of 'eat'?", "eated", "ate", "eaten", "eat", 3],
                ["Which word is an adjective?", "quickly", "beautiful", "running", "happiness", 2],
                ["Fill in the blank: They _______ to the concert last night.", "go", "went", "gone", "goes", 2],
                ["What is a synonym for 'happy'?", "sad", "joyful", "angry", "tired", 2],
                ["What is the comparative form of 'big'?", "more big", "biggest", "bigger", "biger", 3],
                ["Which word is a verb?", "quickly", "happy", "swim", "beautiful", 3],
                ["Choose the correct article: ______ apple a day keeps the doctor away.", "A", "An", "The", "No article needed", 2],
                ["Fill in the blank: She has been _______ for two hours.", "study", "studying", "studies", "studied", 2],
                ["What is the superlative form of 'fast'?", "faster", "fastest", "more fast", "most fast", 2]
            ],
            advanced: [
                ["Which of the following is an example of an irregular verb?", "talk", "walk", "go", "play", 3],
                ["Fill in the blank: If I _______ rich, I would travel the world.", "am", "was", "were", "be", 3],
                ["What is the meaning of the idiom 'break the ice'?", "To shatter ice", "To make someone laugh", "To initiate conversation in a social setting", "To end a relationship", 3],
                ["Choose the correct sentence:", "She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She do not like apples.", 3],
                ["What is the antonym of 'complex'?", "simple", "difficult", "easy", "hard", 1],
                ["Fill in the blank: Despite _______ late, he arrived on time.", "leaving", "left", "leaves", "leave", 1],
                ["What is the gerund form of 'swim'?", "swam", "swum", "swims", "swimming", 4],
                ["Which sentence is in the passive voice?", "The chef cooked the meal.", "The meal was cooked by the chef.", "The chef is cooking the meal.", "The chef will cook the meal.", 2],
                ["Choose the correct form: She _______ the movie before.", "sees", "seen", "has seen", "saw", 3],
                ["What is the meaning of 'ubiquitous'?", "rare", "present everywhere", "unknown", "limited", 2]
            ],
            native: [
                ["Which word is a synonym for 'ephemeral'?", "eternal", "transient", "significant", "substantial", 2],
                ["Fill in the blank: The CEO was known for his _______ leadership style.", "autocratic", "auto-cratic", "auto cratic", "autocritic", 1],
                ["What does the phrase 'cutting-edge' mean?", "obsolete", "advanced and innovative", "dull and outdated", "basic and fundamental", 2],
                ["Choose the correct sentence:", "The data was carefully analyzed by the scientists.", "The data were carefully analyzed by the scientists.", "The datas were carefully analyzed by the scientists.", "The datas was carefully analyzed by the scientists.", 2],
                ["What is the meaning of the word 'juxtaposition'?", "separation", "contrast", "combination", "isolation", 2],
                ["Fill in the blank: The artist's work is often described as _______.", "banal", "prosaic", "avant-garde", "pedestrian", 3],
                ["Which word is an antonym of 'gregarious'?", "sociable", "reserved", "outgoing", "friendly", 2],
                ["Choose the correct form: _______ of the committee members were in favor of the new policy.", "Most", "Much", "Many", "Several", 1],
                ["What does the word 'perspicacious' mean?", "having keen insight", "lacking clarity", "slow to understand", "unable to see", 1],
                ["Fill in the blank: His argument was compelling and well-_______", "articulate", "articulated", "articulative", "articulating", 2]
            ],
    },

    french : {
        basic: [
            ["Quel est le pluriel de 'chien'?", "chiens", "chienes", "chien's", "chiens'", 1],
            ["Quel pronom remplace 'Marie' dans 'Marie mange une pomme'?", "Elle", "Il", "Nous", "Vous", 1],
            ["Quel est l'infinitif du verbe 'mangé'?", "manger", "mangé", "mangera", "mange", 1],
            ["Choisissez l'adjectif dans cette phrase: 'Le chat est noir.'", "chat", "est", "noir", "le", 3],
            ["Quel mot est un verbe?", "jouer", "maison", "rapide", "bien", 1],
            ["Complétez: Il _____ au marché.", "va", "vont", "vas", "aller", 1],
            ["Quel est le contraire de 'grand'?", "petit", "gros", "haut", "énorme", 1],
            ["Quel est le féminin de 'acteur'?", "acteurs", "actrice", "acteure", "acteur's", 2],
            ["Quel est le passé simple de 'chanter'?", "chantai", "chantas", "chanta", "chanté", 3],
            ["Quel est le pluriel de 'fille'?", "filles", "fillez", "fille's", "fillas", 1]
        ],
        medium: [
            ["Choisissez la bonne forme: Il _____ les devoirs tous les jours.", "fait", "fais", "faient", "faits", 1],
            ["Quel est le participe passé de 'voir'?", "vu", "voir", "voyé", "vont", 1],
            ["Quel mot est un adjectif?", "rapidement", "joyeux", "manger", "chante", 2],
            ["Complétez: Nous _____ au cinéma hier soir.", "allons", "allé", "allez", "sommes allés", 4],
            ["Quel est un synonyme de 'content'?", "triste", "heureux", "fâché", "fatigué", 2],
            ["Quel est le comparatif de 'bon'?", "meilleur", "bonner", "plus bon", "bonner", 1],
            ["Quel mot est un nom?", "rapidement", "maison", "manger", "joli", 2],
            ["Choisissez l'article correct: _____ orange est mûre.", "Un", "Le", "Une", "La", 3],
            ["Complétez: Elle _____ depuis deux heures.", "travaille", "travailler", "travailles", "travaillant", 1],
            ["Quel est le superlatif de 'petit'?", "plus petit", "petitissime", "le plus petit", "moins petit", 3]
        ],
        advanced: [
            ["Lequel des suivants est un verbe irrégulier?", "parler", "marcher", "aller", "jouer", 3],
            ["Complétez: Si j'_____ riche, je voyagerais autour du monde.", "étais", "étais", "suis", "sois", 1],
            ["Que signifie l'expression 'casser les pieds'?", "Danser", "Ennuyer quelqu'un", "Casser des pieds", "Être content", 2],
            ["Choisissez la bonne phrase:", "Elle ne aime pas les pommes.", "Elle n'aime pas les pommes.", "Elle aime pas les pommes.", "Elle ne pas aime les pommes.", 2],
            ["Quel est le contraire de 'facile'?", "difficile", "simple", "léger", "dur", 1],
            ["Complétez: Malgré _____ tard, il est arrivé à l'heure.", "partir", "partis", "partit", "être parti", 4],
            ["Quel est le gérondif de 'manger'?", "mangeant", "mangé", "mangera", "manger", 1],
            ["Quelle phrase est à la voix passive?", "Le chef a cuisiné le repas.", "Le repas a été cuisiné par le chef.", "Le chef cuisine le repas.", "Le chef cuisinera le repas.", 2],
            ["Choisissez la forme correcte: Elle _____ le film avant.", "voit", "vu", "a vu", "voyait", 3],
            ["Que signifie 'omniprésent'?", "rare", "présent partout", "inconnu", "limité", 2]
        ],
        native: [
            ["Quel mot est synonyme de 'éphémère'?", "éternel", "passager", "important", "substantiel", 2],
            ["Complétez: Le PDG était connu pour son style de leadership ______.", "autocratique", "autocrate", "auto-crate", "auto-critique", 1],
            ["Que signifie 'à la pointe'?", "obsolète", "avancé et innovant", "terne et démodé", "fondamental et basique", 2],
            ["Choisissez la bonne phrase:", "Les données ont été soigneusement analysées par les scientifiques.", "Les donnée étaient soigneusement analysées par les scientifiques.", "Les données étaient soigneusement analysées par les scientifiques.", "Les données sont soigneusement analysées par les scientifiques.", 3],
            ["Que signifie 'juxtaposition'?", "séparation", "contraste", "combinaison", "isolement", 2],
            ["Complétez: Le travail de l'artiste est souvent décrit comme ______.", "banal", "prosaïque", "avant-gardiste", "ordinaire", 3],
            ["Quel mot est un antonyme de 'sociable'?", "réservé", "amical", "sortant", "sympathique", 1],
            ["Choisissez la bonne forme: _______ des membres du comité étaient en faveur de la nouvelle politique.", "La plupart", "Beaucoup", "Plusieurs", "Un peu", 1],
            ["Que signifie 'perspicace'?", "ayant une grande perspicacité", "manque de clarté", "lent à comprendre", "incapable de voir", 1],
            ["Complétez: Son argument était convaincant et bien ______.", "articulé", "articulée", "articulatif", "articulant", 1]
        ],
    },

    dutch : {
        basic: [
            ["Wat is het meervoud van 'kat'?", "katten", "kattes", "katjes", "kat's", 1],
            ["Welke van de volgende is een fruit?", "Wortel", "Aardappel", "Appel", "Broccoli", 3],
            ["Kies de juiste verleden tijd van 'lopen':", "loopte", "liep", "loopten", "gelopen", 2],
            ["Wat is het tegenovergestelde van 'heet'?", "koud", "warm", "koel", "warmte", 1],
            ["Welk woord is een zelfstandig naamwoord?", "snel", "geluk", "mooi", "lopen", 2],
            ["Vul in: Zij _______ een boek.", "leest", "lezen", "leest", "gelezen", 1],
            ["Welke kleur heeft de lucht op een heldere dag?", "blauw", "groen", "rood", "geel", 1],
            ["Welke van deze is een zoogdier?", "Slang", "Kikker", "Walvis", "Vis", 3],
            ["Wat is de eerste letter van het alfabet?", "Z", "B", "C", "A", 4],
            ["Wat is 2 + 2?", "3", "4", "5", "6", 2]
        ],
        medium: [
            ["Kies de juiste vorm: Hij __________ naar school elke dag.", "gaat", "ga", "gaan", "gegaan", 1],
            ["Wat is het voltooid deelwoord van 'eten'?", "eet", "at", "gegeten", "eten", 3],
            ["Welk woord is een bijvoeglijk naamwoord?", "snel", "mooi", "lopen", "geluk", 2],
            ["Vul in: Ze _______ naar het concert gisteravond.", "gaat", "ging", "gegaan", "gaan", 2],
            ["Wat is een synoniem voor 'blij'?", "verdrietig", "gelukkig", "boos", "moe", 2],
            ["Wat is de vergrotende trap van 'groot'?", "groter", "grootste", "meer groot", "grote", 1],
            ["Welk woord is een werkwoord?", "snel", "gelukkig", "zwemmen", "mooi", 3],
            ["Kies het juiste lidwoord: ______ appel per dag houdt de dokter weg.", "Een", "De", "Het", "Geen lidwoord nodig", 1],
            ["Vul in: Zij is _______ voor twee uur.", "studeren", "studeert", "gestudeerd", "studie", 2],
            ["Wat is de overtreffende trap van 'snel'?", "sneller", "snelst", "meer snel", "meest snel", 2]
        ],
        advanced: [
            ["Welke van de volgende is een onregelmatig werkwoord?", "praten", "lopen", "gaan", "spelen", 3],
            ["Vul in: Als ik _______ rijk was, zou ik de wereld rondreizen.", "ben", "was", "waren", "zijn", 2],
            ["Wat betekent de uitdrukking 'het ijs breken'?", "IJs breken", "Iemand laten lachen", "Een gesprek beginnen in een sociale setting", "Een relatie beëindigen", 3],
            ["Kies de juiste zin:", "Ze houd niet van appels.", "Ze houdt niet van appels.", "Ze houdt niet appels.", "Ze houd van niet appels.", 2],
            ["Wat is het antoniem van 'complex'?", "eenvoudig", "moeilijk", "gemakkelijk", "zwaar", 1],
            ["Vul in: Ondanks _______ laat, kwam hij op tijd aan.", "verlaten", "verlaten hebben", "vertrekken", "verlatend", 1],
            ["Wat is het gerundium van 'zwemmen'?", "zwommen", "gezwommen", "zwemt", "zwemmend", 4],
            ["Welke zin is in de passieve vorm?", "De chef kookte de maaltijd.", "De maaltijd werd gekookt door de chef.", "De chef is de maaltijd aan het koken.", "De chef zal de maaltijd koken.", 2],
            ["Kies de juiste vorm: Zij _______ de film eerder.", "ziet", "zag", "heeft gezien", "zien", 3],
            ["Wat betekent 'alomtegenwoordig'?", "zeldzaam", "overal aanwezig", "onbekend", "beperkt", 2]
        ],
        native: [
            ["Welk woord is een synoniem voor 'kortstondig'?", "eeuwig", "tijdelijk", "belangrijk", "substantieel", 2],
            ["Vul in: De CEO stond bekend om zijn _______ leiderschapsstijl.", "autocratisch", "auto-kratisch", "autocraat", "autocritisch", 1],
            ["Wat betekent de uitdrukking 'vooroplopend'?", "achterhaald", "geavanceerd en innovatief", "saai en verouderd", "fundamenteel en basaal", 2],
            ["Kies de juiste zin:", "De gegevens werden zorgvuldig geanalyseerd door de wetenschappers.", "De data was zorgvuldig geanalyseerd door de wetenschappers.", "De data waren zorgvuldig geanalyseerd door de wetenschappers.", "De gegevens zijn zorgvuldig geanalyseerd door de wetenschappers.", 1],
            ["Wat betekent 'juxtapositie'?", "scheiding", "contrast", "combinatie", "isolatie", 2],
            ["Vul in: Het werk van de kunstenaar wordt vaak beschreven als ______.", "banaal", "prozaïsch", "avant-garde", "alledaags", 3],
            ["Welk woord is een antoniem van 'sociaal'?", "reserveren", "vriendelijk", "uitgaand", "vriendelijk", 1],
            ["Kies de juiste vorm: _______ van de commissieleden waren voor het nieuwe beleid.", "De meeste", "Veel", "Velen", "Enige", 1],
            ["Wat betekent 'scherpzinnig'?", "veel inzicht hebben", "onduidelijk", "traag van begrip", "niet in staat om te zien", 1],
            ["Vul in: Zijn argument was overtuigend en goed-_______", "articuleren", "gearticuleerd", "articulatief", "articulerend", 2]
        ],
    },

    portuguese : {
        basic: [
            ["Qual é o plural de 'cão'?", "cães", "cãos", "cões", "cães'", 1],
            ["Qual dessas é uma fruta?", "Cenoura", "Batata", "Maçã", "Brócolis", 3],
            ["Escolha o passado do verbo 'correr':", "correu", "corri", "correu", "corrido", 2],
            ["Qual é o oposto de 'quente'?", "frio", "morno", "fresco", "calor", 1],
            ["Qual palavra é um substantivo?", "rapidamente", "felicidade", "bonito", "correr", 2],
            ["Complete: Ela _______ um livro.", "lê", "ler", "leu", "lendo", 1],
            ["Qual é a cor do céu em um dia claro?", "azul", "verde", "vermelho", "amarelo", 1],
            ["Qual destes é um mamífero?", "Cobra", "Sapo", "Baleia", "Peixe", 3],
            ["Qual é a primeira letra do alfabeto?", "Z", "B", "C", "A", 4],
            ["Quanto é 2 + 2?", "3", "4", "5", "6", 2]
        ],
        medium: [
            ["Escolha a forma correta: Ele __________ para a escola todos os dias.", "vai", "vou", "vão", "indo", 1],
            ["Qual é o particípio passado de 'ver'?", "visto", "viu", "vendo", "ver", 1],
            ["Qual palavra é um adjetivo?", "rápido", "feliz", "correr", "bonito", 2],
            ["Complete: Nós _______ ao cinema ontem à noite.", "vamos", "fomos", "indo", "ir", 2],
            ["Qual é um sinônimo de 'alegre'?", "triste", "feliz", "irritado", "cansado", 2],
            ["Qual é o comparativo de 'bom'?", "melhor", "bom", "mais bom", "bom demais", 1],
            ["Qual palavra é um verbo?", "rápido", "feliz", "nadar", "bonito", 3],
            ["Escolha o artigo correto: _____ maçã é vermelha.", "Um", "O", "Uma", "A", 3],
            ["Complete: Ela está _______ há duas horas.", "estudando", "estudar", "estudado", "estudo", 1],
            ["Qual é o superlativo de 'pequeno'?", "menor", "mais pequeno", "o menor", "menos pequeno", 3]
        ],
        advanced: [
            ["Qual dos seguintes é um verbo irregular?", "falar", "andar", "ir", "brincar", 3],
            ["Complete: Se eu _______ rico, viajaria pelo mundo.", "fosse", "era", "ser", "seja", 1],
            ["O que significa a expressão 'quebrar o gelo'?", "Romper o gelo", "Fazer alguém rir", "Começar uma conversa em um ambiente social", "Terminar um relacionamento", 3],
            ["Escolha a frase correta:", "Ela não gosta de maçãs.", "Ela não gosto de maçãs.", "Ela não gostou de maçãs.", "Ela não gosta das maçãs.", 1],
            ["Qual é o antônimo de 'fácil'?", "difícil", "simples", "leve", "duro", 1],
            ["Complete: Apesar de _______ tarde, ele chegou na hora.", "sair", "saído", "sair tarde", "ter saído", 4],
            ["Qual é o gerúndio de 'comer'?", "comendo", "comido", "comerá", "come", 1],
            ["Qual frase está na voz passiva?", "O chef cozinhou a refeição.", "A refeição foi cozinhada pelo chef.", "O chef está cozinhando a refeição.", "O chef cozinhará a refeição.", 2],
            ["Escolha a forma correta: Ela _______ o filme antes.", "viu", "vê", "vendo", "verá", 1],
            ["O que significa 'onipresente'?", "raro", "presente em todos os lugares", "desconhecido", "limitado", 2]
        ],
        native: [
            ["Qual palavra é sinônimo de 'efêmero'?", "eterno", "passageiro", "importante", "substancial", 2],
            ["Complete: O CEO era conhecido por seu estilo de liderança ______.", "autocrático", "autocrata", "auto-crítico", "auto-crate", 1],
            ["O que significa a expressão 'estar na vanguarda'?", "ultrapassado", "avançado e inovador", "sem graça e antiquado", "fundamental e básico", 2],
            ["Escolha a frase correta:", "Os dados foram cuidadosamente analisados pelos cientistas.", "Os dados era cuidadosamente analisados pelos cientistas.", "Os dados era cuidadosamente analisado pelos cientistas.", "Os dados serão cuidadosamente analisados pelos cientistas.", 1],
            ["O que significa 'justaposição'?", "separação", "contraste", "combinação", "isolamento", 2],
            ["Complete: O trabalho do artista é frequentemente descrito como ______.", "banal", "prosaico", "vanguardista", "ordinário", 3],
            ["Qual palavra é um antônimo de 'sociável'?", "reservado", "amigável", "extrovertido", "simpático", 1],
            ["Escolha a forma correta: _______ dos membros do comitê eram a favor da nova política.", "A maioria", "Muitos", "Vários", "Poucos", 1],
            ["O que significa 'perspicaz'?", "ter grande discernimento", "falta de clareza", "lento para entender", "incapaz de ver", 1],
            ["Complete: Seu argumento era convincente e bem ______.", "articulado", "articulada", "articulativo", "articulando", 1]
        ],
    },
    
    turk : {
        basic: [
            ["'Köpek' kelimesinin çoğul hali nedir?", "köpekler", "köpeker", "köpekçikler", "köpeğin", 1],
            ["Aşağıdakilerden hangisi bir meyvedir?", "Havuç", "Patates", "Elma", "Brokoli", 3],
            ["'Koşmak' fiilinin geçmiş zamanı hangisidir?", "koştum", "koştu", "koşarak", "koşar", 2],
            ["'Sıcak' kelimesinin zıt anlamlısı nedir?", "soğuk", "ılık", "serin", "ısınma", 1],
            ["Hangi kelime bir isim (isim)dir?", "hızlı", "mutluluk", "güzel", "koşmak", 2],
            ["Boşluğu doldurun: O bir kitap _______.", "okur", "okuyor", "okudu", "okurdu", 1],
            ["Açık bir günün gökyüzü rengi nedir?", "mavi", "yeşil", "kırmızı", "sarı", 1],
            ["Hangisi bir memeli hayvandır?", "Yılan", "Kurbağa", "Balina", "Balık", 3],
            ["Alfabetin ilk harfi nedir?", "Z", "B", "C", "A", 4],
            ["2 + 2 kaç eder?", "3", "4", "5", "6", 2]
        ],
        medium: [
            ["Doğru formu seçin: O her gün okula __________.", "gider", "git", "gittik", "gidiyor", 1],
            ["'Görmek' fiilinin birleşik zaman (partisip) hali nedir?", "gördüm", "görüyorum", "görüldü", "görülmüş", 1],
            ["Hangi kelime bir sıfat (sıfat) dir?", "hızlı", "mutlu", "koşmak", "güzel", 2],
            ["Boşluğu doldurun: Biz dün gece sinemaya _______.", "gidiyoruz", "gittik", "gideceğiz", "git", 2],
            ["'Mutlu' kelimesinin eşanlamlısı nedir?", "üzgün", "neşeli", "sinirli", "yorgun", 2],
            ["'İyi' kelimesinin karşılaştırma derecesi nedir?", "daha iyi", "en iyi", "çok iyi", "iyi fazla", 1],
            ["Hangi kelime bir fiil (fiil) dir?", "hızlı", "mutlu", "yüzmek", "güzel", 3],
            ["Doğru belirli tanımlayıcıyı seçin: _____ elma kırmızıdır.", "Bir", "O", "Bu", "A", 1],
            ["Boşluğu doldurun: O iki saattir _______.", "çalışmak", "çalışır", "çalışmış", "çalışıyor", 4],
            ["'Küçük' kelimesinin üstünlük derecesi nedir?", "daha küçük", "en küçük", "çok küçük", "en küçük", 2]
        ],
        advanced: [
            ["Hangisi düzensiz bir fiildir?", "konuşmak", "yürümek", "gitmek", "oynamak", 3],
            ["Boşluğu doldurun: Eğer zengin _______ , dünyayı gezerim.", "oldum", "oldu", "olsam", "olduğum", 3],
            ["'Buzları kırmak' deyimi ne anlama gelir?", "Buzları kırmak", "Birini güldürmek", "Sosyal bir ortamda konuşmaya başlamak", "Bir ilişkiyi bitirmek", 3],
            ["Doğru cümleyi seçin:", "O elmalardan hoşlanmıyor.", "O elmayı sevmiyor.", "O elmayı sevmedi.", "O elma sevmiyor.", 1],
            ["'Karmaşık' kelimesinin zıt anlamı nedir?", "kolay", "zor", "basit", "ağır", 1],
            ["Boşluğu doldurun: _______ geç de olsa, zamanında geldi.", "çıktı", "çıkarak", "çıkmak", "çıkış", 1],
            ["'Yüzmek' kelimesinin mastarı nedir?", "yüzen", "yüzmüş", "yüzer", "yüzerek", 4],
            ["Hangi cümle edilgen yapıdadır?", "Şef yemeği pişirdi.", "Yemek şef tarafından pişirildi.", "Şef yemeği pişiriyor.", "Şef yemeği pişirecek.", 2],
            ["Doğru formu seçin: O filmi daha önce _______.", "gördü", "görmek", "görülmüş", "görüyor", 1],
            ["'Yaygın' kelimesinin anlamı nedir?", "nadiren", "her yerde var olan", "bilinmeyen", "sınırlı", 2]
        ],
        native: [
            ["'Kısa ömürlü' kelimesinin eş anlamlısı nedir?", "sonsuz", "geçici", "önemli", "önemli", 2],
            ["Boşluğu doldurun: CEO liderlik tarzıyla _______ olarak bilinirdi.", "otokratik", "otokrat", "oto-kritik", "otokritik", 1],
            ["'Öncü olmak' deyimi ne anlama gelir?", "geride kalmış", "ileri ve yenilikçi", "sıkıcı ve modası geçmiş", "temel ve basit", 2],
            ["Doğru cümleyi seçin:", "Veriler bilim adamları tarafından dikkatlice analiz edildi.", "Veri dikkatlice analiz edildi.", "Veri dikkatlice analiz edildi.", "Veri dikkatlice analiz edilecek.", 1],
            ["'Karşıtlık' ne anlama gelir?", "ayrılma", "karşıtlık", "kombinasyon", "izolasyon", 2],
            ["Boşluğu doldurun: Sanatçının işi genellikle _______ olarak tanımlanır.", "sıradan", "prozaik", "avangart", "gündelik", 3],
            ["'Sosyal' kelimesinin karşıtı nedir?", "rezervasyon", "dostça", "çıkış", "dostça", 1],
            ["Doğru belirli tanımlayıcıyı seçin: _______ komite üyesi yeni politikaya destek verdi.", "Çoğu", "Çok", "Birçok", "Hiçbir tanımlayıcı gerekli değil", 1],
            ["'Kavrayıcı' kelimesi ne anlama gelir?", "büyük anlayışa sahip olmak", "belirsiz", "anlamak için yavaş", "görememek", 1],
            ["Boşluğu doldurun: Onun argümanı ikna edici ve iyi-______", "düşündü", "düşündü", "düşünceli", "düşünce", 1]
        ],        
    },
}