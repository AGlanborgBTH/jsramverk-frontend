import "@testing-library/jest-dom"
import { render, screen  } from "@testing-library/svelte"
import Test from "../dropdown"

test("Title-textbox loads", () => {
    render(Test, {
        all: [],
        active: {
            id: "",
            content: ""
        },
        title: ""
    })

    let text = screen.getByRole('textbox', { name: "" })

    expect(text).toBeInTheDocument()
})

test("Title-textbox loads /w id", () => {
    render(Test, {
        all: [],
        active: {
            id: "test",
            content: ""
        },
        title: ""
    })

    let text = screen.getByRole('textbox', { name: "" })
    let txt = document.getElementById("test")

    expect(text).toBeInTheDocument()
    expect(text).toBeInTheDocument()

    expect(text).toEqual(txt)
})

test("'New Document'-button loads", () => {
    render(Test, {
        all: [],
        active: {id: "Title"},
        title: ""
    })

    let newDoc = document.getElementById("New Document")

    expect(newDoc).toBeDefined();
})

test("Doc-button loads", () => {
    render(Test, {
        all: [{
            _id: "123",
            title: "Test"
        }],
        active: {id: "Title"},
        title: ""
    })

    let doc = document.getElementById("123")

    expect(doc).toBeDefined();
    expect(doc).toHaveValue("Test")
})
