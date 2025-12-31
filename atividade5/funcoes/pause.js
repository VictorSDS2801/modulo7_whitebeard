function pause(promptFn) {
    let input

    do {
        input = promptFn("\nPressione apenas ENTER para continuar...")
    } while (input !== "")
}
