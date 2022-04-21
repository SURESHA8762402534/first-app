import { screen,render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Country from "../component/Country";
import Nav from "../component/Nav";

it('app snap country',()=>{
    const tree = render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})

describe('test for country',()=>{
    
jest.setTimeout(10000);
test('app snap country button',async()=>{
     render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    )
    await new Promise((r) => setTimeout(r, 5000));
    // expect(screen.getByTitle('capitalweather')).toBeInTheDocument()
    // expect(screen.getByRole('button')).toBeInTheDocument()

    // expect(screen.getByText(/capital Weather/i)).toBeInTheDocument()
})
})


