describe('Teste Cadastro', () => {
   //Cadastro bem sucedido
   it('Cadastro bem sucedido', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type ('Louisy Lais')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.com')
    cy.get('[data-testid="password"]').type ('12345')
    cy.get('[data-testid="cadastrar"]').click ('')
   })

   //Cadastro com campo nome vazio 
   it('Cadastro com campo nome vazio', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.com')
    cy.get('[data-testid="password"]').type ('12345')
    cy.get('[data-testid="cadastrar"]').click ('')
   })

   //Cadastro com campo email vazio 
   it('Cadastro com campo email vazio', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type ('Louisy Lais')
    cy.get('[data-testid="email"]')
    cy.get('[data-testid="password"]').type ('12345')
    cy.get('[data-testid="cadastrar"]').click ('')
   })

   //Cadastro com campo senha vazio 
   it('Cadastro com campo senha vazio', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type ('Louisy Lais')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.com')
    cy.get('[data-testid="password"]')
    cy.get('[data-testid="cadastrar"]').click ('')
   })

   //Cadastro com nome inválido 
   it('Cadastro com campo nome inválido', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type ('19cdd###')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.com')
    cy.get('[data-testid="password"]').type ('12345')
    cy.get('[data-testid="cadastrar"]').click ('')
   })

})
