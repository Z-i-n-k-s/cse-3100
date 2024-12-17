import { useEffect, useState } from 'react';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Peterbald' },
  { name: 'Mittens', age: '2', breed: 'Birman' },
  { name: 'Shadow', age: '1', breed: 'Persian' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(featuredCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = featuredCats.map((cat, index) => ({
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

  return (
    <>
      <section className="text-center mt-4" style={{ padding: '1em', backgroundColor: '#ffefe0', borderRadius: '8px' }}>
        <h2>Welcome to Purrfect Adoption</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', fontSize: '1rem', color: '#555' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lectus eu lorem bibendum, sed facilisis orci tincidunt.
        </p>
      </section>

      <section className="mt-5">
        <h2 style={{ color: '#333' }}>Featured Cats</h2>
        <div className="mt-2 row g-4" id="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card" style={{ borderRadius: '8px', overflow: 'hidden' }}>
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
                    display: 'block',
                  }}
                />

                <div className="cat-info" style={{ padding: '1em', textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5em', color: '#333' }}>{cat.name}</h3>
                  <p style={{ marginBottom: '0.25em', fontSize: '0.9rem', color: '#555' }}>Breed: {cat.breed}</p>
                  <p style={{ marginBottom: '0', fontSize: '0.9rem', color: '#555' }}>Age: {cat.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
