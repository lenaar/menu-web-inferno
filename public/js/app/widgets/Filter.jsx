import Component from 'inferno-component'
import classnames from 'classnames'
import Nav from 'inferno-bootstrap/lib/Navigation/Nav.jsx'
import NavItem from 'inferno-bootstrap/lib/Navigation/NavItem.jsx'
import NavLink from 'inferno-bootstrap/lib/Navigation/NavLink.jsx'

/*
Usage:

<Filter onChange={(value) => {...}}>
  <FilterItem value={}>jkdfjkfd</FilterItem>
  <FilterItem>jkdfjkfd</FilterItem>
  <FilterItem>jkdfjkfd</FilterItem>
  <FilterItem>jkdfjkfd</FilterItem>
</Filter>
*/

export function FilterItem (props) {
  return null
}

export function Filter ({className, value, onChange, ...props}) {
  return (
    <Nav pills className={classnames('nav-filter', className)}>
      {props.children.map((item) => {
        const active = value === item.props.value

        return (
          <NavItem>
            <NavLink href="#" onClick={(e) => {e.preventDefault(); onChange(item.props.value)}} active={active} {...item.props} />
          </NavItem>
        )
      })}
    </Nav>
  )
}
