import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Bengal' },
  { name: 'Mittens', age: '2', breed: 'Persian' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Sphynx' },
  { name: 'Luna', age: '4', breed: 'Peterbald' },
  { name: 'Simba', age: '2', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter((cat) => {
    const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
    const matchesName = cat.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesBreed && matchesName;
  });

  const breeds = ['All', ...new Set(availableCats.map((cat) => cat.breed))];

  return (
    <section className="text-center mt-4" style={{ padding: '1em', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ fontSize: '2rem', color: '#333' }}>Available Cats</h2>
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5em' }}>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4" style={{ display: 'flex', justifyContent: 'center', gap: '1em' }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            width: '200px',
          }}
        />
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{
            padding: '0.5em',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '1rem',
            width: '200px',
          }}
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 row g-4" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div
                className="cat-card"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid"
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderBottom: '1px solid #ddd',
                  }}
                />
                <div
                  className="cat-info"
                  style={{
                    padding: '1em',
                    backgroundColor: '#f8f9fa',
                    textAlign: 'left',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.5em',
                      color: '#333',
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      marginBottom: '0.25em',
                      fontSize: '0.9rem',
                      color: '#555',
                    }}
                  >
                    Age: {cat.age}
                  </p>
                  <p
                    style={{
                      marginBottom: '0',
                      fontSize: '0.9rem',
                      color: '#555',
                    }}
                  >
                    Breed: {cat.breed}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: '#888', fontSize: '1rem', marginTop: '2em' }}>No cats found matching your filters.</p>
        )}
      </div>
    </section>
  );
}
