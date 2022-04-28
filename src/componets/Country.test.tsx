import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import Country from "./Country";

jest.mock("react-router-dom",()=>{
    return{
        useLocation:()=>{
            return{
                state:'india'
            }
        },
        useNavigate:()=>jest.fn()
    }
})

describe('country component test componet',()=>{
    test('snap shot for contry componet',()=>{
        const tree = render(
            <Country/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    jest.setTimeout(10000);

    test('snap shot for contry componet',async()=>{
        render(
            <Country/>
        );
         await new Promise((r:any)=>setTimeout(r, 4000));
         const btn = screen.getByTestId('home');
         const capitalBtn = screen.getByTestId('capitalweather');

         fireEvent.click(btn);
         fireEvent.click(capitalBtn)
    })
})