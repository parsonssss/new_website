export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl: string;
  author: string;
  publishDate: string;
  isFeatured: boolean;
}

export const categories = [
  'Technology',
  'World',
  'Business',
  'Sports',
  'Entertainment',
  'Science',
  'Health'
];

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "New Breakthrough in Quantum Computing Achieved",
    summary: "Scientists have made a significant breakthrough in quantum computing, achieving stable qubits at room temperature.",
    content: "In a groundbreaking development that could revolutionize the field of quantum computing, researchers at the Quantum Technology Institute have successfully created stable quantum bits (qubits) that can operate at room temperature. This achievement removes one of the biggest obstacles to widespread quantum computing adoption, as previous systems required extreme cooling to near absolute zero temperatures. The new technology, based on synthetic diamond materials with nitrogen-vacancy centers, could lead to quantum computers that are smaller, more energy-efficient, and accessible to a broader range of applications. Industry experts predict this breakthrough could accelerate the timeline for practical quantum computing applications by at least five years.",
    category: "Technology",
    imageUrl: "/images/quantum-computing.jpg",
    author: "Dr. Sarah Chen",
    publishDate: "2024-05-14",
    isFeatured: true
  },
  {
    id: 2,
    title: "Global Economic Summit Concludes with New Trade Agreements",
    summary: "World leaders reached consensus on several key trade agreements at the annual Global Economic Summit.",
    content: "The annual Global Economic Summit concluded yesterday with several major trade agreements between participating nations. The week-long event, attended by representatives from 42 countries, focused on addressing supply chain disruptions and fostering more resilient global trade networks. A highlight of the summit was the signing of the International Digital Commerce Treaty, which establishes standards for cross-border digital transactions and data protection. Additionally, a new climate finance package was agreed upon, allocating $50 billion toward green energy transitions in developing economies. Market analysts expect these agreements to stabilize international markets and potentially boost global GDP by an estimated 0.3% over the next two years.",
    category: "Business",
    imageUrl: "/images/economic-summit.jpg",
    author: "James Wilson",
    publishDate: "2024-05-13",
    isFeatured: false
  },
  {
    id: 3,
    title: "Record-Breaking Performance at World Athletics Championship",
    summary: "Athlete Liu Wei broke the world record in the 400m hurdles with an astonishing performance.",
    content: "Chinese athlete Liu Wei shattered the world record in the 400-meter hurdles at the World Athletics Championship yesterday, finishing with a time of 45.82 seconds. The previous record, which had stood for seven years, was broken by a margin of 0.14 seconds. Wei's performance was characterized by a perfectly executed race strategy that saw him maintain a consistent pace throughout before accelerating in the final 100 meters. 'I've been visualizing this moment for years,' Wei said after the race. 'Everything came together perfectly today.' Wei's coach attributed the record-breaking performance to a new training regimen focused on improving stride efficiency and hurdle technique. The victory establishes Wei as the favorite for the upcoming Olympic Games.",
    category: "Sports",
    imageUrl: "/images/athletics-championship.jpg",
    author: "Carlos Mendez",
    publishDate: "2024-05-12",
    isFeatured: true
  },
  {
    id: 4,
    title: "New Exoplanet Discovered with Potential for Life",
    summary: "Astronomers have identified a new exoplanet in the habitable zone with conditions that could support life.",
    content: "Astronomers using the James Webb Space Telescope have discovered a new exoplanet orbiting a star 40 light-years from Earth. The planet, designated Kepler-742b, orbits within the habitable zone of its star and shows evidence of water vapor in its atmosphere. 'This is one of the most promising candidates for potentially habitable worlds we've found so far,' said Dr. Elena Rodriguez, who led the research team. Initial spectroscopic analysis suggests the planet has a rocky composition similar to Earth and an atmosphere that could protect the surface from harmful stellar radiation. The discovery adds to the growing list of potentially habitable exoplanets and will be a prime target for further observation with next-generation telescopes currently under development.",
    category: "Science",
    imageUrl: "/images/exoplanet-discovery.jpg",
    author: "Dr. Michael Wong",
    publishDate: "2024-05-11",
    isFeatured: false
  },
  {
    id: 5,
    title: "Revolutionary Treatment for Alzheimer's Shows Promise in Clinical Trials",
    summary: "A new therapeutic approach targeting protein misfolding has shown significant results in early clinical trials.",
    content: "A novel treatment for Alzheimer's disease has shown remarkable results in Phase II clinical trials, potentially offering hope to millions of patients worldwide. The therapy, developed by NeuraTech Pharmaceuticals, uses a combination of monoclonal antibodies and small molecule compounds to target and clear misfolded proteins in the brain before they can form damaging plaques. In the trial involving 240 patients with early-stage Alzheimer's, those receiving the treatment showed a 47% reduction in cognitive decline compared to the control group over an 18-month period. 'These results exceed our expectations,' said Dr. Robert Johnson, lead researcher for the trial. 'If these outcomes can be replicated in larger studies, this could represent the most significant advancement in Alzheimer's treatment in decades.' Phase III trials are now being planned with an expanded patient population.",
    category: "Health",
    imageUrl: "/images/alzheimers-research.jpg",
    author: "Dr. Lisa Patel",
    publishDate: "2024-05-10",
    isFeatured: false
  },
  {
    id: 6,
    title: "Major Film Studio Announces New Cinematic Universe",
    summary: "Horizon Pictures unveiled plans for an ambitious new franchise spanning multiple films and streaming series.",
    content: "Horizon Pictures has announced plans for an expansive new cinematic universe based on the popular 'Chronicles of Eldoria' fantasy book series. The studio has committed to a slate of six films and three streaming series over the next seven years, with a combined budget exceeding $1 billion. The first film, 'Eldoria: The Awakening,' is scheduled to begin production next month with acclaimed director Sofia Reynolds at the helm. Several high-profile actors have already been cast, including Academy Award winner Daniel Martinez as the protagonist. 'We're creating something truly unprecedented in scope and ambition,' said studio executive Victoria Wu. 'This universe will allow storytelling across different timelines and dimensions while maintaining a cohesive narrative.' The announcement sparked immediate interest on social media, with the official teaser trailer accumulating over 50 million views within 24 hours.",
    category: "Entertainment",
    imageUrl: "/images/film-studio-announcement.jpg",
    author: "Taylor Richards",
    publishDate: "2024-05-09",
    isFeatured: false
  },
  {
    id: 7,
    title: "Diplomatic Breakthrough in Middle East Peace Talks",
    summary: "Representatives from opposing nations reached a preliminary agreement after marathon negotiations.",
    content: "After ten days of intensive negotiations, diplomats announced a significant breakthrough in the long-standing regional conflict. The preliminary agreement, brokered with assistance from United Nations mediators, establishes a framework for addressing the most contentious issues including border disputes, resource sharing, and security arrangements. 'This represents a crucial first step toward lasting peace,' said UN Special Envoy Maria Gonzalez. 'All parties have demonstrated remarkable commitment to finding common ground.' The agreement includes provisions for a phased implementation over 24 months, with international monitoring mechanisms to ensure compliance. While many challenges remain, analysts view this development as the most promising diplomatic progress in the region in over a decade. Leaders from both nations are expected to meet next month to formalize the preliminary terms into a more comprehensive accord.",
    category: "World",
    imageUrl: "/images/peace-talks.jpg",
    author: "Ahmed Farid",
    publishDate: "2024-05-08",
    isFeatured: true
  },
  {
    id: 8,
    title: "Revolutionary AI System Can Diagnose Multiple Diseases from Single Blood Sample",
    summary: "New artificial intelligence platform shows unprecedented accuracy in detecting various conditions simultaneously.",
    content: "A team of researchers at the Medical AI Institute has developed a revolutionary diagnostic system capable of identifying over 50 different diseases from a single blood sample. The system, named 'OmniDiagnost,' combines advanced machine learning algorithms with novel biochemical sensors to detect subtle patterns of biomarkers associated with various conditions, from cancers to autoimmune disorders and infectious diseases. In validation studies involving over 10,000 samples, the system demonstrated 94% accuracy across all conditions tested, outperforming traditional diagnostic methods that typically require multiple specialized tests. 'This could fundamentally transform diagnostic medicine,' said Professor Jiang Wei, lead developer of the system. 'We're essentially creating a universal health screening tool that requires minimal sample volume and delivers results within minutes.' The technology is expected to be particularly valuable in resource-limited settings where access to comprehensive diagnostic facilities is limited.",
    category: "Technology",
    imageUrl: "/images/ai-diagnostics.jpg",
    author: "Dr. Priya Sharma",
    publishDate: "2024-05-07",
    isFeatured: false
  },
  {
    id: 9,
    title: "Major Renewable Energy Project Launches in Desert Region",
    summary: "The world's largest combined solar and wind facility has begun operations, powering three million homes.",
    content: "The ambitious Desert Solar and Wind Complex has officially begun operations, marking a significant milestone in renewable energy development. Covering over 40 square kilometers of previously unused desert terrain, the facility combines 7,000 acres of solar panels with 400 advanced wind turbines to generate 4.5 gigawatts of clean electricity. The project, which took five years to complete at a cost of $8.7 billion, is expected to prevent 12 million tons of carbon emissions annually compared to equivalent fossil fuel generation. 'This represents the future of energy production,' said Energy Minister Fatima Al-Mansoori at the opening ceremony. 'We're demonstrating that renewable energy can be deployed at massive scales to meet growing demand while addressing climate challenges.' The complex employs an innovative grid stabilization system that ensures consistent power output despite the variable nature of wind and solar resources. Local communities will benefit from 2,500 permanent jobs created for operation and maintenance.",
    category: "Science",
    imageUrl: "/images/renewable-energy.jpg",
    author: "Thomas Greene",
    publishDate: "2024-05-06",
    isFeatured: false
  },
  {
    id: 10,
    title: "Global Tech Conference Showcases Next-Generation Devices",
    summary: "Industry leaders unveiled innovative consumer technologies expected to reshape the market.",
    content: "The annual Global Technology Showcase opened yesterday with several major product announcements from industry leaders. Highlights included a smartphone with a fully functional folding display that can transform from phone to tablet size, augmented reality glasses with all-day battery life and natural field of view, and the first commercially viable solid-state battery technology promising to double electric vehicle ranges while reducing charging time to under 10 minutes. 'We're seeing an unprecedented convergence of materials science, artificial intelligence, and engineering that's enabling entirely new product categories,' said technology analyst Raj Patel. Particularly notable was the emphasis on sustainability, with most manufacturers highlighting their use of recycled materials and energy-efficient manufacturing processes. The four-day conference is expected to draw over 150,000 attendees and will feature keynote presentations from 25 technology CEOs and founders.",
    category: "Technology",
    imageUrl: "/images/tech-conference.jpg",
    author: "Emma Johnson",
    publishDate: "2024-05-05",
    isFeatured: false
  }
]; 