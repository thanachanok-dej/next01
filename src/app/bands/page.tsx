import BandCard from '../components/BandCard';
import { Bandsdata } from '../data/bandsdata';

export default function BandsPage() {
  return (
    <div className="band-container">
      <h1 className="band-title">Favorite Music Band</h1>

      <div className="band-grid">
        {Bandsdata.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
}