import * as React from 'react'
import styled from 'styled-components'

function MyComponent() {
  return (
    <div>
      <Div>
        <Column>
          <Div2>
            <Div3>
              <Div4>
                <Div5>Pyth vault</Div5>
                <Img loading="lazy" src="/external-link-2.svg" />
              </Div4>
            </Div3>
            <Img2 loading="lazy" src="pyth-network-pyth-logo-1.png" />
            <Div6>Unavailable</Div6>
            <Div7 />
            <Div8>
              <Div9>
                <Div10>Vault balance</Div10>
                <Div11>Vault performance</Div11>
              </Div9>
              <Div12>
                <Div13>
                  <Img3 loading="lazy" src="/pyth-network-pyth-logo-4.png" />
                  <Div14>7,675,567.88</Div14>
                </Div13>
                <Div15>View</Div15>
              </Div12>
            </Div8>
            <Div16 />
            <Div17>
              <Div18>
                <Div19>Your Stake </Div19>
                <Div20>Your Earning </Div20>
                <Div21>Vault Share</Div21>
              </Div18>
              <Div22>
                <Div23>
                  <Img4 loading="lazy" src="/pyth-network-pyth-logo-4.png" />
                  <Div24>0.00</Div24>
                </Div23>
                <Div25>
                  <Img5 loading="lazy" src="/pyth-network-pyth-logo-4.png" />
                  <Div26>-4.53</Div26>
                </Div25>
                <Div27>&lt;0.1%</Div27>
              </Div22>
            </Div17>
            <Div28>
              <Div29>Unavailable</Div29>
              <Div30>UnStake</Div30>
            </Div28>
            <Div31>
              <Div32>Wallet Balance :</Div32>
              <Div33>0.00 PYTH</Div33>
            </Div31>
          </Div2>
        </Column>
        <Column2>
          <Div34>
            <Div35>
              <Div36>
                <Div37>SOL vault</Div37>
                <Img6 loading="lazy" src="/external-link-2.svg" />
              </Div36>
            </Div35>
            <Img7 loading="lazy" src="/pyth-network-pyth-logo-1-1.png" />
            <Div38>Unavailable</Div38>
            <Div39 />
            <Div40>
              <Div41>
                <Div42>Vault balance</Div42>
                <Div43>Vault performance</Div43>
              </Div41>
              <Div44>
                <Div45>
                  <Img8 loading="lazy" src="/pyth-network-pyth-logo-4-1.png" />
                  <Div46>7,675,567.88</Div46>
                </Div45>
                <Div47>View</Div47>
              </Div44>
            </Div40>
            <Div48 />
            <Div49>
              <Div50>
                <Div51>Your Stake </Div51>
                <Div52>Your Earning </Div52>
                <Div53>Vault Share</Div53>
              </Div50>
              <Div54>
                <Div55>
                  <Img9 loading="lazy" src="/pyth-network-pyth-logo-4-1.png" />
                  <Div56>0.00</Div56>
                </Div55>
                <Div57>
                  <Img10 loading="lazy" src="/pyth-network-pyth-logo-4-1.png" />
                  <Div58>-4.53</Div58>
                </Div57>
                <Div59>&lt;0.1%</Div59>
              </Div54>
            </Div49>
            <Div60>
              <Div61>Unavailable</Div61>
              <Div62>UnStake</Div62>
            </Div60>
            <Div63>
              <Div64>Wallet Balance :</Div64>
              <Div65>0.00 SOL</Div65>
            </Div63>
          </Div34>
        </Column2>
        <Column3>
          <Div66>
            <Div67>
              <Div68>
                <Div69>BNB vault</Div69>
                <Img11 loading="lazy" src="/external-link-2.svg" />
              </Div68>
            </Div67>
            <Img12 loading="lazy" src="/pyth-network-pyth-logo-1-2.png" />
            <Div70>Unavailable</Div70>
            <Div71 />
            <Div72>
              <Div73>
                <Div74>Vault balance</Div74>
                <Div75>Vault performance</Div75>
              </Div73>
              <Div76>
                <Div77>
                  <Img13 loading="lazy" src="/pyth-network-pyth-logo-4-2.png" />
                  <Div78>7,675,567.88</Div78>
                </Div77>
                <Div79>View</Div79>
              </Div76>
            </Div72>
            <Div80 />
            <Div81>
              <Div82>
                <Div83>Your Stake </Div83>
                <Div84>Your Earning </Div84>
                <Div85>Vault Share</Div85>
              </Div82>
              <Div86>
                <Div87>
                  <Img14 loading="lazy" src="/pyth-network-pyth-logo-4-2.png" />
                  <Div88>0.00</Div88>
                </Div87>
                <Div89>
                  <Img15 loading="lazy" src="/pyth-network-pyth-logo-4-2.png" />
                  <Div90>-4.53</Div90>
                </Div89>
                <Div91>&lt;0.1%</Div91>
              </Div86>
            </Div81>
            <Div92>
              <Div93>Unavailable</Div93>
              <Div94>UnStake</Div94>
            </Div92>
            <Div95>
              <Div96>Wallet Balance :</Div96>
              <Div97>0.00 BNB</Div97>
            </Div95>
          </Div66>
        </Column3>
      </Div>
    </div>
  )
}

