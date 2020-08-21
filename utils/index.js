export const findByTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
}
