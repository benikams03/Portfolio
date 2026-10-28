const dataCertification = [
    {
        date : '2021',
        titre: 'Baccalauréat',
        description: 'Complexe Scolaire la borne muanda, biologie chimie',
        documentUrl: null, // Ex. '/diplomes/baccalaureat.pdf' une fois le fichier ajouté dans public/.
    },
    {
        date : '2021 - 2025',
        titre: 'Licence en informatique',
        description: 'Université de Kinshasa, Faculté de science département math-info',
        documentUrl: null,
    },
]

const dataprojet = [
    {
        image : '/image-project/bongisakisi.png',
        titre : 'Bongisakisi',
        text : "Application desktop offline complète pour gérer votre pharmacie : stocks, ventes, produits et rapports. Interface intuitive conçue pour les pharmaciens.",
        type : 'web',
        link : 'https://bongisakisi.vercel.app/',
    },
    {
        image : '/image-project/drcskyangecy.png',
        titre : 'Drc-sky-agency',
        text : "Partez à la découverte d’un tourisme responsable avec nos guides éthiques, destinations écoresponsables et conseils pour voyager autrement.",
        type : 'web',
        link : 'https://drc-sky-agency.vercel.app/'
    },
    {
        image : '/image-project/tokutan.png',
        titre : 'Tokutana',
        text : "Découvrez notre plateforme complète de gestion d'événements : créez, organisez et gérez facilement tous vos événements professionnels ou personnels en ligne.",
        type : 'web',
        link : 'https://tokutana.vercel.app/'
    },
    // {
    //     image : '/image-project/apk_tokutana.png',
    //     titre : 'Tokutana',
    //     text : "Application de gestion d'événements, la version mobile du site tokutana",
    //     type : 'mobile',
    //     link : ''
    // },
]

// Remplacer cet exemple par vos véritables expériences, puis en ajouter au tableau.
const experiences = [
    {
        id: 'experience-demo',
        company: 'Nom de l’entreprise',
        role: 'Développeur full-stack',
        period: 'Janvier 2025 — Juin 2025',
        duration: '6 mois · Exemple',
        description: 'Exemple de mission : conception d’une application web, développement des interfaces et de l’API, puis participation au déploiement. À remplacer par vos missions et réalisations.',
        skills: ['React', 'Node.js', 'Travail en équipe'],
    },
]

// Ce certificat est une maquette, pas une certification obtenue.
const certificates = [
    { id: 'certificat-demo', title: 'Développement web', issuer: 'Organisme à renseigner', year: '2025 (exemple)' },
    { id: 'certificat-mobile-demo', title: 'Développement mobile', issuer: 'Organisme à renseigner', year: '2025 (exemple)' },
]

const skillGroups = [
    { title: 'Langages & interfaces', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'Frameworks & applications', items: ['React', 'Next.js', 'Vue.js', 'React Native', 'Electron', 'Laravel'] },
    { title: 'Backend & données', items: ['Node.js', 'Express', 'Fastify', 'Slim', 'MySQL', 'MongoDB'] },
    { title: 'Outils & création', items: ['Git', 'GitHub', 'WordPress', 'Photoshop', 'Illustrator', 'Adobe XD'] },
]

export { dataCertification, dataprojet, experiences, certificates, skillGroups }
