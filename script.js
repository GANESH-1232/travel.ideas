// Sample destination data
const destinations = [
    {
        id: 1,
        name: 'Taj Mahal',
        region: 'india',
        rating: 5,
        image: 'taj mahal.jpg',
        description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India.',
        transport: {
            public: ['Train from Delhi to Agra', 'Local bus services', 'Auto rickshaws'],
            private: ['Taxi services', 'Private car rental', 'Organized tours']
        }
    },
    {
        id: 2,
        name: 'Statue of Liberty',
        region: 'usa',
        rating: 4,
        image: 'New York City.jpg',
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor.',
        transport: {
            public: ['Subway to Battery Park', 'Ferry service', 'Bus tours'],
            private: ['Taxi', 'Private boat tours', 'Helicopter tours']
        }
    },
    {
        id: 3,
        name: 'Burj Khalifa',
        region: 'dubai',
        rating: 5,
        image: 'Burj Al Arab.jpg',
        description: 'The world\'s tallest building, standing at 828 meters in Dubai, UAE.',
        transport: {
            public: ['Dubai Metro', 'Public buses', 'Water taxi'],
            private: ['Taxi', 'Private car service', 'Organized tours']
        }
    },
    {
        id: 4,
        name: 'Goa Beaches',
        region: 'india',
        rating: 5,
        image: 'goa beaches.jpg',
        description: 'Famous for its pristine beaches, vibrant nightlife, water sports, and Portuguese architecture.',
        transport: {
            public: ['Trains from major cities', 'State buses', 'Local buses'],
            private: ['Taxi services', 'Bike rentals', 'Private car rentals']
        }
    },
    {
        id: 5,
        name: 'Kerala Backwaters',
        region: 'india',
        rating: 5,
        image: 'kerela back waters.jpg',
        description: 'Serene network of lagoons, lakes, and canals parallel to the Arabian Sea coast, famous for houseboats.',
        transport: {
            public: ['State transport buses', 'Ferry services', 'Local boats'],
            private: ['Houseboat rentals', 'Taxi services', 'Private tours']
        }
    },
    {
        id: 6,
        name: 'Kashmir Valley',
        region: 'india',
        rating: 5,
        image: 'Kashmir Valley.jpg',
        description: 'Known as "Paradise on Earth" with stunning landscapes, Dal Lake, and Mughal gardens.',
        transport: {
            public: ['Flights to Srinagar', 'State buses', 'Shared taxis'],
            private: ['Shikara rides', 'Private taxi tours', 'Helicopter services']
        }
    },
    {
        id: 7,
        name: 'Uttarakhand Valley of Flowers',
        region: 'india',
        rating: 4,
        image: 'Uttarakhand Valley of Flower.jpg',
        description: 'UNESCO World Heritage site known for its meadows of endemic alpine flowers and diverse wildlife.',
        transport: {
            public: ['State buses to Govindghat', 'Shared jeeps'],
            private: ['Private taxis', 'Helicopter services', 'Trekking guides']
        }
    },
    {
        id: 8,
        name: 'Rishikesh',
        region: 'india',
        rating: 4,
        image: 'Rishikesh.jpg',
        description: 'Yoga capital of the world, famous for spiritual activities, river rafting, and Beatles Ashram.',
        transport: {
            public: ['Trains to Haridwar', 'State buses', 'Shared autos'],
            private: ['Taxi services', 'Private car rentals', 'Adventure sport shuttles']
        }
    },
    {
        id: 9,
        name: 'Manali',
        region: 'india',
        rating: 5,
        image: 'manali.jpg',
        description: 'Popular hill station known for snow sports, Rohtang Pass, and adventure activities.',
        transport: {
            public: ['Volvo buses from Delhi', 'Local buses', 'Shared taxis'],
            private: ['Private taxi tours', 'Bike rentals', 'Adventure tour services']
        }
    },
    {
        id: 10,
        name: 'Mumbai',
        region: 'india',
        rating: 5,
        image: 'Mumbai.jpg',
        description: 'India\'s financial capital, home to Bollywood, colonial architecture, and vibrant street life.',
        transport: {
            public: ['Local trains', 'BEST buses', 'Metro'],
            private: ['Taxi services', 'Uber/Ola', 'Private car rentals']
        }
    },
    {
        id: 11,
        name: 'Chandigarh',
        region: 'india',
        rating: 4,
        image: 'chandigarh.jpg',
        description: 'India\'s first planned city, known for its architecture, gardens, and quality of life.',
        transport: {
            public: ['CTU buses', 'Auto rickshaws', 'Cycle sharing'],
            private: ['Taxi services', 'Car rentals', 'Bike rentals']
        }
    },
    {
        id: 12,
        name: 'Jodhpur',
        region: 'india',
        rating: 4,
        image: 'Jodhpur.jpg',
        description: 'The Blue City, famous for Mehrangarh Fort, blue houses, and rich Rajasthani culture.',
        transport: {
            public: ['City buses', 'Auto rickshaws', 'Shared taxis'],
            private: ['Private taxis', 'Heritage walk tours', 'Camel safari services']
        }
    },
    {
        id: 13,
        name: 'Ladakh',
        region: 'india',
        rating: 5,
        image: 'Ladakh.jpg',
        description: 'Land of high passes, Buddhist monasteries, and stunning Himalayan landscapes.',
        transport: {
            public: ['Flights to Leh', 'State buses', 'Shared taxis'],
            private: ['Bike rentals', 'Private taxi tours', 'Adventure tour packages']
        }
    },
    {
        id: 14,
        name: 'New York City',
        region: 'usa',
        rating: 5,
        image: 'New York City.jpg',
        description: 'The Big Apple - home to iconic landmarks like Times Square, Central Park, Empire State Building, and Broadway.',
        transport: {
            public: ['Subway system', 'MTA buses', 'Staten Island Ferry', 'Commuter trains (PATH)'],
            private: ['Yellow cabs', 'Ride-sharing services', 'Hop-on-hop-off tours', 'Private car services']
        }
    },
    {
        id: 15,
        name: 'San Francisco',
        region: 'usa',
        rating: 5,
        image: 'San Francisco.jpg',
        description: 'Known for the Golden Gate Bridge, cable cars, Victorian houses, and Silicon Valley.',
        transport: {
            public: ['BART system', 'Muni buses and trains', 'Cable cars', 'Ferry services'],
            private: ['Ride-sharing services', 'Bike rentals', 'Segway tours', 'Hop-on-hop-off buses']
        }
    },
    {
        id: 16,
        name: 'Los Angeles',
        region: 'usa',
        rating: 4,
        image: 'Los Angeles.jpg',
        description: 'Entertainment capital of the world, featuring Hollywood, Beverly Hills, beautiful beaches, and theme parks.',
        transport: {
            public: ['Metro rail and buses', 'DASH buses', 'LAX FlyAway'],
            private: ['Car rentals', 'Ride-sharing services', 'Celebrity home tours', 'Studio tours']
        }
    },
    {
        id: 17,
        name: 'Grand Canyon',
        region: 'usa',
        rating: 5,
        image: 'Grand Canyon.avif',
        description: 'One of the world\'s natural wonders, carved by the Colorado River.',
        transport: {
            public: ['Grand Canyon Railway', 'Park shuttle buses', 'Tour buses from Las Vegas/Phoenix'],
            private: ['Helicopter tours', 'Private guided tours', 'Rental cars', 'Mule rides']
        }
    },
    {
        id: 18,
        name: 'Yellowstone',
        region: 'usa',
        rating: 5,
        image: 'Yellowstone.jpg',
        description: 'America\'s first national park, featuring geothermal features like Old Faithful.',
        transport: {
            public: ['Park shuttle services', 'Guided bus tours', 'Yellowstone Airport shuttles'],
            private: ['Private vehicle tours', 'Guided wildlife tours', 'Snowmobile tours (winter)', 'Rental cars']
        }
    },
    {
        id: 19,
        name: 'Dubai Mall',
        region: 'dubai',
        rating: 5,
        image: 'Dubai Mall.jpg',
        description: 'The world\'s largest shopping mall with over 1,200 retail stores.',
        transport: {
            public: ['Dubai Metro (Red Line)', 'RTA Buses', 'Water Taxi'],
            private: ['Taxi services', 'Hotel shuttles', 'Private car services']
        }
    },
    {
        id: 20,
        name: 'Dubai Aquarium',
        region: 'dubai',
        rating: 5,
        image: 'Dubai Aquarium.jpg',
        description: 'One of the largest suspended aquariums in the world.',
        transport: {
            public: ['Dubai Metro (Red Line)', 'RTA Buses'],
            private: ['Taxi services', 'Tour packages', 'Hotel shuttles']
        }
    },
    {
        id: 21,
        name: 'Dubai Miracle Garden',
        region: 'dubai',
        rating: 4,
        image: 'Dubai Miracle Garden.jpg',
        description: 'The world\'s largest natural flower garden.',
        transport: {
            public: ['RTA Buses', 'Miracle Garden Shuttle'],
            private: ['Taxi services', 'Organized tours', 'Private car services']
        }
    },
    {
        id: 22,
        name: 'Dubai Frame',
        region: 'dubai',
        rating: 4,
        image: 'Dubai Frame.jpg',
        description: 'An architectural landmark offering panoramic views of old and new Dubai.',
        transport: {
            public: ['Dubai Metro (Green Line)', 'RTA Buses'],
            private: ['Taxi services', 'Tour packages', 'Private car services']
        }
    },
    {
        id: 23,
        name: 'The Dubai Fountain',
        region: 'dubai',
        rating: 5,
        image: 'The Dubai Fountain.jpg',
        description: 'The world\'s largest choreographed fountain system.',
        transport: {
            public: ['Dubai Metro (Red Line)', 'RTA Buses', 'Water Taxi'],
            private: ['Taxi services', 'Dubai Fountain Lake Ride', 'Private tours']
        }
    },
    {
        id: 24,
        name: 'Burj Al Arab',
        region: 'dubai',
        rating: 5,
        image: 'Burj Al Arab.jpg',
        description: 'The world\'s first seven-star hotel, an iconic sail-shaped building.',
        transport: {
            public: ['RTA Buses', 'Water Taxi'],
            private: ['Hotel luxury transfers', 'Helicopter transfers', 'Private car services']
        }
    }
];

