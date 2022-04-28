import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from '../App'
import Nav from "./Nav";

jest.mock('react-router-dom',()=>{
    return{
        useNavigate:()=>jest.fn()
    }
})

describe('nav test componet',()=>{
    test('snap shot for nav',()=>{
        const tree = render(
            <Nav/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    test('snap shot for nav',()=>{
        render(
            <Nav/>
        );
        const txt = screen.getByRole('textbox');
        const btn = screen.getByRole('button');

        expect(txt).toBeInTheDocument();
        expect(btn).toBeDisabled();

        fireEvent.click(btn)
        fireEvent.submit(btn);
        fireEvent.change(txt, {target:{value:'test'}});
        
    })
})