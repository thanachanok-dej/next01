import { Bands } from '../types/Bands';

interface BandCardProps {
  band: Bands;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="band-card">import React from 'react';
import { Bands } from '../types/Bands';

interface BandCardProps {
  band: Bands;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="band-card">
      <div>
        <div className="band-header">
          <div className="band-cover-wrapper">
            {band.image && (
              <img src={band.image} alt={band.name} className="band-cover-img" />
            )}

            {/* ปรับ class ตรงนี้ให้ตรงกับ CSS เพื่อให้แผ่นเสียงเด้งได้ */}
            <div className="classic-vinyl-disc">
              <div className="vinyl-center-label"></div>
            </div>
          </div>

          <div className="band-title-area">
            <h2>{band.name}</h2>
            <div className="band-meta">
              <span>เดบิวต์: {band.debutDate}</span>
              <span>สมาชิกทั้งหมด: {band.memberCount} คน</span>
            </div>
          </div>
        </div>

        <div className="member-section-title">MEMBERS</div>
        <div className="member-chip-list">
          {band.member.map((m, index) => (
            <div key={index} className="member-chip">
              {/* รูปสมาชิกขยายใหญ่ขึ้นใน CSS */}
              <img src={m.image} alt={m.name} className="member-chip-img" />
              <div className="member-chip-info">
                <span className="member-chip-name">{m.name}</span>
                <span className="member-chip-role">{m.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="album-bar">
        {band.imageAlbum && (
          <img src={band.imageAlbum} alt={band.latestAlbum} className="album-bar-img" />
        )}
        <div className="album-bar-text">
          <span className="album-bar-label">LATEST ALBUM</span>
          <span className="album-bar-title">{band.latestAlbum}</span>
        </div>
      </div>
    </div>
  );
}
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
