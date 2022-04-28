import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import Weather from "./Weather";


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

describe('weather component test componet',()=>{
    test('snap shot for weather componet',()=>{
        const tree = render(
            <Weather/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    jest.setTimeout(10000);

    test('function test for weather componet',async()=>{
        render(
            <Weather/>
        );
         await new Promise((r:any)=>setTimeout(r, 4000));
         const btn = screen.getByTestId('back');
         

         fireEvent.click(btn);
         
    })
})