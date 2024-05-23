import * as React from 'react'
import styled from 'styled-components'

export default function Landing_Feature({ src, title, definition }) {
  return (
    <Div>
      <Div2>
        <Img src={'/images/' + src} />
        <Div3>{title}</Div3>
      </Div2>
      <Div4>{definition}</Div4>
    </Div>
  )
}

const Div = styled.div`
  border-radius: 20px;
  background-color: #212728;
  display: flex;
  max-width: 394px;
  flex-direction: column;
  color: #fff;
  padding: 27px 45px 79px;
  box-shadow: 0 0 20px #31eaf6;
`

const Div2 = styled.div`
  display: flex;
  gap: 20px;
  font-size: 25px;
  font-weight: 700;
`

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 26px;
  padding: 5px;
  border-radius: 5px;
  align-self: start;
  box-shadow: 0 0 10px #31eaf6;
`

const Div3 = styled.div`
  font-family: Sen, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`

const Div4 = styled.div`
  margin-top: 36px;
  font: 400 15px Sen, sans-serif;
`
