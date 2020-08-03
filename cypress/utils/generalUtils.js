export function hello(name)
{
    cy.log(name);
}

export function getCyData(selector)
{
    return "[data-cy=" + selector + "]"
}