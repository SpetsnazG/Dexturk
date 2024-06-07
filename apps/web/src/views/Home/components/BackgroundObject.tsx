import * as React from 'react'
import styled from 'styled-components'

export default function BackgroundObject() {
  return (
    <Div>
      <DivE></DivE>
      <Div2>
        <Div3 />
        <Div4 />
      </Div2>
      <Div5>
        <Div6>
          <Div7>
            <Div8>
              <Div9>
                <Div10>0.0</Div10>
                <Div11>0 SOL</Div11>
              </Div9>
              <Div12>
                <Div13>
                  <Div14>SOL</Div14>
                </Div13>
                <Div15>USD</Div15>
              </Div12>
            </Div8>
          </Div7>
          <Div16>
            <Div17 />
            <Img style={{ position: 'relative', top: '-200px' }} src="/f.png" />
            <Img style={{ position: 'relative', top: '-200px' }} src="/frame15.png" />
          </Div16>
        </Div6>
        <Div18 />
      </Div5>
    </Div>
  )
}
/* Ellipse 40 */
const DivE = styled.div`
  position: absolute;
  width: 320px;
  height: 319px;

  background: #31eaf6;
  filter: blur(200px);
`

const Div = styled.div`
  display: flex;
  max-width: 561px;
  flex-direction: column;
`

const Div2 = styled.div`
  align-self: center;
  display: flex;
  width: 381px;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;
`

const Div3 = styled.div`
  stroke-width: 4px;
  border-color: rgba(49, 234, 246, 1);
  border-style: solid;
  border-width: 4px;
  background-color: rgba(49, 234, 246, 0.4);
  border-radius: 50%;
  align-self: start;
  width: 21px;
  height: 21px;
`

const Div4 = styled.div`
  stroke-width: 4px;
  border-color: rgba(49, 234, 246, 1);
  border-style: solid;
  border-width: 4px;
  background-color: rgba(49, 234, 246, 0.4);
  border-radius: 50%;
  width: 130px;
  height: 130px;
`

const Div5 = styled.div`
  display: flex;
  gap: 0px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const Div7 = styled.div`
  border-radius: 10px;
  background: linear-gradient(180deg, #404450 0%, #2c313a 100%);
  border-color: rgba(135, 125, 125, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 400;
  justify-content: center;
  padding: 17px 38px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`

const Div8 = styled.div`
  display: flex;
  width: 100%;
  padding-right: 80px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
`

const Div9 = styled.div`
  display: flex;
  flex-direction: column;
`

const Div10 = styled.div`
  font: 14px Sen, sans-serif;
`

const Div11 = styled.div`
  margin-top: 4px;
  font: 8px Sen, sans-serif;
`

const Div12 = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  font-size: 8px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div13 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div14 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 5px;
  background-color: #31eaf6;
  justify-content: center;
  padding: 6px 7px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div15 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div16 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 110px;
  width: 372px;
  max-width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div17 = styled.div`
  stroke-width: 4px;
  border-color: rgba(49, 234, 246, 1);
  border-style: solid;
  border-width: 4px;
  background-color: rgba(49, 234, 246, 0.4);
  border-radius: 50%;
  width: 67px;
  height: 67px;
`

const Img = styled.img`
  object-position: center;
  width: 351px;
  align-self: end;
  margin-top: 53px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div18 = styled.div`
  stroke-width: 4px;
  border-color: rgba(49, 234, 246, 1);
  border-style: solid;
  border-width: 4px;
  background-color: rgba(49, 234, 246, 0.4);
  border-radius: 50%;
  align-self: start;
  margin-top: 271px;
  width: 67px;
  height: 67px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`
