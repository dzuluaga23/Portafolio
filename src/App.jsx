import Navbar from './components/Navbar/Navbar'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { navigation } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = navigation.map((item) => item.id)

export default function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <>
      <Navbar activeId={activeId} />
      <ScrollIndicator activeId={activeId} />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
