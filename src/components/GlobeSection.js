// src/components/GlobeSection.js
import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeSection = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  // Load country polygons (optional but elegant)
  useEffect(() => {
    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then(res => res.json())
      .then(worldData => {
        const { features } = require('topojson-client').feature(
          worldData,
          worldData.objects.countries
        );
        setCountries({ features });
      });
  }, []);

  return (
    <div style={{ height: '600px', backgroundColor: '#fdf7f0', padding: '2rem 0' }}>
      <h3 className="text-center mb-4" style={{ color: '#5c4033', fontFamily: 'Playfair Display' }}>
        Explore Global Trade in 3D
      </h3>
      <div style={{ height: '100%', width: '100%' }}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="#fdf7f0"
          showGlobe
          showGraticules
          polygonsData={countries.features}
          polygonCapColor={() => 'rgba(139, 94, 60, 0.4)'}
          polygonSideColor={() => 'rgba(139, 94, 60, 0.2)'}
          polygonStrokeColor={() => '#8B5E3C'}
          polygonLabel={({ properties: d }) => `${d.ADMIN}`}
          onPolygonHover={(hoverD) => {
            document.body.style.cursor = hoverD ? 'pointer' : '';
          }}
        />
      </div>
    </div>
  );
};

export default GlobeSection;
