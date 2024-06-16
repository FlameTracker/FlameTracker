const flameLocations = [
  {
    name: "Marseille",
    position: [43.2965, 5.3698],
    date: "9 mai 2024",
  },
  {
    name: "Toulon",
    position: [43.1242, 5.928],
    date: "10 mai 2024",
  },
  {
    name: "Manosque",
    position: [43.834, 5.786],
    date: "11 mai 2024",
  },
  {
    name: "Arles",
    position: [43.6768, 4.627],
    date: "12 mai 2024",
  },
  {
    name: "Montpellier",
    position: [43.6119, 3.8772],
    date: "13 mai 2024",
  },
  {
    name: "Bastia",
    position: [42.6973, 9.4509],
    date: "14 mai 2024",
  },
  {
    name: "Perpignan",
    position: [42.6886, 2.8948],
    date: "15 mai 2024",
  },
  {
    name: "Carcassonne",
    position: [43.213, 2.351],
    date: "16 mai 2024",
  },
  {
    name: "Toulouse",
    position: [43.6047, 1.4442],
    date: "17 mai 2024",
  },
  {
    name: "Auch",
    position: [43.647, 0.585],
    date: "18 mai 2024",
  },
  {
    name: "Tarbes",
    position: [43.232, 0.073],
    date: "19 mai 2024",
  },
  {
    name: "Pau",
    position: [43.295, -0.368],
    date: "20 mai 2024",
  },
  {
    name: "Périgueux",
    position: [45.184, 0.721],
    date: "22 mai 2024",
  },
  {
    name: "Bordeaux",
    position: [44.8378, -0.5792],
    date: "23 mai 2024",
  },
  {
    name: "Angoulême",
    position: [45.6484, 0.1563],
    date: "24 mai 2024",
  },
  {
    name: "Grand Poitiers-Futuroscope",
    position: [46.5802, 0.3404],
    date: "25 mai 2024",
  },
  {
    name: "Châteauroux",
    position: [46.8125, 1.6875],
    date: "27 mai 2024",
  },
  {
    name: "Angers",
    position: [47.4784, -0.5632],
    date: "28 mai 2024",
  },
  {
    name: "Laval",
    position: [48.0706, -0.7703],
    date: "29 mai 2024",
  },
  {
    name: "Caen",
    position: [49.1829, -0.3707],
    date: "30 mai 2024",
  },
  {
    name: "Le Mont-Saint-Michel",
    position: [48.635, -1.511],
    date: "31 mai 2024",
  },
  {
    name: "Rennes",
    position: [48.1173, -1.6778],
    date: "1 juin 2024",
  },
  {
    name: "Niort",
    position: [46.3237, -0.4587],
    date: "2 juin 2024",
  },
  {
    name: "Les Sables-d'Olonne",
    position: [46.4977, -1.784],
    date: "4 juin 2024",
  },
  {
    name: "La Baule-Escoublac",
    position: [47.2925, -2.3646],
    date: "5 juin 2024",
  },
  {
    name: "Vannes",
    position: [47.6582, -2.7608],
    date: "6 juin 2024",
  },
  {
    name: "Brest",
    position: [48.3904, -4.4861],
    date: "7 juin 2024",
  },
  {
    name: "Cayenne",
    position: [4.9224, -52.3135],
    date: "9 juin 2024",
  },
  {
    name: "Nouvelle-Calédonie",
    position: [-20.9043, 165.618],
    date: "11 juin 2024",
  },
  {
    name: "Saint-Denis (La Réunion)",
    position: [-20.8823, 55.4504],
    date: "12 juin 2024",
  },
  {
    name: "Papeete",
    position: [-17.5516, -149.5585],
    date: "13 juin 2024",
  },
  {
    name: "Baie-Mahault (Guadeloupe)",
    position: [16.2674, -61.5839],
    date: "15 juin 2024",
  },
  {
    name: "Fort-de-France",
    position: [14.6161, -61.0588],
    date: "17 juin 2024",
  },
  {
    name: "Nice",
    position: [43.7102, 7.262],
    date: "18 juin 2024",
  },
  {
    name: "Avignon",
    position: [43.9493, 4.8055],
    date: "19 juin 2024",
  },
  {
    name: "Valence",
    position: [44.9334, 4.8924],
    date: "20 juin 2024",
  },
  {
    name: "Vichy",
    position: [46.1284, 3.426],
    date: "21 juin 2024",
  },
  {
    name: "Saint-Étienne",
    position: [45.4397, 4.3872],
    date: "22 juin 2024",
  },
  {
    name: "Chamonix-Mont-Blanc",
    position: [45.9237, 6.8694],
    date: "23 juin 2024",
  },
  {
    name: "Besançon",
    position: [47.2378, 6.0241],
    date: "25 juin 2024",
  },
  {
    name: "Strasbourg",
    position: [48.5734, 7.7521],
    date: "26 juin 2024",
  },
  {
    name: "Metz",
    position: [49.1193, 6.1757],
    date: "27 juin 2024",
  },
  {
    name: "Saint-Dizier",
    position: [48.636, 4.9482],
    date: "28 juin 2024",
  },
  {
    name: "Verdun",
    position: [49.1594, 5.3823],
    date: "29 juin 2024",
  },
  {
    name: "Reims",
    position: [49.2583, 4.0317],
    date: "30 juin 2024",
  },
  {
    name: "Lille",
    position: [50.6292, 3.0573],
    date: "2 juillet 2024",
  },
  {
    name: "Lens-Liévin",
    position: [50.4317, 2.7933],
    date: "3 juillet 2024",
  },
  {
    name: "Amiens",
    position: [49.895, 2.3023],
    date: "4 juillet 2024",
  },
  {
    name: "Le Havre",
    position: [49.4944, 0.1079],
    date: "5 juillet 2024",
  },
  {
    name: "Vernon",
    position: [49.0932, 1.4639],
    date: "6 juillet 2024",
  },
  {
    name: "Chartres",
    position: [48.4584, 1.5044],
    date: "7 juillet 2024",
  },
  {
    name: "Blois",
    position: [47.5861, 1.3359],
    date: "8 juillet 2024",
  },
  {
    name: "Orléans",
    position: [47.9024, 1.9093],
    date: "10 juillet 2024",
  },
  {
    name: "Auxerre",
    position: [47.7982, 3.5674],
    date: "11 juillet 2024",
  },
  {
    name: "Dijon",
    position: [47.322, 5.0415],
    date: "12 juillet 2024",
  },
  {
    name: "Troyes",
    position: [48.2973, 4.0744],
    date: "13 juillet 2024",
  },
  {
    name: "Paris",
    position: [48.8566, 2.3522],
    date: "14 juillet 2024",
  },
  {
    name: "Paris",
    position: [48.8566, 2.3522],
    date: "15 juillet 2024",
  },
  {
    name: "Saint-Quentin",
    position: [49.8483, 3.2872],
    date: "17 juillet 2024",
  },
  {
    name: "Beauvais",
    position: [49.4299, 2.0951],
    date: "18 juillet 2024",
  },
  {
    name: "Soisy-sous-Montmorency",
    position: [48.9861, 2.2994],
    date: "19 juillet 2024",
  },
  {
    name: "Meaux",
    position: [48.9602, 2.8773],
    date: "20 juillet 2024",
  },
  {
    name: "Créteil",
    position: [48.7904, 2.4556],
    date: "21 juillet 2024",
  },
  {
    name: "Evry-Courcouronnes",
    position: [48.629, 2.441],
    date: "22 juillet 2024",
  },
  {
    name: "Versailles",
    position: [48.8049, 2.1204],
    date: "23 juillet 2024",
  },
  {
    name: "Nanterre",
    position: [48.8924, 2.2066],
    date: "24 juillet 2024",
  },
  {
    name: "Seine-Saint-Denis",
    position: [48.9333, 2.3667],
    date: "25 juillet 2024",
  },
  {
    name: "Seine-Saint-Denis et Paris",
    position: [48.8566, 2.3522],
    date: "26 juillet 2024",
  },
];

export default flameLocations;
