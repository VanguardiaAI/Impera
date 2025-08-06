import './Partners.css'

const Partners = () => {
  const partners = [
    { id: 1, name: 'Microsoft', logo: 'Microsoft' },
    { id: 2, name: 'Apple WATCH', logo: 'WATCH' },
    { id: 3, name: 'Coca-Cola', logo: 'Coca-Cola' },
    { id: 4, name: 'Google', logo: 'Google' },
    { id: 5, name: 'slack', logo: 'slack' }
  ]

  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-logos">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-logo">
              <span>{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners