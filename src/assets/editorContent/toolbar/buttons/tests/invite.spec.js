import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/svelte"
import Test from "../invite"

test("'Invite-button' loads", () => {
    let mockEmail = jest.fn()
    render(Test, {
        email: "",
        handleEmail: mockEmail
    })

    let button = screen.getByRole('button', { name: 'Invite' })

    expect(button).toBeInTheDocument()
})

test("'Email-input' loads", () => {
    let mockEmail = jest.fn()
    render(Test, {
        email: "",
        handleEmail: mockEmail
    })

    let button = screen.getByPlaceholderText('Invite via Email...')

    expect(button).toBeInTheDocument()
})

test("'Invite-button' action", async () => {
    let mockEmail = jest.fn()
    render(Test, {
        email: "",
        handleEmail: mockEmail
    })

    let button = screen.getByRole('button', { name: 'Invite' })

    expect(button).toBeInTheDocument()

    await fireEvent.click(button)

    expect(mockEmail.mock.calls.length).toEqual(1)
})