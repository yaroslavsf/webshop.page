import React from "react"
import { MemoryRouter } from "react-router-dom"

import {Card} from '../../../src/components/moleculas/Card'
describe('Card.cy.tsx', () => {
  it('card should check if the props passed to Image and Button are right', () => {
    cy.mount(
      <MemoryRouter>
    <Card buttonText="123" imagePathURL="321"></Card>
    </MemoryRouter>
    )
    const button = cy.get('button').should('have.text', '123')
    const img = cy.get('img').should('have.attr', 'src').should('include','321')
  })
})