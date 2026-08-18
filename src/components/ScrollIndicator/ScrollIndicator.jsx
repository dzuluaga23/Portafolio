import { navigation } from '../../data/navigation'
import './ScrollIndicator.css'

export default function ScrollIndicator({ activeId }) {
  const items = navigation.filter((item) => item.id !== 'inicio')
  const activeIndex = items.findIndex((item) => item.id === activeId)

  return (
    <aside className="scroll-indicator" aria-hidden="true">
      <div className="scroll-indicator__track">
        {items.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`scroll-indicator__item ${activeId === item.id ? 'is-active' : ''}`}
          >
            <span className="scroll-indicator__index mono">{item.index}</span>
            <span className="scroll-indicator__label">{item.label}</span>
            <span className="scroll-indicator__dot" />
          </a>
        ))}
        <div
          className="scroll-indicator__line"
          style={{
            transform: `scaleY(${activeIndex >= 0 ? (activeIndex + 1) / items.length : 0})`,
          }}
        />
      </div>
    </aside>
  )
}
