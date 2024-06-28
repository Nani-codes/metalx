export const mockItems = [
  {
    id: 1,
    name: "Used Lathe Machine",
    description: "A high-quality lathe machine in good condition",
    price: 5000,
    category: "Machinery",
    image: {
      data: [
        {
          attributes: {
            url: "https://img.freepik.com/free-photo/production-process-details_140725-8069.jpg?semt=ais_user",
          },
        },
      ],
    },
  },
  {
    id: 2,
    name: "Welding Equipment",
    description: "Advanced welding equipment with all necessary accessories",
    price: 2000,
    category: "Tools",
    image: {
      data: [
        {
          attributes: {
            url: "welding-equipment.jpg",
          },
        },
      ],
    },
  },
  {
    id: 3,
    name: "CNC Machine",
    description: "Precision CNC machine",
    price: 12000,
    category: "Machinery",
    image: {
      data: [
        {
          attributes: {
            url: "cnc-machine.jpg",
          },
        },
      ],
    },
  },
  {
    id: 4,
    name: "Drill Press",
    description: "Industrial drill press",
    price: 1500,
    category: "Tools",
    image: {
      data: [
        {
          attributes: {
            url: "drill-press.jpg",
          },
        },
      ],
    },
  },
  {
    id: 5,
    name: "Saw Machine",
    description: "High-speed saw machine for cutting metal",
    price: 8000,
    category: "Machinery",
    image: {
      data: [
        {
          attributes: {
            url: "saw-machine.jpg",
          },
        },
      ],
    },
  },
  {
    id: 6,
    name: "Pneumatic Drill",
    description: "Heavy-duty pneumatic drill for industrial use",
    price: 3000,
    category: "Tools",
    image: {
      data: [
        {
          attributes: {
            url: "pneumatic-drill.jpg",
          },
        },
      ],
    },
  },
  {
    id: 7,
    name: "Metal Cutting Machine",
    description: "Advanced metal cutting machine with precision control",
    price: 15000,
    category: "Machinery",
    image: {
      data: [
        {
          attributes: {
            url: "metal-cutting-machine.jpg",
          },
        },
      ],
    },
  },
  {
    id: 8,
    name: "Wrench Set",
    description: "Complete set of wrenches for industrial use",
    price: 1000,
    category: "Tools",
    image: {
      data: [
        {
          attributes: {
            url: "wrench-set.jpg",
          },
        },
      ],
    },
  },
  // Add more mock items as needed
];

export const mockAuctions = [
  {
    id: 1,
    name: "Heavy Duty Lathe Machine",
    description: "High-quality lathe machine for industrial use",
    startingPrice: 3000,
    category: "Machinery",
    highestBid: 3500,
  },
  {
    id: 2,
    name: "Precision Welding Equipment",
    description: "Top-notch welding equipment for precision work",
    startingPrice: 1500,
    category: "Tools",
    highestBid: 1800,
  },
  // Add more mock auctions as needed
];
export const mockExperts = [
  {
    id: 1,
    name: "John Doe",
    expertise: "Boiler Plate Inspection",
    experience: "10 years",
    rate: 50,
    description: "Experienced in inspecting and operating boiler plates.",
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Welding Operations",
    experience: "8 years",
    rate: 45,
    description: "Expert in precision welding and machine operations.",
  },
  // Add more mock experts as needed
];
export const mockUserProfile = {
  boughtItems: [
    { id: 1, name: 'Lathe Machine', price: 1500, date: '2024-05-12' },
    { id: 2, name: 'Drilling Machine', price: 750, date: '2024-05-10' },
  ],
  soldItems: [
    { id: 3, name: 'Milling Machine', price: 1800, date: '2024-05-11' },
  ],
  hiredExperts: [
    { id: 4, name: 'John Doe', expertise: 'CNC Operation', rate: 50, date: '2024-05-13' },
  ],
};

export const mockCart = [
  { id: 5, name: 'Grinding Machine', price: 1200 },
  { id: 6, name: 'Welding Machine', price: 800 },
];