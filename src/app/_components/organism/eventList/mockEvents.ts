const facilitiesList = [
  ["Free WiFi", "Parking", "Air Conditioning", "VIP Lounge"],
  ["Catering", "Networking Lounge", "Projectors", "VIP Access"],
  ["Live Band", "Food Stalls", "Merch Stands", "Outdoor Seating"],
  ["Guided Tours", "Workshops", "Exclusive Merchandise"],
  ["Investor Meetups", "Live Demos", "Networking"],
  ["VR Stations", "Esports Tournaments", "Exclusive Releases"],
];

const eventNames = [
  "Tech Summit",
  "Business Forum",
  "Startup Pitch Night",
  "Music Festival",
  "Art & Culture Exhibition",
  "Gaming Expo",
  "Film Premiere",
  "Fashion Week",
  "Food Carnival",
  "Health & Wellness Expo",
  "Marathon Event",
  "Charity Gala",
  "AI Conference",
  "Cybersecurity Summit",
  "Sports Convention",
  "Travel Expo",
  "E-commerce Meet",
  "Photography Workshop",
  "Space Exploration Talk",
  "Fintech Summit",
];

const generateMockEvents = (count = 100) => {
  const mockEvents = [];

  for (let i = 1; i <= count; i++) {
    const randomFacilities = facilitiesList[i % facilitiesList.length];
    const randomName = `${eventNames[i % eventNames.length]} ${2025 + (i % 3)}`;

    mockEvents.push({
      src: `/images/img-${(i % 4) + 1}.png`,
      name: randomName,
      facilities: randomFacilities,
      distance: `${Math.floor(Math.random() * 10) + 1}km from city center`,
      reviews: Math.floor(Math.random() * 500) + 50,
      ratings: (Math.random() * 2 + 7).toFixed(1), // Between 7.0 and 9.9
      price: Math.floor(Math.random() * 15000) + 10000, // Between 10,000 - 25,000
    });
  }

  return mockEvents;
};

export const mockEventDetailsList = generateMockEvents(100);
