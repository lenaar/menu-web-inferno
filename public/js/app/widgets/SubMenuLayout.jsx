import Container from 'inferno-bootstrap/lib/Container.jsx'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'
import Row from 'inferno-bootstrap/lib/Row.jsx'
import Col from 'inferno-bootstrap/lib/Col.jsx'

export function SubjectLink ({href, className, children}) {
  return (
    <NavItem>
      <NavLink href={href} className={className}>{children}</NavLink>
    </NavItem>
  )
}

export function SubjectNav ({title, children}) {
  return (
    <div>
      <h4>{title}</h4>
      <Nav  vertical className="white-m">
        {children}
      </Nav>
    </div>
  )
}



export function SectionHeader ({title, children}) {
  return (
    <Row>
      <Col>
        <h3>{title} </h3>  {children}
      </Col>
    </Row>
  )
}

export function ColumnNav ({children}) { 
    return (
    <Col>
        <Nav vertical>
            {children}          
        </Nav>
    </Col>
    )
}

export function ContainerRow ({className, title, children}){
  return (
    <Container className={className}>
      <SectionHeader title={title}/>
      <Row>
        {children}
      </Row>
    </Container>
  )
}