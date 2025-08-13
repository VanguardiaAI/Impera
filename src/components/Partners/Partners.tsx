import './Partners.css'

const Partners = () => {
  const partners = [
    { id: 1, name: 'Microsoft', logo: '/companies_icons/microsoft.png' },
    { id: 2, name: 'Apple Watch', logo: '/companies_icons/applewatch.png' },
    { id: 3, name: 'Coca-Cola', logo: '/companies_icons/cocacola.png' },
    { id: 4, name: 'Google', logo: '/companies_icons/google.png' },
    { id: 5, name: 'Slack', logo: '/companies_icons/slack.png' }
  ]

  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-logos">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-logo">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners