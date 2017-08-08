'use strict'

import Component from 'inferno-component'
import {Animated} from 'inferno-animation'
import Container from 'inferno-bootstrap/lib/Container.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import { SubjectLink, Subject, SectionHeader, ColumnNav } from '../widgets/SubMenuLayout.jsx'


class ServicesPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const lang = 'sv' // TODO: Pick up from actual language settings

    return (
        <div className="kth-menu-content">
          <Container id="study-admin">
            <SectionHeader title="Mina studier"/>
              <Row>
                <ColumnNav>
                  <SubjectLink href="#"> Studieöversikt</SubjectLink>
                  <SubjectLink href="#"> Resultat</SubjectLink>
                  <SubjectLink href="#"> Registreringar</SubjectLink>
                  <SubjectLink href="#"> Tentamen</SubjectLink>
                  <SubjectLink href="#" >Kommande tentamen</SubjectLink>
                  <SubjectLink href="#" > Inscannade tentor</SubjectLink>
                  <SubjectLink href="#">Kommande kurser</SubjectLink>
                  <SubjectLink href="#" > Intyg</SubjectLink>
                  <SubjectLink href="#" >Examensansökan</SubjectLink>
                </ColumnNav>
                <ColumnNav>
                    <SubjectLink href="#"> Bibliotek</SubjectLink>
                    <SubjectLink href="#"> Grupprum</SubjectLink>
                    <SubjectLink href="#"> Arlig bibliometrisk uppföljning </SubjectLink>
                    <SubjectLink href="#"> Artiklar och böcker </SubjectLink>
                    <SubjectLink href="#">Lediga datorer i Datorsalarna </SubjectLink>
                    <SubjectLink href="#">Forskarstudier </SubjectLink>
                    <SubjectLink href="#">UG-grupper </SubjectLink>
              </ColumnNav>
            </Row>
        </Container>
      </div>
    )
  }
}

export default ServicesPage