const Div = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
  margin: 30px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 400px;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const Div2 = styled.div`
  box-shadow: 0 0 20px #31eaf6;
  border-radius: 30px;
  background-color: #1f2229;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 700;
  margin: 0 auto;
  padding: 0px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div3 = styled.div`
  background-color: #26727b;
  align-self: stretch;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  padding: 26px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  max-width: 100%;
  padding: 27px 0px 27px 0px;
  opacity: 0.6;
`

const Div4 = styled.div`
  display: flex;
  gap: 18px;
`

const Div5 = styled.div`
  font-family: Sen, sans-serif;
`

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
  align-self: start;
`

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 70px;
  margin-top: 41px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div6 = styled.div`
  margin-top: 27px;
  font: 17px Sen, sans-serif;
`

const Div7 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 38px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div8 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
  margin: 25px 35px 0px 40px;
  @media (max-width: 991px) {
    margin-right: 9px;
  }
`

const Div9 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Div10 = styled.div`
  font-family: Sen, sans-serif;
`

const Div11 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div12 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div13 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div14 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div15 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 18px;
`

const Div16 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 27px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div17 = styled.div`
  display: flex;
  margin-top: 17px;
  width: 297px;
  max-width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
`

const Div18 = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  flex: 1;
`

const Div19 = styled.div`
  font-family: Sen, sans-serif;
`

const Div20 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div21 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 23px;
`

const Div22 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div23 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div24 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div25 = styled.div`
  display: flex;
  margin-top: 17px;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img5 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div26 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div27 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 14px;
`

const Div28 = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 16px;
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div29 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div30 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 40px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div31 = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 9px;
  font-size: 10px;
`

const Div32 = styled.div`
  font-family: Sen, sans-serif;
  flex-grow: 1;
`

const Div33 = styled.div`
  font-family: Sen, sans-serif;
`

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 400px;
  margin-left: 70px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const Div34 = styled.div`
  box-shadow: 0 0 20px #31eaf6;
  border-radius: 30px;
  background-color: #1f2229;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 700;
  margin: 0 auto;
  padding: 0px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div35 = styled.div`
  background-color: #26727b;
  align-self: stretch;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  padding: 27px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  max-width: 100%;
  padding: 27px 0px 27px 0px;
  opacity: 0.6;
`

const Div36 = styled.div`
  display: flex;
  gap: 10px;
`

const Div37 = styled.div`
  font-family: Sen, sans-serif;
`

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
`

const Img7 = styled.img`
  aspect-ratio: 1.05;
  object-fit: auto;
  object-position: center;
  width: 74px;
  margin-top: 41px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div38 = styled.div`
  margin-top: 27px;
  font: 17px Sen, sans-serif;
`

