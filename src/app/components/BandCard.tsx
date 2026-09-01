import { Bands } from '../types/Bands';

interface BandCardProps {
  band: Bands;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="band-card">
      {band.image && (
        <div className="band-image-wrapper">
          <img 
            src={band.image} 
            alt={band.name} 
            className="band-image"
          />
        </div>
      )}

      <h2 className="band-name">{band.name}</h2>
      
      <div className="band-info">
        <strong>รายชื่อสมาชิก:</strong>
        <ul className="band-member-list">
          {band.member.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="band-info"><strong>วันที่เดบิวต์:</strong> {band.debutDate}</p>

      <div className="album-section">
        <p className="band-info"><strong>5. อัลบั้มล่าสุด:</strong> {band.latestAlbum}</p>
        {band.imageAlbum && (
          <div className="album-image-wrapper">
            <img 
              src={band.imageAlbum} 
              alt={`Album ${band.latestAlbum}`} 
              className="album-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}