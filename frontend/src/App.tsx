import { Scans } from '@modules/Scan/Scans'
import { ProjectWrapper } from './context/ProjectWrapper'

function App() {

  return (
    <ProjectWrapper>
      <div className="w-full h-screen">
        <Scans />
      </div>
    </ProjectWrapper>
  )
}

export default App