// Add fallback image URL
const FALLBACK_IMAGE = 'https://via.placeholder.com/400x300?text=No+Image+Available';

// Initialize variables
let currentFilter = 'all';
let currentRating = 0;
let searchInput;

// Filter destinations based on current filters
function getFilteredDestinations() {
    return destinations.filter(destination => {
        const matchesRegion = currentFilter === 'all' || destination.region === currentFilter;
        const matchesRating = destination.rating >= currentRating;
        const matchesSearch = destination.name.toLowerCase().includes(searchInput.value.toLowerCase());
        return matchesRegion && matchesRating && matchesSearch;
    });
}

// Render destination cards
function renderDestinations() {
    const container = document.querySelector('.destinations-grid');
    container.innerHTML = '';

    getFilteredDestinations().forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" 
                 alt="${destination.name}" 
                 class="destination-image"
                 onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';">
            <div class="destination-info">
                <h3 class="destination-name">${destination.name}</h3>
                <div class="destination-rating">
                    ${getStarRating(destination.rating)}
                </div>
                <div class="destination-region">${destination.region.toUpperCase()}</div>
            </div>
        `;
        card.addEventListener('click', () => showDestinationDetails(destination));
        container.appendChild(card);
    });
}

// Generate star rating HTML
function getStarRating(rating) {
    return Array(5).fill('').map((_, index) => 
        `<i class="fas fa-star ${index < rating ? 'active' : ''}"></i>`
    ).join('');
}

// Show destination details in modal
function showDestinationDetails(destination) {
    const modal = document.getElementById('destinationModal');
    const modalContent = modal.querySelector('.modal-body');
    
    modalContent.innerHTML = `
        <img src="${destination.image}" 
             alt="${destination.name}" 
             onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
             style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
        <h2>${destination.name}</h2>
        <div class="destination-rating">${getStarRating(destination.rating)}</div>
        <p>${destination.description}</p>
        
        <div class="transport-info">
            <h4>Public Transport</h4>
            <ul>${destination.transport.public.map(t => `<li>${t}</li>`).join('')}</ul>
            
            <h4>Private Transport</h4>
            <ul>${destination.transport.private.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize searchInput
    searchInput = document.getElementById('searchInput');
    
    // Region filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.region;
            renderDestinations();
        });
    });

    // Star rating filter
    document.querySelectorAll('.star-filter i').forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            currentRating = currentRating === rating ? 0 : rating;
            
            document.querySelectorAll('.star-filter i').forEach((s, index) => {
                s.classList.toggle('active', index < currentRating);
            });
            
            renderDestinations();
        });
    });

    // Search input
    searchInput.addEventListener('input', () => {
        renderDestinations();
    });

    // Modal close button
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('destinationModal').style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('destinationModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial render
    renderDestinations();
}); 
