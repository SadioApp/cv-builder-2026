import { useState } from 'react'
import ControlPanel from './components/ControlPanel'
import Preview from './components/Preview'
import Modal from './components/Modal'

function App() {
  const [formData, setFormData] = useState({
    personal: {
      fullName: 'John Doe',
      title: 'Software Engineer',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      address: 'San Francisco, CA',
      summary: 'Passionate software engineer with 5+ years of experience in building scalable web applications. Expert in React, Node.js, and Cloud Architecture. Committed to writing clean, maintainable code and mentoring junior developers.',
      photo: null
    },
    experiences: [
      {
        id: 1,
        role: 'Senior Frontend Developer',
        company: 'Tech Innovations Inc.',
        date: '2021 - Present',
        description: 'Leading the frontend team in rebuilding the core product dashboard using React and TypeScript. Improved load times by 40% and established a new design system.'
      },
      {
        id: 2,
        role: 'Web Developer',
        company: 'Creative Agency',
        date: '2019 - 2021',
        description: 'Collaborated with designers to deliver pixel-perfect responsive websites for diverse clients. Implemented complex animations and interactive features.'
      }
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'Git', 'Agile']
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen bg-slate-100 text-slate-900 font-sans overflow-x-hidden print:h-auto print:overflow-visible print:block">

      {/* Control Panel - Left Side */}
      <div className="w-full lg:w-[40%] xl:w-[35%] bg-white border-r border-slate-200 shadow-xl z-20 print:hidden relative lg:h-full lg:overflow-y-auto scrollbar-hide">
        <ControlPanel
          formData={formData}
          setFormData={setFormData}
          onFinalize={() => setIsModalOpen(true)}
        />
      </div>

      {/* Preview - Right Side */}
      <div className="w-full lg:w-[60%] xl:w-[65%] bg-slate-100/50 p-4 md:p-8 lg:p-12 lg:h-full lg:overflow-y-auto flex items-start justify-center print:p-0 print:m-0 print:w-full print:h-auto print:overflow-visible print:block">
        <div className="w-full flex justify-center transform origin-top transition-transform duration-300 scale-100 lg:scale-[0.85] xl:scale-100 print:scale-100 print:transform-none">
          <Preview formData={formData} />
        </div>

        {/* Mobile Finalize Float if needed, but ControlPanel has one */}
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default App
