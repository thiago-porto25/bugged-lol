import React, { useEffect, useState } from 'react'
import {
  AddButton,
  Box,
  Container,
  Form,
  Input,
  Label,
  NextButton,
  RemoveButton,
  Text,
  Title,
} from './styles/Education'

export default function Education(props) {
  useEffect(() => {
    props.setProgress(2)
  }, [])

  return <div>i'm Education</div>
}

/*
ter degree, nome da instituicao, ano de entrada, ano de conclusao. se cursando deixar em branco
*/
