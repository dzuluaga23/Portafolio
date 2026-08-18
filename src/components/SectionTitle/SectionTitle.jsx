import './SectionTitle.css'

export default function SectionTitle({ index, eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">
        {index && <span className="section-title__index">{index}</span>}
        {eyebrow}
      </span>
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  )
}
