/// <reference types="cypress" />


describe('Testes para a agenda de contatos', () => {

    let contatos

    
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.contato').its('length').then(
            len => {
                contatos = len
            }
        )
        console.log(contatos)
    })
    
    it('Deve adicionar um contato', () => {
        cy.get('[type=text]').type('Vitor Silva')
        cy.get('[type=email]').type('vitor2000rs@gmail.com')
        cy.get('[type=tel]').type('11975895809')
        cy.get('.adicionar').click()
        cy.get('.contato').should('have.length', contatos + 1)
    })

    it('Deve editar um contato', () => {
        cy.get('.contato > .sc-gueYoa > .edit').last().click()
        cy.get('[type=text]').clear().type('Renato Silva')
        cy.get('[type=email]').clear().type('renas@gmail.com')
        cy.get('[type=tel]').clear().type('11978594615')
        cy.get('.alterar').click()
        cy.get('.contato > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').last().should('contain', 'Renato')
    })

    it('Deve remover um contato', () => {
        cy.get('.contato > .sc-gueYoa > .delete').last().click()
        cy.get('.contato').should('have.length', contatos - 1)
    })
})