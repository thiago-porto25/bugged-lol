import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import DataContext from '../context/DataContext'
import {
  Education,
  Experience,
  Footer,
  GeneralInfo,
  Header,
  ProgressBar,
  Skills,
} from '../components'

export default function Creating(props) {
  const { setCurrentCv, setData, currentCv } = useContext(DataContext)
  const [inGeneralInfo, setInGeneralInfo] = useState(false)
  const [inEducation, setInEducation] = useState(false)
  const [inExperience, setInExperience] = useState(false)
  const [inSkills, setInSkills] = useState(true)
  const [progress, setProgress] = useState(0)

  const CreatingBg = styled.div``

  const CreatingContainer = styled.div``

  useEffect(() => {
    return () => {
      setInGeneralInfo(true)
      setInEducation(false)
      setInExperience(false)
      setInSkills(false)
      setProgress(0)
    }
  }, [])

  return (
    <CreatingBg>
      <Header {...props} />
      <CreatingContainer>
        <ProgressBar progress={progress} />
        {inGeneralInfo && (
          <GeneralInfo
            setInGeneralInfo={setInGeneralInfo}
            setInEducation={setInEducation}
            setCurrentCv={setCurrentCv}
            setProgress={setProgress}
          />
        )}
        {inEducation && (
          <Education
            setInEducation={setInEducation}
            setInExperience={setInExperience}
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            setProgress={setProgress}
          />
        )}
        {inExperience && (
          <Experience
            setInExperience={setInExperience}
            setInSkills={setInSkills}
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            setProgress={setProgress}
          />
        )}
        {inSkills && (
          <Skills
            setInSkills={setInSkills}
            setInExperience={setInExperience}
            setCurrentCv={setCurrentCv}
            currentCv={currentCv}
            setData={setData}
            setInCreating={props.setInCreating}
            setInPreview={props.setInPreview}
            setProgress={setProgress}
          />
        )}
      </CreatingContainer>
      <Footer />
    </CreatingBg>
  )
}
