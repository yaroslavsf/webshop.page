import cypress from "cypress";

describe('empty spec', () => {
  it('click on product page triggers the api call, make sure data api is right', () => {
    cy.visit('/products');
    const button = cy.contains('Buy').first()
    button.click()
    const name = cy.get('p[id="name-id"]').should('have.text', 'Nike CPFM Flea 1')
    const littleDescription = cy.get('p[id="littleDescription-id"]').should('have.text', 'Cactus Plant Flea')
    const image = cy.get('img[id="image-id"]').should('have.attr', 'src').should('include','https://images.stockx.com/images/Nike-Dunk-Low-Cactus-Plant-Flea-Market-Grinch.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660682148&q=75')
    const price = cy.get('h5[id="price-id"]').should('have.text', '284 $')
    const category = cy.get('div[id="category-id"]').should('have.text', 'Sneakers')
    const fullDescription = cy.get('p[id="fullDescription-id"]').should('have.text', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged")
    const condition = cy.get('p[id="condition-id"]').should('have.text', 'Condition: New')
  })
})
/*
{
        id : 1,
        name : "Nike CPFM Flea 1",
        condition: "New",
        category: "Sneakers",
        price: 284,
        littleDescription: "Cactus Plant Flea",
        fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        imagePathURL: "https://images.stockx.com/images/Nike-Dunk-Low-Cactus-Plant-Flea-Market-Grinch.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660682148&q=75"
}
*/