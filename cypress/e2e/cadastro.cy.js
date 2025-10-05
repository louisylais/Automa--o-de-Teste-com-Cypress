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

   //Login com campos vazios  
   it('Login com campos vazios', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]')
    cy.get('[data-testid="senha"]')
    cy.get('[data-testid="entrar"]').click ('')
   })

   //Login com email inválido  
   it('Login com email inválido', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.con')
    cy.get('[data-testid="senha"]').type ('12345')
    cy.get('[data-testid="entrar"]').click ('')
   })

   //Login com senha inválida  
   it('Login com senha inválida', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type ('louisylais@gmail.com')
    cy.get('[data-testid="senha"]').type ('123')
    cy.get('[data-testid="entrar"]').click ('')
   })
  })