const Div39 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 38px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div40 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
  margin: 25px 35px 0px 40px;
  @media (max-width: 991px) {
    margin-right: 9px;
  }
`

const Div41 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Div42 = styled.div`
  font-family: Sen, sans-serif;
`

const Div43 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div44 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div45 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img8 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div46 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div47 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 18px;
`

const Div48 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 27px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div49 = styled.div`
  display: flex;
  margin-top: 17px;
  width: 297px;
  max-width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
`

const Div50 = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  flex: 1;
`

const Div51 = styled.div`
  font-family: Sen, sans-serif;
`

const Div52 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div53 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 23px;
`

const Div54 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div55 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img9 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div56 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div57 = styled.div`
  display: flex;
  margin-top: 17px;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img10 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div58 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div59 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 14px;
`

const Div60 = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 16px;
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div61 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div62 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 40px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div63 = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 9px;
  font-size: 10px;
`

const Div64 = styled.div`
  font-family: Sen, sans-serif;
  flex-grow: 1;
`

const Div65 = styled.div`
  font-family: Sen, sans-serif;
`

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 400px;
  margin-left: 70px;
  @media (max-width: 991px) {
    width: 100%;
  }
`

const Div66 = styled.div`
  box-shadow: 0 0 20px #31eaf6;
  border-radius: 30px;
  background-color: #1f2229;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 700;
  margin: 0 auto;
  padding: 0px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div67 = styled.div`
  background-color: #26727b;
  align-self: stretch;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  padding: 27px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  border-radius: 30px 30px 0px 0px;
  width: 100%;
  max-width: 100%;
  padding: 27px 0px 27px 0px;
  opacity: 0.6;
`

const Div68 = styled.div`
  display: flex;
  gap: 8px;
`

const Div69 = styled.div`
  font-family: Sen, sans-serif;
  flex-grow: 1;
`

const Img11 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 15px;
`

const Img12 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 70px;
  margin-top: 41px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const Div70 = styled.div`
  margin-top: 27px;
  font: 17px Sen, sans-serif;
`

const Div71 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 38px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div72 = styled.div`
  align-self: stretch;
  display: flex;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
  margin: 25px 35px 0px 40px;
  @media (max-width: 991px) {
    margin-right: 9px;
  }
`

const Div73 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Div74 = styled.div`
  font-family: Sen, sans-serif;
`

const Div75 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div76 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div77 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img13 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div78 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div79 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 18px;
`

const Div80 = styled.div`
  border-color: rgba(59, 54, 54, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #3b3636;
  margin-top: 27px;
  width: 325px;
  max-width: 100%;
  height: 1px;
`

const Div81 = styled.div`
  display: flex;
  margin-top: 17px;
  width: 297px;
  max-width: 100%;
  align-items: start;
  gap: 20px;
  font-size: 13px;
  font-weight: 400;
`

const Div82 = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  flex: 1;
`

const Div83 = styled.div`
  font-family: Sen, sans-serif;
`

const Div84 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 26px;
`

const Div85 = styled.div`
  font-family: Sen, sans-serif;
  margin-top: 23px;
`

const Div86 = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div87 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img14 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div88 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div89 = styled.div`
  display: flex;
  margin-top: 17px;
  gap: 11px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Img15 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`

const Div90 = styled.div`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

const Div91 = styled.div`
  font-family: Sen, sans-serif;
  align-self: end;
  margin-top: 14px;
`

const Div92 = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 16px;
  font-size: 10px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div93 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 32px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div94 = styled.div`
  font-family: Sen, sans-serif;
  border-radius: 8px;
  background-color: #26727b;
  justify-content: center;
  padding: 10px 40px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const Div95 = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 9px;
  font-size: 10px;
`

const Div96 = styled.div`
  font-family: Sen, sans-serif;
  flex-grow: 1;
`

const Div97 = styled.div`
  font-family: Sen, sans-serif;
`

export default MyComponent
